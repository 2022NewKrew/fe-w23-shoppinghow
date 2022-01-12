import { locationChangeEvent } from '@utils/customEvent';

// DOM element의 click 이벤트리스너로 사용될 콜백함수. locationChangeEvent를 디스패치한다.
export const onLinkClickHandler = (nextPath, title = 'document') => {
    // TODO: pathname과 아래 하드코딩된 href경로가 같으면 URL을 스택에 추가하지 않고 바로 return하도록 조건문 추가
    // const { pathname } = window.location;

    window.dispatchEvent(locationChangeEvent(nextPath, title));
};

// 브라우저의 url이 바뀌면 페이지 내용을 바꾼다.
export const onLocationChangeHandler = (e, router) => {
    const { href, title } = e.detail;
    window.history.pushState(undefined, title, href);
    router.renderPage();
};

export const onProductClickHandler = (e) => {
    const { productInfo } = e.detail;
    console.log(productInfo);
};
