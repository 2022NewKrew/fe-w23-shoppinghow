const getSql = (type, ...Args) => {
  let sql = "";

  /*
    TODO: 베스트상품, 이벤트상품, 테마상품 등의 경우 타 테이블에서 가져오는 쿼리문을 써야하지만 
    임시 데이터이므로 product 테이블에서 테그를 통해 가져오도록 했습니다. 
    추후 작업을 통해 수정예정입니다.
  */
  switch (type) {
    case "getSearchKeywordGroup":
      sql = "SELECT * FROM searchkeyword";
      break;
    case "getBestProduct":
      sql = 'SELECT * FROM product where tag="best"';
      break;
    case "getSpecialProduct":
      sql = 'SELECT * FROM product where tag="special"';
      break;
    case "getThemaProduct":
      sql = 'SELECT * FROM product where tag="thema"';
      break;
    case "getHotDealProduct":
      sql = 'SELECT * FROM product where tag="hotdeal"';
      break;
    case "getKeywordProduct":
      sql = 'SELECT * FROM product where tag="keyword"';
      break;
    case "getTagProduct":
      sql = `SELECT * FROM product where tag="${Args[0]}"`;
      break;
  }

  return sql;
};

module.exports = getSql;
