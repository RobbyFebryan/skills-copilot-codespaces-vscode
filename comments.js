//Create Web Server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/comments') {
        fs.readFile('comments.json', 'utf8', (err, data) => {
            if (err) {
                res.write('Error');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(3000);