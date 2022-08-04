const fetch = require("node-fetch");
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f2a4abad28msha8e51266d541d45p13e968jsn34dc3fbe5fc5",
      "X-RapidAPI-Host": "taxi-fare-calculator.p.rapidapi.com",
      "content-type": "application/json",
    },
  };

  var dep_lat = req.query.dep_lat;
  var dep_lng = req.query.dep_lng;
  var arr_lat = req.query.arr_lat;
  var arr_lng = req.query.arr_lng;

  let data = fetch(
    "https://taxi-fare-calculator.p.rapidapi.com/search-geo?dep_lat=" +
      dep_lat +
      "&dep_lng=" +
      dep_lng +
      "&arr_lat=" +
      arr_lat +
      "&arr_lng=" +
      arr_lng,
    options
  );

  let response = await data.then((res) => res.json());
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: response,
  };
};
