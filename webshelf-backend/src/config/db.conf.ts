import { ConnectionOptions } from "typeorm";

export const ormconfig: ConnectionOptions = {
    "type": "mysql",
    "host": process.env.MYSQL_HOST,
    "port": 3306,
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB,
    "entities": ["src/entity/*.ts"],
    "logging": true,
    "synchronize": true,
    "migrations": ["migration/*.js"],
    "cli": {
        "migrationsDir": "migration"
    }
}
