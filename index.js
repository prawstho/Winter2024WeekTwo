const http = require('http');
const fs = require('fs');
// const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(request);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Keyin World on a sunny / snowy day.');
});

console.log("It is sunny with newish snow today.")
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});