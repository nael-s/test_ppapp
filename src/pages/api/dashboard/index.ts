import { DashboardEntity } from "@/entities/dashboard";
import { AppDataSource } from "@/initializers/database";
import { initDB } from "@/lib/init-db";
import { NextApiRequest, NextApiResponse } from "next";
import { plainToInstance } from "class-transformer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await initDB()

    const dashboardRepository = AppDataSource.getRepository(DashboardEntity)

    const dashboards = await dashboardRepository.find({
        relations: ["roles", "roles.role", "grafik", "grafik.variabel", "grafik.level_wilayah", "grid", 'grid.columns'],
    });

    const result = dashboards.map((dashboard) => ({
        id: dashboard.id,
        label: dashboard.label,
        description: dashboard.description,
        path_user: dashboard.path_user,
        icon: dashboard.icon,
        show: dashboard.show,
        grid: {
            row: dashboard.grid
        },
        role: dashboard.roles.map((r) => r.role.name),
        grafik: dashboard.grafik.map((g) => ({
            id: g.id,
            dashboardId: dashboard.id,
            level_wilayah: g.level_wilayah.map((lw) => lw.name),
            show: dashboard.show,
            label: g.label,
            deskripsi: g.deskripsi,
            model_chart: g.model_chart,
            row: g.row,
            column: g.column,
            column_size: g.column_size,
            variabel: g.variabel.map((v) => v.variabel),
        })),
    }));

    const transformedData = plainToInstance(DashboardEntity, result);

    res.status(200).json(transformedData)
}

export default handler