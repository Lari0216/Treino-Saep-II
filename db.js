import { Pool } from "pg"; 

const pool = new Pool({
    database: "segundotestesaep", 
    user: "postgres",
    password: "senai", 
    host: "localhost", 
    port: 5432
});

export default pool ; 

