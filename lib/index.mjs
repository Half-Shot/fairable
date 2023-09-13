import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getIndex, getRadio, getRadioPlay, getStreams } from "./routes.mjs";
import config from "./config.mjs";
  
const dataDir = process.argv[2] ?? '.';

const options = {
    key: readFileSync(join(dataDir, 'key.pem')),
    cert: readFileSync(join(dataDir, 'cert.pem')),
};

config.readConfig(join(dataDir, 'config.yml'));
  
const server = createServer(options, async (req, res) => {
    console.log("Request", req.method, req.url);
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        getIndex(req, res);
    } else if (req.url === '/frontiersmart/x_streams') {
        getStreams(req, res);
    // TODO: Much better matching required.
    } else if (req.url.startsWith('/frontiersmart/radio/') && req.url.endsWith('play')) { 
        await getRadioPlay(req, res);
    } else if (req.url.startsWith('/frontiersmart/radio/')) { 
        await getRadio(req, res);
    } else if (req.url === '/player/state') {
        if (!config.fsapi) {
            res.writeHead(404);
            res.write('Feature not enabled\n');
        }
        if (req.method === 'GET') {
            const powerStatus = await fetch(config.fsapi.url + `fsapi/GET/netRemote.sys.power?pin=${config.fsapi.pin}`).then((v) => v.text());
            const isOn = /<value><u8>(.)<\/u8><\/value>/.exec(powerStatus)?.[1] === "1";
            res.write(JSON.stringify({on: isOn}));
        } else if (req.method === 'PUT') {
            const streamData = await new Promise(d => req.on('data', (v) => d(v)));
            const powerStatus = await fetch(config.fsapi.url + `fsapi/SET/netRemote.sys.power?pin=${config.fsapi.pin}&value=${streamData}`).then((v) => v.text());
            const isOn = /<value><u8>(.)<\/u8><\/value>/.exec(powerStatus)?.[1] === "1";
            res.write(JSON.stringify({on: isOn}));
        }
    } else {
        res.writeHead(404);
    } 
    res.end();
}).listen(443);

server.on('listening', () => {
    console.log('Listening on port 443');
});

process.on('SIGINT', () => {
    server.close();
})