import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DashboardRole, DashboardChart } from ".";
import { DashboardGridRow } from "./dashboard_grid_rows";
import { Expose, Type } from "class-transformer";

@Entity("dashboards")
export class DashboardEntity {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column()
    label: string;

    @Expose()
    @Column()
    description: string;

    @Expose()
    @Column()
    path_user: string;

    @Expose()
    @Column()
    icon: string;

    @Expose()
    @Column({ default: true })
    show: boolean;

    @Expose()
    @OneToMany(() => DashboardRole, (role) => role.dashboard)
    @Type(() => DashboardRole)
    roles: DashboardRole[];

    @Expose()
    @OneToMany(() => DashboardChart, (chart) => chart.dashboard)
    grafik: DashboardChart[];

    @Expose()
    @OneToMany(() => DashboardGridRow, (row) => row.dashboard, { cascade: true })
    grid: DashboardGridRow[];
}
