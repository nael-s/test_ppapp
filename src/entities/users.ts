import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Role } from ".";
import { Exclude, Expose } from "class-transformer";

@Entity("users")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column({ unique: true })
    username: string;

    @Exclude()
    @Column()
    password: string;

    @ManyToMany(() => Role)
    @JoinTable({
        name: "user_roles",
        joinColumn: { name: "user_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "role_id", referencedColumnName: "id" }
    })
    roles: Role[];
}