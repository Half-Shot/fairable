## `/` First request

Request

```
GET https://airable.wifiradiofrontier.com/ HTTP/1.0
Accept: audio/aac;mp3;dash
Accept-Language: en-US
Authorization: <a-token>
Connection: Close
Content-Length: 0
Host: airable.wifiradiofrontier.com
User-Agent: ir-mmi-FS2340-0000-0123_V4.1.8.4e53e0-1A11

Response
```

```
HTTP/1.1 200 OK
Date: Tue, 29 Aug 2023 19:54:36 GMT
Content-Type: application/json
Content-Length: 389
Connection: close
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Server: airable/az-westeu-airable-2
X-Server: az-westeu-airable-2
X-Via: az-westeu-haproxy-1
Strict-Transport-Security: max-age=15768000
JSON
  

{
    "content": {
        "entries": [
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "radio"
                ],
                "title": "Internet radio",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "feed"
                ],
                "title": "Podcasts",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/feeds"
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
}
```


## /frontiersmart/radios


```
{
    "content": {
        "entries": [
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "4444673534948379"
                ],
                "iso": "gb",
                "title": "UK",
                "type": "country",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/place/4444673534948379"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "history"
                ],
                "title": "History",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/history"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "search"
                ],
                "title": "Search",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/search"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "location"
                ],
                "title": "Location",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/location"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "popular"
                ],
                "title": "Popular",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/popular"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "filter"
                ],
                "title": "Discover",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/filter/0/0/0"
            }
        ]
    },
    "id": [
        "frontiersmart",
        "listing",
        "radio"
    ],
    "title": "Internet radio",
    "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios"
}
```


## /frontiersmart/radios/place/<id>

```
  

{
    "content": {
        "entries": [
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "local"
                ],
                "title": "Local stations",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/local"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "popular"
                ],
                "title": "Popular",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/place/4444673534948379/popular"
            },
            {
                "id": [
                    "frontiersmart",
                    "network",
                    "9252743944525720"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/92/52/743944525720.png",
                        "width": 150
                    }
                ],
                "slogan": "British Broadcasting Corporation",
                "title": "BBC",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/network/9252743944525720"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "genres"
                ],
                "title": "Genres",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/place/4444673534948379/genres"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "cities"
                ],
                "title": "Cities",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/place/4444673534948379/cities"
            }
        ]
    },
    "id": [
        "frontiersmart",
        "listing",
        "4444673534948379"
    ],
    "iso": "gb",
    "title": "UK",
    "type": "country",
    "url": "https://airable.wifiradiofrontier.com/frontiersmart/radios/place/4444673534948379"
}
```

## /frontiersmart/network/<id>

```
{
    "content": {
        "entries": [
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "8209366066846997"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/82/09/366066846997.png",
                        "width": 150
                    }
                ],
                "title": "BBC Asian Network",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/8209366066846997"
            },
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "2762799057643860"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/27/62/799057643860.png",
                        "width": 150
                    }
                ],
                "title": "BBC CWR",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/2762799057643860"
            },
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "5834336578380317"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/58/34/336578380317.png",
                        "width": 150
                    }
                ],
                "title": "BBC Essex",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/5834336578380317"
            },
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "6255944639910013"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/62/55/944639910013.png",
                        "width": 150
                    }
                ],
                "title": "BBC Guernsey",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/6255944639910013"
            },
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "4496434875763953"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/44/96/434875763953.png",
                        "width": 150
                    }
                ],
                "title": "BBC Hereford & Worcester",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/4496434875763953"
            },
            {
                "contains": [
                    "feeds",
                    "networks"
                ],
                "id": [
                    "frontiersmart",
                    "radio",
                    "6289517657365651"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/62/89/517657365651.png",
                        "width": 150
                    }
                ],
                "title": "BBC Radio 1",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/6289517657365651"
            },
            ...
```

## /frontiersmart/radio/<id>

```
  

{
    "content": {
        "entries": [
            {
                "id": [
                    "frontiersmart",
                    "network",
                    "9252743944525720"
                ],
                "images": [
                    {
                        "height": 150,
                        "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/92/52/743944525720.png",
                        "width": 150
                    }
                ],
                "slogan": "British Broadcasting Corporation",
                "title": "BBC",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/network/9252743944525720"
            },
            {
                "id": [
                    "frontiersmart",
                    "directory",
                    "feeds"
                ],
                "title": "Related podcasts",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/1022963300812989/feeds"
            }
        ]
    },
    "description": "Intelligent speech, journalism, comedy, quizzes, poetry, drama, readings, politics, arts, discussion, documentaries, history, life stories, money, science, news and weather",
    "id": [
        "frontiersmart",
        "radio",
        "1022963300812989"
    ],
    "images": [
        {
            "height": 150,
            "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/10/22/963300812989.png",
            "width": 150
        }
    ],
    "language": {
        "id": [
            "frontiersmart",
            "language",
            "7146148681174964"
        ],
        "iso": "eng",
        "title": "English"
    },
    "place": {
        "id": [
            "frontiersmart",
            "place",
            "4358624062035233"
        ],
        "title": "London",
        "type": "city"
    },
    "slogan": "Radio for curious minds",
    "streams": [
        {
            "codec": {
                "bitrate": 96,
                "name": "AAC"
            },
            "id": [
                "frontiersmart",
                "stream",
                "uFLbmLEy6YFBDnSw6zmmOGYsnDryBQHj"
            ],
            "reliability": 0.99,
            "title": "Stereo AAC, 48.0 kHz 96 KBit/s",
            "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/1022963300812989/play/1807976396573832"
        }
    ],
    "title": "BBC Radio 4",
    "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/1022963300812989"
}
```

## /frontiersmart/radio/<id>/play

```
{
    "content": {
        "description": "Intelligent speech, journalism, comedy, quizzes, poetry, drama, readings, politics, arts, discussion, documentaries, history, life stories, money, science, news and weather",
        "id": [
            "frontiersmart",
            "radio",
            "1022963300812989"
        ],
        "images": [
            {
                "height": 150,
                "url": "http://airableassets-cdn.wifiradiofrontier.com/png@150x150/10/22/963300812989.png",
                "width": 150
            }
        ],
        "language": {
            "id": [
                "frontiersmart",
                "language",
                "7146148681174964"
            ],
            "iso": "eng",
            "title": "English"
        },
        "place": {
            "id": [
                "frontiersmart",
                "place",
                "4358624062035233"
            ],
            "title": "London",
            "type": "city"
        },
        "slogan": "Radio for curious minds",
        "streams": [
            {
                "codec": {
                    "bitrate": 96,
                    "name": "AAC"
                },
                "id": [
                    "frontiersmart",
                    "stream",
                    "9fP3P1wyJCDR0SB380yKI1eO9MlYWMoT"
                ],
                "reliability": 0.99,
                "title": "Stereo AAC, 48.0 kHz 96 KBit/s",
                "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/1022963300812989/play/1807976396573832"
            }
        ],
        "title": "BBC Radio 4",
        "url": "https://airable.wifiradiofrontier.com/frontiersmart/radio/1022963300812989"
    },
    "events": {
        "play": "https://airable.wifiradiofrontier.com/frontiersmart/metrics/<randoID>",
        "stop": "https://airable.wifiradiofrontier.com/frontiersmart/metrics/<randoID>"
    },
    "id": [
        "frontiersmart",
        "redirect",
        "qwvNEDlBh8WNLOXSZ9gv4RlzPGsJa1r3"
    ],
    "url": "http://redirect.airable.io/1807976396573832"
}
```