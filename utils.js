//functions to filter
const filterByBrand = (bikeData, brand = "") => {
  return bikeData.filter((bike) => {
    if (brand !== "") {
      return bike.brand.toLowerCase() === brand.toLowerCase();
    }
    return true;
  });
};

// Max price of the product
const MAX_PRICE = Number.MAX_VALUE;

const filterByRange = (bikeData, minprice = 0, maxprice = MAX_PRICE) => {
  return bikeData.filter(
    (bike) => bike.price >= minprice && bike.price <= maxprice
  );
};

// Filter the product by rating
const filterByRating = (bikeData, rating = 0) => {
  return bikeData.filter((bike) => bike.rating >= rating);
};

// Price after tax
const priceConverter = (price, location) => {
  let rate = 0;
  switch (location) {
    case "US-NC":
      rate = 1.08;
      factor=80;
      break;
    case "IN":
      rate = 1.18;
      factor=1;
      break;
    case "IE":
      rate = 1.23;
      factor=83.25;
      break;
    default:
      break;
  }

  return {price :price*rate/factor , taxPercent :(rate-1)*100};
};


module.exports = {
  filterByBrand,
  filterByRange,
  filterByRating,
  priceConverter 
};
