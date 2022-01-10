import { USER_ICON } from '@/static/constants/image-path';
import './index.scss';

export default class Login {
  nickName = '';
  constructor({ $parent }) {
    this.login = document.createElement('div');
    this.login.className = 'login';
    this.render();
    $parent.appendChild(this.login);
  }

  setState(props) {
    this.nickName = props;
    this.render();
  }

  render() {
    this.login.innerHTML = `
        <img class="login-img" src=${USER_ICON} alt='로그인 아이콘'/>
        <span>${this.nickName ? this.nickName : '로그인'}</span>
    `;
  }
}
