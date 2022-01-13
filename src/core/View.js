import { $, $$ } from "@utils";

export class View {
    constructor(model) {
        this.model = model;
    }

    getDOMByClassName(className) {
        return $(`.${className}`);
    }

    getAllDOMByClassName(className) {
        return $$(`.${className}`);
    }

    mount({ parentClassName, childNode }) {
        const parentNode = $(`.${parentClassName}`);
        parentNode.insertAdjacentHTML("beforeend", childNode);
    }
}
