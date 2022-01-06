//TODO 데이터 완성 되면 삭제 예성 임시 데이터 구축용


var sqlite3 = require("sqlite3").verbose(); // sqlite3 모듈 불러와서 변수에 담기

//const path = require('path'); // path 모듈 불러와서 변수에 담기
//const dbPath = path.resolve(__dirname, './db/Tproject.db');
// 절대 경로 설정하기

let db = new sqlite3.Database(
  "./test.db" /*dbPath*/,
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
      console.error(dbPath);
    } else {
      console.log("Connected to the database.");
    }
  }
); // db sqlite3 db에 연결하는 코드!!

db.serialize(() => {
  db.prepare(`DROP TABLE IF EXISTS product`).run().finalize();
  db.prepare(
    `CREATE TABLE product(id integer primary key, name text not null, path text not null, tag text not null)`
  )
    .run()
    .finalize();

  db.prepare(`DROP TABLE IF EXISTS searchkeyword`).run().finalize();
  db.prepare(
    `CREATE TABLE searchkeyword(id integer primary key, name text not null)`
  )
    .run()
    .finalize();

  //best
  const sql = `INSERT INTO product(name, path,tag) VALUES('product_best_1.png', '/asset/img/product_best','best')`;
  // console.log(sql);
  db.run(sql);

  //hotdeal,keyword
  const list = ["hotdeal", "keyword"];
  list.forEach((tag) => {
    for (let i = 1; i <= 10; i++) {
      var num = "0" + i.toString();
      num = num.slice(-2);
      // console.log(tag,num)
      const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
      // console.log(sql);
      db.run(sql);
    }
  });

  //recommend1~6
  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= 10; i++) {
      const tag = `recommend_${j}`;
      let num = "0" + i.toString();
      num = num.slice(-2);
      // console.log(tag,num)
      const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
      // console.log(sql);
      db.run(sql);
    }
  }

  //recommend_list
  for (let i = 1; i <= 7; i++) {
    const tag = `recommend_list`;
    let num = "0" + i.toString();
    num = num.slice(-2);
    // console.log(tag,num)
    const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
    // console.log(sql);
    db.run(sql);
  }

  //special
  for (let i = 1; i <= 3; i++) {
    const tag = `special`;
    let num = "0" + i.toString();
    num = num.slice(-2);
    // console.log(tag,num)
    const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
    // console.log(sql);
    db.run(sql);
  }

  //thema
  for (let i = 1; i <= 5; i++) {
    const tag = `thema`;
    let num = "0" + i.toString();
    num = num.slice(-2);
    // console.log(tag,num)
    const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
    // console.log(sql);
    db.run(sql);
  }

  //인기검색어
  const keywordGroup = [
    "엔진코팅제",
    "경량패딩",
    "한과",
    "냄비세트",
    "오메가3",
    "영양크림",
    "제빵기",
    "가죽소파",
    "보온컵",
    "여성가방",
  ];
  keywordGroup.forEach((keyword) => {
    const sql = `INSERT INTO searchkeyword(name) VALUES('${keyword}')`;
    // console.log(sql);
    db.run(sql);
  });

  // db.all(`SELECT * FROM product where tag="recommend_1"`, (err, rows) => {
  //     console.log(rows)
  // });

  // db.all(`SELECT * FROM searchkeyword`, (err, rows) => {
  //   console.log(rows);
  // });

  db.close();
});
