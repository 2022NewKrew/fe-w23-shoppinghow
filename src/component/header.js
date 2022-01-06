import { headerTemplate } from "./template/header/headerTemplate.js";
import { addHoverEvent } from "./event/hoverEvent.js";
import { $ } from "../utils/utils.js";
import { top10Event } from "./event/top10Event.js";

export const makeHeaderElement = async (headerElement) => {
    //data fetch
    const response = await fetch('../data/headerData.json');
    const fetchedData = await response.json();

    // generate html string
    headerElement.insertAdjacentHTML('beforeend', headerTemplate(fetchedData.top10, fetchedData.menu));

    // add event listener
    addHoverEvent({element: $('.recent-product', headerElement)});
    addHoverEvent({element: $('.category', headerElement)});
    top10Event({
        inputBoxEl: $('.search', headerElement),
        inputEl: $('.search input', headerElement),
        containerEl: $('.search-top10', headerElement)
    });

};