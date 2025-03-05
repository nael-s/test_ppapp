import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
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
    @ManyToMany(() => DashboardGridRowColumn, (column) => column.row, { cascade: true })
    @JoinTable({
        name: "dashboard_grid_row_column",
        joinColumn: {
            name: "grid_column_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "dashboard_grid_row_column_id",
            referencedColumnName: "id"
        }
    })
    column: DashboardGridRowColumn[];

    @ManyToOne(() => DashboardEntity, (dashboard) => dashboard.grid, { onDelete: "CASCADE" })
    dashboard: DashboardEntity;
}
