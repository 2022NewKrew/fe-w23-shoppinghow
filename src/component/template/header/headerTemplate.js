import { menuTemplate } from "./menuTemplate.js";
import { searchTemplate } from "./searchTemplate.js";
import logoImage from '../../../../images/logo_shw_2021.png';


export const headerTemplate = (menuData) => {
    const logoTemplate = `
        <img class="title__img" src=${logoImage}>
    `;

    return `
        <div class="header-top">
            ${logoTemplate}
            <div class="search"></div>
        </div>
        ${menuTemplate(menuData)}
    `;
}