"use server";

import { db } from "@/db/db";

export const getContributionList = async (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM contributions`, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

export const submitContribution = async (text: string) => {
  db.run(`INSERT INTO contributions (text) VALUES (?)`, [text], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
};
