const pgp = require("pg-promise")({});

// const db = pgp("postgress://localhost:5432/bitter_db");
const db = pgp(process.env.DATABASE_URL);

require("dotenv").config()

module.exports = db 

