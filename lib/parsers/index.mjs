import bbc from "./bbc.mjs";

export default function getParserForUrl(url) {
    const origin = new URL(url).host;
    switch(origin) {
        case "www.bbc.co.uk":
            return bbc;
        default:
            return null;
    }
}