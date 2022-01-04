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

  db.prepare(`DROP TABLE IF EXISTS searchKeyword`).run().finalize();
  db.prepare(
    `CREATE TABLE searchkeyword(id integer primary key, name text not null)`
  )
    .run()
    .finalize();

  db.prepare(`DROP TABLE IF EXISTS recentProduct`).run().finalize();
  db.prepare(
    `CREATE TABLE recentProduct(id integer primary key, name text not null, path text not null)`
  )
    .run()
    .finalize();

  //best
  const sql = `INSERT INTO product(name, path,tag) VALUES('product_best_1.png', '/asset/img/product_best','best')`;
  db.run(sql);

  //hotdeal,keyword
  const list = ["hotdeal", "keyword"];
  list.forEach((tag) => {
    for (let i = 1; i <= 10; i++) {
      var num = "0" + i.toString();
      num = num.slice(-2);
      const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
      db.run(sql);
    }
  });

  for (let i = 1; i <= 6; i++) {
    const ItemTag = `recommend_list`;
    let itemNum = "0" + i.toString();
    itemNum = itemNum.slice(-2);
    const sql = `INSERT INTO recentProduct(name, path) VALUES('product_${ItemTag}_${itemNum}.jpeg', '/asset/img/product_${ItemTag}')`;
    db.run(sql);
    for (let j = 1; j <= 10; j++) {
      const recommandItemTag = `recommend_${i}`;
      let num = "0" + j.toString();
      num = num.slice(-2);
      const sql = `INSERT INTO product(name, path,tag) VALUES('product_${recommandItemTag}_${num}.jpeg', '/asset/img/product_${recommandItemTag}','product_${ItemTag}_${itemNum}.jpeg')`;
      db.run(sql);
    }
  }

  //special
  for (let i = 1; i <= 3; i++) {
    const tag = `special`;
    let num = "0" + i.toString();
    num = num.slice(-2);
    const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
    db.run(sql);
  }

  //thema
  for (let i = 1; i <= 5; i++) {
    const tag = `thema`;
    let num = "0" + i.toString();
    num = num.slice(-2);
    const sql = `INSERT INTO product(name, path,tag) VALUES('product_${tag}_${num}.jpeg', '/asset/img/product_${tag}','${tag}')`;
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
    db.run(sql);
  });

  db.close();
});
