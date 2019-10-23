
const request = require('request');
const fs= require('fs');

const arg = process.argv
const url = arg[2];
const path = arg[3];

function fetcher (url, flp) {

  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(flp, body, function (error) {
    console.log('Error: ' + error);
    })

  });
}

fetcher(arg[2], arg[3]);







/*request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

});


*/
