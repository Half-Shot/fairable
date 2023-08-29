import { createServer } from "node:https";
import { readFileSync } from "node:fs";


const options = {
    key: readFileSync('./certkey.pem'),
    cert: readFileSync('./cert.pem'),
};
  
https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);