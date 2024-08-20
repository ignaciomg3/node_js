// este archivo es sin express, solo usando Node.js

const http = require('http')
const fs = require('fs')

const server = http.createServer ((req, res) => {
    const read = fs.createReadStream('./static/index.html') 
    read.pipe(res)
})

const puerto = 3000;
server.listen(puerto);
console.log(`Server on port ${puerto}`);
  
 