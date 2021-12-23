const Sequelize = require("sequelize");

const Env = require('./env');


const associateAll = async (models) => {
    await Object.values(models).map((model) => model.associate(models));
};

const sequelize = new Sequelize(Env.database, Env.username, Env.password,
    {
        dialect: "mysql",
        host: Env.host
    });

const db = { sequelize, associateAll };

try {
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = db;
global.sequelize = sequelize;