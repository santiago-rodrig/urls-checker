/*
 * Primary file fo the API
 */

// Dependencies
var http = require('http')

// The server should respond to all requests with a string
var server = http.createServer(function(req, res) {
  res.end('Hello World\n')
})

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('Te server is listening on port 3000 now')
})

