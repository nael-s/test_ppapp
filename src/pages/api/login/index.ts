import { UserEntity } from '@/entities';
import { AppDataSource } from '@/initializers/database';
import { initDB } from '@/lib/init-db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await initDB();
    const userRepository = AppDataSource.getRepository(UserEntity);

    if (req.method === 'POST') {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password are required' });
            }

            const existingUser = await userRepository.findOne({
                where: { username: username }
            });

            if (!existingUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            if (password !== existingUser.password) {
                return res.status(401).json({ error: 'Invalid password' });
            }

            return res.status(200).json(existingUser);
        } catch (error: any) {
            return res.status(500).json({ error: error.message || 'Failed to handle request' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
};

export default handler;
