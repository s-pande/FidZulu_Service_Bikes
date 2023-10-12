let request = require("request");

const baseURL = "http://localhost:3000/bikes/";

console.log("Starting Bike Endpoints Test");

describe("Test server for Bikes", () => {
    describe("GET /team", () => {
        it("returns Team Name & Members", (done) => {
            request.get(baseURL + "team", (err, resp, body) => {
                teamData = JSON.parse(body);
                expect(teamData.team).toBe("biker bros");
                expect(teamData.membersNames[0]).toBe("Shardul");
                done();
            });
        });

        it("returns bike prices for IN", (done) => {
            request.get(baseURL + "all/IN", (err, resp, body) => {
                bikeData = JSON.parse(body);
                expect(bikeData[0].product_name).toBe("Honda CBR500R");
                expect(bikeData[0].price).toBe(8140.82);
                done();
            });
        });
    })
})

describe("GET /Random", () => {
    it("returns bike prices for Random", (done) => {
        request.get(baseURL + "all/Random", (err, resp, body) => {
            expect(body).toBe("No INFO available for Random")           
            done();
     });
    });
});

describe("GET /search?brand=yamaha", () => {
    it("returns filtered list of bikes", (done) => {
        request.get(baseURL + "all/IN?brand=yamaha", (err, resp, body) => {
            
            bikeData = JSON.parse(body);
            expect(bikeData[0].product_name).toBe("Yamaha YZF-R6");
            expect(bikeData[0].brand).toBe("Yamaha");
            done();
        });
    } );
});

describe("GET /search?brand=yamaha&minprice=10000", () => {
    it("returns filtered list of bikes", (done) => {
        request.get(baseURL + "all/IN?brand=yamaha&minprice=10000", (err, resp, body) => {
            
            bikeData = JSON.parse(body);
            expect(bikeData.length).toBe(3);
            done();
        });
    } );
});

describe("GET /search?brand=yamaha&maxprice=10000", () => {
    it("returns filtered list of bikes", (done) => {
        request.get(baseURL + "all/IN?brand=yamaha&maxprice=10000", (err, resp, body) => {
           
            bikeData = JSON.parse(body);
            expect(bikeData.length).toBe(1);
            done();
        });
    } )
});



describe("GET /search?brand=yamaha&minprice=7000&maxprice=10000", () => {
    it("returns filtered list of bikes", (done) => {
        request.get(baseURL + "all/IN?brand=yamaha&minprice=7000&maxprice=10000", (err, resp, body) => {
           
            bikeData = JSON.parse(body);
            expect(bikeData.length).toBe(1);
            done();
        });
    } )
});
