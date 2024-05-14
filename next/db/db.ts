import { Database } from "sqlite3";

export const db = new Database("./contributions.db", (err) => {
  if (err) {
    console.error(err.message);
  }
});
