import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import { getIndex, getRadio, getRadioPlay, getStreams } from "./routes.mjs";

const options = {
    key: readFileSync('./key.pem'),
    cert: readFileSync('./cert.pem'),
};
  
createServer(options, (req, res) => {
    console.log(req.method, req.url);
    if (req.url === '/') {
        getIndex(req, res);
    } else if (req.url === '/frontiersmart/x_streams') {
        getStreams(req, res);
    // TODO: Much better matching required.
    } else if (req.url.startsWith('/frontiersmart/radio/') && req.url.endsWith('play')) { 
        getRadioPlay(req, res);
    } else if (req.url.startsWith('/frontiersmart/radio/')) { 
        getRadio(req, res);
    } else {
        res.writeHead(404);
    }
    res.end();
}).listen(443);