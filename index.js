// index.js

const http = require('http');
const sharp = require('sharp');
const request = require('request');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const imageUrl = parsedUrl.query.ingurl;

  if (!imageUrl) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
    return;
  }

  request.get({url: imageUrl, encoding: null}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      sharp(body)
        .resize(200) // Resize width to 200 pixels (you can change this as needed)
        .toBuffer()
        .then((data) => {
          res.writeHead(200, {'Content-Type': 'image/jpeg'});
          res.end(data, 'binary');
        })
        .catch((err) => {
          console.error('Error processing image:', err);
          res.writeHead(500);
          res.end('Internal Server Error');
        });
    } else {
      console.error('Error fetching image:', error);
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  });
}).listen(3000, () => {
  console.log('Server running on port 3000');
});
