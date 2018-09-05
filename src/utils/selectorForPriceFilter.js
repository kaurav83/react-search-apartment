export default (pricesList, {startPrice, endPrice}) => {
   return  pricesList.filter(item => {
        const startPriceMatch = typeof startPrice !== 'number' || startPrice <= item.price;
        const endPriceMatch = typeof endPrice !== 'number' || endPrice >= item.price;
        
        return startPriceMatch && endPriceMatch;
    })
     
};

// const USD = price.currency === "USD" ? `${Math.floor(price.price/28)} $` : null;
//                     const EUR = price.currency === "EUR" ? `${Math.floor(price.price/33)} €` : null;

// currencyValue === "USD" ? `${Math.floor(item.price/28)} $` : null