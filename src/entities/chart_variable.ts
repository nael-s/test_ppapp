import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { DashboardChart } from ".";

@Entity("chart_variables")
export class ChartVariable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    variabel: string;

    @ManyToMany(() => DashboardChart, (chart) => chart.variabel)
    chart: DashboardChart;
}
