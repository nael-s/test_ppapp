import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DashboardRole } from ".";
import { Exclude, Expose } from "class-transformer";

@Entity("roles")
export class Role {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column({ unique: true }) 
    name: string;

    @OneToMany(() => DashboardRole, (dashboardRole) => dashboardRole.role)
    dashboardRoles: DashboardRole[];
}
