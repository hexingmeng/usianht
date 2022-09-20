const http = require("http")

const server = http.createServer((req, res) => {
  res.end("hello wrold vu3")
})

server.listen(4000)
