import { db } from "./db";

export const initDB = () => {
  db.run(`CREATE TABLE contributions (
        ID INTEGER PRIMARY KEY,
        text TEXT
    )`);
  console.log("create table");
};
