// import { createSelector } from 'reselect';

export const getFilterRaiting = (apartamentsValue, filter_rating) => {
    if (filter_rating === 0 || filter_rating === undefined) {
        return apartamentsValue;
    }
    if (filter_rating !== 0 || filter_rating !== undefined) {
        let filteredRaiting = [];

        apartamentsValue.forEach(item => {
            if (filter_rating === item.rating) {
                filteredRaiting.push(item);
            }
        })
        return filteredRaiting;
    }
};

export const getVisibleApartaments = (apartamentsValue, filter) => {
    // const ALL = filter.totalRoomFilter.filter(word => word === "ALL");
    if (filter.totalRoomFilter.length === 0) {
        return apartamentsValue;
    } else if (filter.totalRoomFilter.length !== 0) {
        let filteredApartaments = [];

        apartamentsValue.forEach(item => {
            if (filter.totalRoomFilter.indexOf(String(item.total_rooms)) !== -1) {
                filteredApartaments.push(item);
            }
        })
        return filteredApartaments;
    }
};

export const filteredPrices = (pricesList, { startPrice, endPrice }) => {
    return pricesList.filter(item => {
        const startPriceMatch = typeof startPrice !== 'number' || startPrice <= item.price;
        const endPriceMatch = typeof endPrice !== 'number' || endPrice >= item.price;

        return startPriceMatch && endPriceMatch;
    })

};


// export const getShareCollection = createSelector(
//     getFilterRaiting,
//     getVisibleApartaments
// )