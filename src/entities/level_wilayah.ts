import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { DashboardChart } from ".";
import { Exclude, Expose } from "class-transformer";

@Entity("level_wilayah")
export class LevelWilayahEntity {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column()
    name: string;
    
    @ManyToMany(() => DashboardChart, (chart) => chart.level_wilayah)
    charts: DashboardChart[];
}
