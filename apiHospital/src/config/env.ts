const dotenv = require('dotenv');
dotenv.config();


const Env = {
    port: Number( process.env.PORT || 4001),
    username:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    jwt_secret: process.env.JWT_SECRET,
    salt_rounds: process.env.SALT_ROUNDS,
    front_end_url: process.env.FRONT_END_URL,
    dialect: "mysql",
    seederStorage: "sequelize",
};

module.exports = Env;