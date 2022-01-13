import Fetch from "./Fetch.js";

export const getSearchRanking = async () => 
    await (await Fetch({
        url: "/search-ranking",
    })).json();

export const getCarouselImgs = async () => 
    await (await Fetch({
        url: "/carousel-images",
    })).json();

export const getHotDealItems = async () =>
    await (await Fetch({
        url: "/hotdeal-items",
    })).json();
