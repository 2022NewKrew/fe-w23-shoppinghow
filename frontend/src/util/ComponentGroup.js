export const TARGET_SELECTOR = {
  HEAD: 'head',
  CONTENT: 'content',
  FOOT: 'foot',
  BANNER: 'banner',
  HOTITEM: 'hotitem',
  KEYWORD: 'keyword',
  RECOMMEND: 'recommend',
  SHOPPING_PARTNER: 'shopping-partner',
  NOTICE: 'notice',
  MALL_EVENT_LIST: 'mall-event-list',
  SLIDE_BANNER: 'slide-banner',
  ROLL_KEYWORD: 'roll-keyword',
};

export const getTargetSelector = (componentName) => `[data-component="${componentName}"]`;
