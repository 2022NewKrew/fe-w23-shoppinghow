import Fetch from "./Fetch.js";

export const getSearchRanking = async () => 
    await (await Fetch({
        url: "/search-ranking",
    })).json();

export const getCarouselImgs = async () => 
    await (await Fetch({
        url: "/carousel-images",
    })).json();
