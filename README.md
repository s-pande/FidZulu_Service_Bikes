# FitZulu_Bikes

Endpoints :
1)**** http://localhost:3000/bikes/all/{IN||US-NC||IE}?{queryParams} ****
   queryParams can be any of these:[ brand , rating , minrice , maxprice ]
   sample query :http://localhost:3000/bikes/all/IN?brand=yamaha&maxprice=10000
                 http://localhost:3000/bikes/all/NC-US?rating=3&maxprice=10000&minprice=1000
                 http://localhost:3000/bikes/all/IE
                 http://localhost:3000/bikes/all/OtherCountry => Returns "No INFO found for OtherCountry"
2) http://localhost:3000/bikes/team : Gets our Team Details 
