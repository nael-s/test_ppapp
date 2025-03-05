import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { DashboardGridRow } from ".";
import { Exclude, Expose } from "class-transformer";

@Entity("grid_column")
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

    @ManyToMany(() => DashboardGridRow, (row) => row.column)
    row: DashboardGridRow;
}
