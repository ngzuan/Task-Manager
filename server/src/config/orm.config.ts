import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function buildDatabaseConnectionOptions(): TypeOrmModuleOptions {
    const connectionParams = {
        database: process.env.DB_NAME,
        port: parseInt(process.env.PG_PORT) || 5432,
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        host: process.env.PG_HOST,
        connectTimeoutMS: 5000,
        synchronize: true,
        autoLoadEntities: true,
        logging: process.env.ORM_LOGGING || false,
        extra: {
            max: 25,
        },
    };

    return {
        name: 'taskmanager',
        type: 'postgres',
        ...connectionParams,
        synchronize: false,
        uuidExtension: 'pgcrypto',
        migrationsRun: false,
        migrationsTransactionMode: 'all',
        logging: !!process.env.ORM_LOGGING || false,
        keepConnectionAlive: true,
    };
}
