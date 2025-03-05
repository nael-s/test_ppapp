import { z } from "zod";

const ColumnSchema = z.object({
    lg: z.number(),
    md: z.number(),
    sm: z.number(),
})

const RowSchema = z.object({
    label: z.string(),
    highlight: z.boolean(),
    column: ColumnSchema.array()
})

const GridSchema = z.object({
    row: RowSchema.array()
})

const GrafikSchema = z.object({
    id: z.number(),
    dashboardId: z.number(),
    level_wilayah: z.array(z.string()),
    show: z.boolean(),
    label: z.string(),
    deskripsi: z.string(),
    model_chart: z.string(),
    row: z.number(),
    column: z.number(),
    column_size: z.number(),
    variabel: z.array(z.string()),
});


const DashboardSchema = z.object({
    id: z.number(),
    label: z.string(),
    role: z.array(z.string()),
    description: z.string(),
    path_user: z.string(),
    grid: GridSchema,
    variabel: z.array(z.string()),
    show: z.boolean(),
    icon: z.string(),
    grafik: GrafikSchema.array()
})

export type DashboardType = z.infer<typeof DashboardSchema>