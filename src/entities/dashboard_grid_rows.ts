import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Exclude, Expose } from "class-transformer";
import { DashboardGridRowColumn, DashboardEntity } from ".";

@Entity("dashboard_grid_rows")
export class DashboardGridRow {

    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Expose()
    @Column()
    label: string;
    
    @Expose()
    @Column({ default: false })
    highlight: boolean;
    
    @Expose()
    @OneToMany(() => DashboardGridRowColumn, (column) => column.row, { cascade: true })
    columns: DashboardGridRowColumn[];

    @ManyToOne(() => DashboardEntity, (dashboard) => dashboard.grid, { onDelete: "CASCADE" })
    dashboard: DashboardEntity;
}
