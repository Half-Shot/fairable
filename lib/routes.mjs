import config from "./config.mjs";
import getParserForUrl from "./parsers/index.mjs";
/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export function getIndex(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "entries": [
                {
                    "id": [
                        "frontiersmart",
                        "directory",
                        "radio"
                    ],
                    "title": config.stations.name,
                    "url": "https://airable.wifiradiofrontier.com/frontiersmart/x_streams"
                }
            ]
        },
        "id": [
            "airable",
            "listing",
            "index"
        ],
        "title": "Index",
        "url": "https://airable.wifiradiofrontier.com/"
    }))
}

/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export function getStreams(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "entries": Object.entries(config.stations.stations).map(([id, station]) => ({
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    id,
                ],
                "images": [station.image],
                "title": station.title,
                "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}`

            })),
        },
        "id": [
            "airable",
            "listing",
            "index"
        ],
        "description": config.stations.description,
        "id": [
            "frontiersmart",
            "network",
            "x_streams"
        ],
        "images": [
            config.stations.image
        ],
        "slogan": config.stations.slogan,
        "title": config.stations.name,
        "url": "https://airable.wifiradiofrontier.com/frontiersmart/x_streams"
    }))
}

export async function getLiveDetails(id) {
    console.info(`Station ${id} requested`);
    const station = config.stations.stations[id];
    if (!station) {
        console.warn(`Station ${station} not found`);
        res.writeHead(404);
        return;
    }
    const urlScraper = station.scrape_url && getParserForUrl(station.scrape_url);
    let liveDetails = {
        title: station.title,
        description: station.description,
        slogan: station.slogan,
        image: station.image,
    }
    if (station.scrape_url && getParserForUrl(station.scrape_url)) {
        try {
            const scrapeResult = await urlScraper(station.scrape_url);
            liveDetails.description = scrapeResult.description;
            liveDetails.slogan = scrapeResult.subtitle;
            liveDetails.title = `${station.title} - ${scrapeResult.title}`;
            liveDetails.image = scrapeResult.image;
        } catch (ex) {
            console.warn(`Failed to scrape ${station.scrape_url}: `, ex);
        }
    } else {
        console.log('No scrape config.stations', station, station.scrape_url);
    }
    return liveDetails;
}

/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export async function getRadio(req, res) {
    const id = req.url.split('/').reverse()[0];
    console.warn(`Station ${id} requested`);
    const station = config.stations.stations[id];
    if (!station) {
        console.warn(`Station ${station} not found`);
        res.writeHead(404);
        return;
    }
    let liveDetails = await getLiveDetails(id);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "entries": [ ]
        },
        "description": liveDetails.description,
        "id": [
            "frontiersmart",
            "radio",
            id
        ],
        "images": [ liveDetails.image ],
        // These MUST exist
        "language": {
            "id": [
                "frontiersmart",
                "language",
                "7146148681174964"
            ],
            "iso": "eng",
            "title": "English"
        },
        // These MUST exist
        "place": {
            "id": [
                "frontiersmart",
                "place",
                "4358624062035233"
            ],
            "title": "London",
            "type": "city"
        },
        "slogan": liveDetails.slogan,
        "streams": [
            {
                // This can be wrong 
                "codec": {
                    "bitrate": 96,
                    "name": "AAC"
                },
                "id": [
                    "frontiersmart",
                    "stream",
                    id,
                ],
                "reliability": 0.99,
                "title": "Stereo AAC, 48.0 kHz 96 KBit/s",
                "title": "Hello! TEST",
                "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}/play`
            }
        ],
        "title": liveDetails.title,
        "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}`,
    }));
}

/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export async function getRadioPlay(req, res) {
    const id = req.url.split('/').reverse()[1];
    console.warn(`Station ${id} requested`);
    const station = config.stations.stations[id];
    if (!station) {
        console.warn(`Station ${station} not found`);
        res.writeHead(404);
        return;
    }
    let liveDetails = await getLiveDetails(id);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "description": "NOT USED",
            "description": liveDetails.description,
            "id": [
                "frontiersmart",
                "radio",
                id
            ],
            "images": [ liveDetails.image ],
            "slogan": liveDetails.slogan,
            "streams": [
                {
                    "id": [
                        "frontiersmart",
                        "stream",
                        id,
                    ],
                    // This MUST be set, but it can be wrong.
                    "codec": {
                        "bitrate": 96,
                        "name": "AAC"
                    },
                    // This MUST be set, even if it's meaningless.
                    "reliability": 1,
                    // NOT USED?
                    "title": "Hello! TEST",
                    "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}/play`,
                }
            ],
            "title": liveDetails.title,
            "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}`
        },
        "id": [
            "frontiersmart",
            "redirect",
            id,
        ],
        "url": station.url,
    }));
}