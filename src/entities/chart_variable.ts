import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DashboardChart } from ".";

@Entity("chart_variables")
export class ChartVariable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    variabel: string;

    @ManyToOne(() => DashboardChart, (chart) => chart.variabel)
    chart: DashboardChart;
}
