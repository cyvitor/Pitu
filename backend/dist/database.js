"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://pitu:pitu123@172.16.55.200:3306/pitu');
exports.default = sequelize;
