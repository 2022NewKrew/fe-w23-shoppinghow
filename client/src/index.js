import '@/static/styles/reset.scss';
import '@/static/styles/index.scss';
import { router, navigateTo } from '@/core/router';
import { addMoneyUnitLogic } from '@/utils/helper';
import Header from './components/header/header-whole';

String.prototype.addMoneyUnit = addMoneyUnitLogic;

new Header({ $parent: document.body });

window.addEventListener('popstate', router);
document.body.addEventListener('click', handleClickBody);

const handleClickBody = (e) => {
  changePage(e);
};

const changePage = (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.href || e.target.dataset.link);
  }
};

router();
