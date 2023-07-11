/* const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res)=> res.send('chao moi nguoi'))

app.listen(port, () => {
    console.log(`app listen an port ${port}`)
} ) */

const http = require(‘http’);
const hostname = ‘0.0.0.0’;
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader(‘Content-Type’, ‘text/plain’);
res.end(‘Hello, World!\n’);
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});