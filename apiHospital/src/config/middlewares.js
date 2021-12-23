const express = require("express");
const cookieParser = require('cookie-parser');


const middlewares = {
    cookie: cookieParser(),
    json: express.json(),
    urlencoded: express.urlencoded({ extended: false }),
};

module.exports = middlewares;

