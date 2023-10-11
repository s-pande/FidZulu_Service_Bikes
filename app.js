const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const filter = require("../utils/utils");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

//load bikes.json into array
const loadBikes = () => {
  const jsonData = fs.readFileSync("assets/bikes.json", "utf8");
  return JSON.parse(jsonData);
};


// bikes/location endpoint
app.get("/bikes/all/:location", (req, res) => {
  const { location } = req.params;
  const brand = req.query.brand;
  const minPrice = req.query.minprice;
  const maxPrice = req.query.maxprice;
  const rating = req.query.rating;

  if (location == "US-NC" || location == "IN" || location == "IE") {
    const bikesData = loadBikes();
    //*Price Conversion Starts
    const convertedBikes = bikesData.map((bike) => ({
      ...bike,
      price: parseFloat(filter.priceConverter(bike.price, location).price.toFixed(3)),
      tax_percentage:parseInt( filter.priceConverter(bike.price, location).taxPercent.toFixed(1))
    }));
    //*

    //*Filtering Starts
    const response = filter.filterByBrand(convertedBikes, brand);
    const responseRange = filter.filterByRange(response, minPrice, maxPrice);
    const finalResponse = filter.filterByRating(responseRange, rating);
    //*

    return res.status(200).json(finalResponse);
  }
  res.status(400);
  return res.send(`No INFO available for ${location}`);
});

//teams endpoint
app.get("/bikes/team", (req, res) => {
  res.status(200);
  res.send({
    team: "biker bros",
    membersNames: ["Shardul", "Rishabh"],
  });
});

//listen on port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


//chaining the filter functions 
