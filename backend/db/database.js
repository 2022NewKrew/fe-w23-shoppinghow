const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
    path.join(__dirname,"/test.db") /*dbPath*/,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error("db",err.message);
      } else {
        console.log("Connected to the database.");
      }
    }
  ); // db sqlite3 db에 연결하는 코드!!

  module.exports = db