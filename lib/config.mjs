import { parse } from "yaml";
import { readFileSync } from "node:fs";

let config = undefined;

function readConfig(path = "./config.yml") {
    if (config) {
        return config;
    }
    const yamlData = readFileSync(path, 'utf-8');
    config = parse(yamlData);
}

export default {
    readConfig,
    get fsapi() { return config.fsapi; },
    get stations() { return config.stations; },
}