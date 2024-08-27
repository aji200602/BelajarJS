/// mandatory
const http = require('http');
const fs = require('fs');
const path = require ('path');

const hostname = '127.0.0.1'; // ini adalah local host
const port = 3000; //bila ada port lain juga boleh


// ini untuk merunning index HTML tadi
const server = http.createServer ((req, res) => {
    fs.readFile(path.join(__dirname, 'indexjavascript.html'), (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

//setting default
server.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`);
});

// run program with terminal : node server.js 
// ctrl + c for cancel
// node -v cek node js installed on desktop
// ctrl + click localhost (127.0.0.1) and port (:3000) or di copas
// variabel 