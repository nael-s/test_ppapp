import 'reflect-metadata';
import { DataSource } from "typeorm";
import { env } from 'process';
import { DashboardEntity, DashboardRole, DashboardChart, ChartVariable, Role, DashboardGridRow, DashboardGridRowColumn, LevelWilayahEntity } from '@/entities/index';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: env.DB_USERNAME || 'root',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'testing_ppapp',
    synchronize: true,
    logging: false,
    entities: [DashboardEntity, DashboardRole, DashboardChart, ChartVariable, Role, DashboardGridRow, DashboardGridRowColumn, LevelWilayahEntity],
});
