const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Server is Runing")
    res.end('Wahab')

})

server.listen(8000, () => {
    
})