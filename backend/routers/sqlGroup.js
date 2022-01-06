const getSql = (type, ...Args) => {
  /*
    TODO: 베스트상품, 이벤트상품, 테마상품 등의 경우 타 테이블에서 가져오는 쿼리문을 써야하지만 
    임시 데이터이므로 product 테이블에서 테그를 통해 가져오도록 했습니다. 
    추후 작업을 통해 수정예정입니다.
  */
  switch (type) {
    case "getSearchKeywordGroup":
      return "SELECT * FROM searchkeyword";
    case "getBestProduct":
      return 'SELECT * FROM product where tag="best"';
    case "getSpecialProduct":
      return 'SELECT * FROM product where tag="special"';
    case "getThemaProduct":
      return 'SELECT * FROM product where tag="thema"';
    case "getHotDealProduct":
      return 'SELECT * FROM product where tag="hotdeal"';
    case "getKeywordProduct":
      return 'SELECT * FROM product where tag="keyword"';
    case "getTagProduct":
      return `SELECT * FROM product where tag="${Args[0]}"`;
  }
};

module.exports = getSql;
