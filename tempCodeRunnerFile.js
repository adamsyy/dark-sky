const request=require('request')

const url='http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query=37.865,-122.865'
request({url:url}, function (error, response, body) {
const data=JSON.parse(body);
  console.log('body:', data); // Print the HTML for the Google homepage.
});