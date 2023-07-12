const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')

app.use(express.urlencoded())
app.use(express.json())

db.connect()

app.get('/', (req, res)=> res.send('chao moi nguoi dang ket noi web server'))

app.listen(port, () => {
    console.log(`app listen an port ${port}`)
} )



/* const http = require(‘http’);
const hostname = ‘meintest.onrender.com’;
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader(‘Content-Type’, ‘text/plain’);
res.end(‘Hello, World!\n’);
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
}); */