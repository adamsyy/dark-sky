const request=require('request')

const url='http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query=37.865,-122.865'
request({url:url,json:true}, function (error, response,body) {

  console.log(response.body.current.weather_descriptions[0]+' weather'); // Print the HTML for the Google homepage.
}); 