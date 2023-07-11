
const http = require('http')
const hostname = 'localhost'
const port = 80
const server = http.createServer((req, res) => res.statusCode=200)

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})

