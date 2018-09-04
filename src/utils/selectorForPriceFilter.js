export default (pricesList, {startPrice, endPrice}) => {
   return  pricesList.filter(item => {
        const startPriceMatch = typeof startPrice !== 'number' || startPrice <= item.price;
        const endPriceMatch = typeof endPrice !== 'number' || endPrice >= item.price;

        return startPriceMatch && endPriceMatch;
    })
     
};