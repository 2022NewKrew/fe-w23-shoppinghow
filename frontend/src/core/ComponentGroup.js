export const TARGET_SELECTOR = {
  TARGET_HEAD: 'kakao-head',
  TARGET_CONTENT: 'kakao-content',
  TARGET_FOOT: 'kakao-foot',
  TARGET_BANNER: 'kakao-banner',
  TARGET_HOTITEM: 'kakao-hotitem',
  TARGET_KEYWORD: 'kakao-keyword',
  TARGET_RECOMMEND: 'kakao-recommend',
  TARGET_SHOPPING_PARTNER: 'kakao-shopping-partner',
  TARGET_NOTICE: 'kakao-notice',
  TARGET_MALL_EVENT_LIST: 'kakao-mall-event-list',
  TARGET_SLIDE_BANNER: 'slide-banner',
  TARGET_ROLL_KEYWORD: 'roll-keyword',
};
export const getTarget = (componentName) => `data-component="${componentName}"`;
export const getTargetSelector = (componentName) => `[${getTarget(componentName)}]`;
