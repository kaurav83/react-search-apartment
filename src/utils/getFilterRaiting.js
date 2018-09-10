const getFilterRaiting = (apartamentsValue, filter_rating) => {
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

  export default getFilterRaiting;