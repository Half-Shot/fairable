# fairable

A simple service that allows you to run your own service for Airable-compatible devices (on Frontier Silicon hardware).

This project is *very* alpha quality and will be subject to change. I also make no promises about what it might do to your
hardware, so by running this software you are acknowledging the risks of sending arbitrary bytes to a device and having no visiblity
on how it may interpret them. **You have been warned**.

## Devices

Typically, this is useful for certain devices using Frontier Silicon hardware which call out to `airable.wifiradiofrontier.com`.

## Setup

Make sure you have Node installed, ideally at least Node 18.

First you need to generate a cert. Self signed is fine, so just use the one liner here:

`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/CN=airable.wifiradiofrontier.com"`

Then you can go ahead and customise `config.mjs` to your liking.

I've not fully experimented with the hardware, but MP3 streams should do the trick. MPEG-DASH streams like the ones the BBC provide should
be fine too, but setting one of those up is not so trivial as a standard HTTP MP3 stream.

You will need to find a way to point `airable.wifiradiofrontier.com` at the host you plan to run the service from. One way is to run
your own DNS resolver and repoint to your host IP, but that's out of scope. This guide assumes you have found a way.

Once you're happy, start the service (with root, because port 443). If you managed to do everything correctly, then the radio
should list and play your streams.


## Acknowledgements

- [kimbtech/WiFi-RadioAPI](https://github.com/kimbtech/WiFi-RadioAPI) was a useful starting point, even if the APIs are totally different.
- [Mastodon users who got in contact with me](https://mastodon.half-shot.uk/@halfy/110967351685629045)