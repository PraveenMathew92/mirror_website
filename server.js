var request = require('request');

var url = process.env.URL

var request = request(url, (err, res, webpage) => webpage);

console.log(request);
