const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const env = require("./env");

const middlewares = {
    cors: cors({
        Credentials: true,
        AccessControlAllowOrigin: "*",
    }),
    cookie: cookieParser(),
    json: express.json(),
    urlencoded: express.urlencoded({ extended: false }),
};

module.exports = middlewares;

