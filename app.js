const request=require('request')

request('http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query=37.865,-122.865', function (error, response, body) {

  console.log('body:', body); // Print the HTML for the Google homepage.
});