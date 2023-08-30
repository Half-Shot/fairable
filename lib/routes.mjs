import config from "../config.mjs";

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
                    "title": config.name,
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
            "entries": Object.entries(config.stations).map(([id, station]) => ({
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
        "description": config.description,
        "id": [
            "frontiersmart",
            "network",
            "x_streams"
        ],
        "images": [
            config.image
        ],
        "slogan": config.slogan,
        "title": config.name,
        "url": "https://airable.wifiradiofrontier.com/frontiersmart/x_streams"
    }))
}

/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export function getRadio(req, res) {
    const id = req.url.split('/').reverse()[0];
    console.warn(`Station ${id} requested`);
    const station = config.stations[id];
    if (!station) {
        console.warn(`Station ${station} not found`);
        res.writeHead(404);
        return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "entries": [ ]
        },
        "description": station.description,
        "id": [
            "frontiersmart",
            "radio",
            id
        ],
        "images": [ station.image ],
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
        "slogan": station.slogan,
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
        "title": "Halfy Radio",
        "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}`,
    }));
}

/**
 * 
 * @param {import('node:http').IncomingMessage} req 
 * @param {import('node:http').OutgoingMessage} res 
 */
export function getRadioPlay(req, res) {
    const id = req.url.split('/').reverse()[1];
    console.warn(`Station ${id} requested`);
    const station = config.stations[id];
    if (!station) {
        console.warn(`Station ${station} not found`);
        res.writeHead(404);
        return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write(JSON.stringify({
        "content": {
            "description": "NOT USED",
            "description": station.description,
            "id": [
                "frontiersmart",
                "radio",
                id
            ],
            "images": [ station.image ],
            "slogan": station.slogan,
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
                    "title": "Hello! TEST",
                    "url": `https://airable.wifiradiofrontier.com/frontiersmart/radio/${id}/play`,
                }
            ],
            "title": station.title,
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