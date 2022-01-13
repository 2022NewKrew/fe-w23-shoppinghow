export const locationChangeEvent = (nextPath, title) =>
    new CustomEvent('locationchange', {
        composed: true, // 웹 컴포넌트
        detail: { href: nextPath, title },
    });
