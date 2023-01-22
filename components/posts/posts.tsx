import React, { useMemo } from "react";

import * as SQLite from '@vlcn.io/wa-sqlite'
import SQLiteESMFactory from '@vlcn.io/wa-sqlite/dist/wa-sqlite.mjs'

(async function() {
    const mod = await SQLiteESMFactory();
    const sqlite3 = SQLite.Factory(mod);
    const db = await sqlite3.open_v2('myDB');
    await sqlite3.exec(db, `SELECT 'Hello, world!'`, (row, columns) => {
      console.log(row);
    });
    await sqlite3.exec(db, 'SELECT crsql_finalize();');
    await sqlite3.close(db);
})()

export const Posts:React.FC = () => {
  // const dbWorker = useMemo(() => new Worker(new URL('./db.worker', import.meta.url)), []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};