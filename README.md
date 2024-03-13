# Image-Compressor-API 🌄
Resize images on the fly with this Node.js server! all you need to do is pass your image url and Boom! it's resizes Efficient for reducing cpu processes on your software

## Getting Started 🚀
To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/Marvellye/Image-Compressor-API.git
cd image-resizer-server
npm install
```

Then, start the server:

```bash
node index.js
The server will listen on port 3000.
```

## Usage 📖
To resize an image, make a GET request to the server with the imageUrl query parameter:

```bash
http://localhost:3000?imageUrl=https://example.com/image.jpg
The server will resize the image to 200 pixels wide and return it as a JPEG.
```

## Error Handling ⚠️
If the image URL is invalid or there is an error processing the image, the server will return a 500 Internal Server Error response.

## Dependencies 📦
This project uses the following dependencies:

-http: Node.js built-in HTTP module
-sharp: Image processing library
-request: HTTP request library
-url: Node.js built-in URL module

## Contributing 💻
We welcome contributions from the community. Please submit a pull request with your changes.

## License 📄
This project is licensed under the MIT License.

## Contact 📧
For any questions or issues, please contact me at marvellous.ezekiel@marvelly.com.ng

I hope this helps you get started with the image resizer server! Let me know if you have any questions. 😊
