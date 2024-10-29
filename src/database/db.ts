import { Sequelize } from 'sequelize';

const DB_NAME = 'proyecto_banco_mysql';
export const database = new Sequelize('proyecto_banco_mysql', 'admin', 'GQuin1118.', { host: '127.0.0.1', dialect: 'mysql', port: 3306 });;

async function generateDb() {
    try {
        await database.sync();
        console.log('Database & tables created');
    } catch (error) {
        console.error('Failed to create database:', error);
    }
}

generateDb();
