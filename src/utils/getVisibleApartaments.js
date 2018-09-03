const getVisibleApartaments = (apartamentsValue, filter) => {
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

  export default getVisibleApartaments;

