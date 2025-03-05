import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { DashboardRole, UserEntity } from ".";
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

    @ManyToMany(() => UserEntity, (user) => user.roles)
    users: UserEntity[];
}
