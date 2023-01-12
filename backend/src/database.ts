import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://pitu:pitu123@172.16.55.200:3306/pitu');

export default sequelize;