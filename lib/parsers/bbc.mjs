export default async function getLiveProgramFromURL(url, width = 320, height = 320) {
    // Note: This was based on scraping https://www.bbc.co.uk/sounds/play/live:bbc_radio_fourfm
    const res = await fetch(url);
    if (res.status !== 200) {
        throw Error(`Status ${res.status} ${res.statusText}`);
    }
    const data = await res.text();
    // console.log(data);
    const jsonStatus = /window\.__PRELOADED_STATE__ = (.*);.+<\/script>/.exec(data);
    if (jsonStatus === null) {
        throw Error('Format could not be parsed');
    }
    const state = JSON.parse(jsonStatus[1]);
    const currentlyPlaying = state.modules?.data?.find(s => s.id === "live_play_area")?.data?.[0];
    return {
        title: currentlyPlaying.titles.primary,
        subtitle: currentlyPlaying.titles.secondary,
        description: currentlyPlaying.synopses.short,
        // Currently only 320x320 is supported based on what the web client does.
        image: {
            width,
            height,
            url: "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/10/22/963300812989.png",
        }
    }
    console.log(JSON.stringify(state.modules, undefined, 2), currentlyPlaying);
}