const http = require('http');

const server = http.createServer((req, res) => {
  // Uncommon bug: Missing 'res.end()' in a simple response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Missing res.end() will keep the connection open indefinitely 
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});