const http = require('http');
const HOST = "http://localhost";
const PORT = 3000;
const server = http.createServer((request, response) => {if(url[1] === ''){if(request.method === 'GET'){response.end("Hello, Galvanize");}}})
server.listen(3000, "localhost", () => {console.log(`Server is running on ${HOST}:${PORT}`)});