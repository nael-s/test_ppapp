import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DashboardGridRow } from ".";
import { Exclude, Expose } from "class-transformer";

@Entity("dashboard_grid_rows_columns")
export class DashboardGridRowColumn {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column()
    lg: number;
    
    @Expose()
    @Column()
    md: number;
    
    @Expose()
    @Column()
    sm: number;

    @ManyToOne(() => DashboardGridRow, (row) => row.columns, { onDelete: "CASCADE" })
    row: DashboardGridRow;
}
