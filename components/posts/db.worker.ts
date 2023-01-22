import * as SQLite from '@vlcn.io/wa-sqlite'
import SQLiteESMFactory from '@vlcn.io/wa-sqlite/dist/wa-sqlite-async.mjs'

(async function() {
    const mod = await SQLiteESMFactory();
    const sqlite3 = SQLite.Factory(mod);
    const db = await sqlite3.open_v2('myDB');
    await sqlite3.exec(db, `SELECT 'Hello, world!'`, (row, columns) => {
      console.log(row);
    });
    await sqlite3.close(db);
})()