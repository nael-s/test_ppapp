import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { DashboardEntity, ChartVariable, LevelWilayahEntity } from ".";
import { Expose } from "class-transformer";

@Entity("dashboard_charts")
export class DashboardChart {

    @Expose()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Expose()
    @Column()
    label: string;
    
    @Expose()
    @Column()
    deskripsi: string;
    
    @Expose()
    @Column()
    model_chart: string;
    
    @Expose()
    @Column()
    row: number;
    
    @Expose()
    @Column()
    column: number;
    
    @Expose()
    @Column()
    column_size: number;
    
    @Expose()
    @Column({ default: true })
    show: boolean;
    
    @ManyToOne(() => DashboardEntity, (dashboard) => dashboard.grafik)
    dashboard: DashboardEntity;
    
    @Expose()
    @OneToMany(() => ChartVariable, (variabel) => variabel.chart)
    variabel: ChartVariable[];

    @Expose()
    @ManyToMany(() => LevelWilayahEntity, { cascade: true })
    @JoinTable({
        name: "dashboard_chart_level_wilayah", 
        joinColumn: { name: "chart_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "level_wilayah_id", referencedColumnName: "id" }
    })
    level_wilayah: LevelWilayahEntity[];
}
