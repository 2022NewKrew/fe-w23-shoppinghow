import { themeItem } from './themeItem';

const themeItemData = [
    // TODO: 이 데이터를 서버에서 fetch 해오기
    {
        title: '트렌디한 구찌 지갑',
        imgSrc: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FP15687305480.jpg%3Fut%3D20211210172757&amp;scode=talkgift',
        description: '꺼내서 자랑하고 싶은 이유',
        icon: '테마',
    },
    {
        title: '트라이앵글 브랜드전',
        imgSrc: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FV14651717067.jpg%3Fut%3D20210904092746&amp;scode=talkgift',
        description: '있으면 도움되는 조리 도구 총모음',
        icon: '테마',
    },
    {
        title: '작지만 강한 미니 온풍기',
        imgSrc: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FX15420477717.jpg%3Fut%3D20211116163053&amp;scode=talkgift',
        description: '언제 어디서든 따뜻하게',
        icon: '테마',
    },
    {
        title: '자주 쓰는 종이호일 기획전',
        imgSrc: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FU15563830470.jpg%3Fut%3D20211222065245&amp;scode=talkgift',
        description: '다양한 크기와 모양을 한곳에!',
        icon: '테마',
    },
];

export const theme = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'theme';
        const themeContainer = document.createElement('ul');
        themeContainer.className = 'theme-container';
        themeItemData.forEach((itemData) => themeContainer.appendChild(themeItem(itemData)));

        target.innerHTML = '';
        target.appendChild(themeContainer);

        return target;
    };

    return render();
};
