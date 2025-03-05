import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { DashboardEntity, Role } from ".";
import { Expose } from "class-transformer";

@Entity("dashboard_roles")
export class DashboardRole {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @ManyToOne(() => DashboardEntity, (dashboard) => dashboard.roles)
    dashboard: DashboardEntity;

    @Expose()
    @ManyToOne(() => Role, (role) => role.dashboardRoles)
    role: Role;
}
