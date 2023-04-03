import mysql from "mysql";

const db_config = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "codesocial",
};

export const db = mysql.createConnection(db_config);
