import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'ts_tutorial',
  username: 'mamatosai',
  password: 'mamaosai',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: console.log,
  timezone: 'Asia/Jakarta',
});

export default sequelize;
