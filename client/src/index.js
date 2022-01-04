import '@/static/styles/reset.scss';
// import './index.scss';
import { router, navigateTo } from '@/core/router';
import { addMoneyUnitLogic } from '@/utils/helper';

String.prototype.addMoneyUnit = addMoneyUnitLogic;

window.addEventListener('popstate', router);
document.body.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.href || e.target.dataset.link);
  }
});
router();
