import '@styles/index.scss';
import { HomePage } from '@containers';
import { $ } from '@utils';
import { onFetch } from '../services/onFetch';

if (process.env.DEBUG) {
  console.log(`[ ${process.env.NODE_ENV} ] 디버깅 모드 입니다.`);
}

(() => {
  new HomePage($('#app'));
})();
