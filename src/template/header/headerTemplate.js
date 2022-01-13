import logoImage from '../../../images/logo_shw_2021.png';

export const logoTemplate = () => `
    <img class="title__img" src=${logoImage}>
`;

export const headerTemplate = () => `
    <div class="header-top">
        ${logoTemplate()}
        <div class="search show_rolling"></div>
    </div>
    <div class="header-menu"></div>
`;