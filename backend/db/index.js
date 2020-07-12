const pgp = require("pg-promise")({});

// const db = pgp("postgress://localhost:5432/bitter_db");
require("dotenv").config()

const db = pgp(process.env.DATABASE_URL);


module.exports = db 

