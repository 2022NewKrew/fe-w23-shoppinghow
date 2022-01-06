import { menuTemplate } from "./menuTemplate.js";
import { searchTemplate } from "./searchTemplate.js";
import logoImage from '../../../../images/logo_shw_2021.png';


export const headerTemplate = (searchListData, menuData) => {
    const logoTemplate = `
        <img class="title__img" src=${logoImage}>
    `;

    return `
        <div class="header-top">
            ${logoTemplate}
            ${searchTemplate(searchListData)}
        </div>
        ${menuTemplate(menuData)}
    `;
}