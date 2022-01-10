export const TARGET_SELECTOR = {
  HEAD: 'kakao-head',
  CONTENT: 'kakao-content',
  FOOT: 'kakao-foot',
  BANNER: 'kakao-banner',
  HOTITEM: 'kakao-hotitem',
  KEYWORD: 'kakao-keyword',
  RECOMMEND: 'kakao-recommend',
  SHOPPING_PARTNER: 'kakao-shopping-partner',
  NOTICE: 'kakao-notice',
  MALL_EVENT_LIST: 'kakao-mall-event-list',
  SLIDE_BANNER: 'slide-banner',
  ROLL_KEYWORD: 'roll-keyword',
};

export const getTargetSelector = (componentName) => `[data-component="${componentName}"]`;
