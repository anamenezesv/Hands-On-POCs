const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' });

    res.write('Everything is fine');
    res.end();
});

const port = 4050;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});