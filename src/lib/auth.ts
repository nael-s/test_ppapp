import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Api } from "@/network/axiosInstance"; 

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 86400, 
    },
    providers: [
        CredentialsProvider({
            name: "Username and Password",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Username and password are required.");
                }

                try {
                    const res = await Api.post("/login", {
                        username: credentials.username,
                        password: credentials.password,
                    });

                    if (res.status !== 200) {
                        throw new Error("Authentication failed.");
                    }

                    const username = res.data;
                    if (username) {
                        return username;
                    } else {
                        throw new Error("Invalid user data.");
                    }
                } catch (error:any) {
                    throw new Error("Authentication failed: " + error?.message);
                }
            },
        }),
    ],
    callbacks: {
        async signIn() {
            return Promise.resolve(true);
        },
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update" && session) {
                token = session;
            }

            return { ...token, ...user };
        },
        async session({ session, token }) {
            console.log(session,'session')
            session.user = token as any;

            return session;
        },
    },
    pages: {
        signIn: "/login", 
        error: "/login",
    },
};
