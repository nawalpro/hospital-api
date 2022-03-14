const express = require("express");
const Server = require('./src/config/server');
const middlewares = require("./src/config/middlewares");
const routes = require("./src/modules/index");
const config = require('./src/config/env');
const errorHandler = require("./src/middlewares/errorHandler");
const db = require("./src/config/database");

const api = Server(express, middlewares, routes);

const start = async () => {
  try {
    await api.listen(config.port);
    console.log("MODEL" ,db.sequelize.models);
    await db.associateAll(db.sequelize.models);
    await db.sequelize.sync({ alter: true }, () => {
        console.log('===db on=========');
    })
  } catch (error) {
    console.log(error);
  }
};
start();
