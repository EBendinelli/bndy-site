---
author: Eliot Bendinelli
pubDatetime: 2025-09-16
modDatetime:
title: Migrating from Spotify to Tidal
slug: migrating-from-spotify-to-tidal
featured: false
draft: true
tags:
  - music
  - software
  - data-portability
description: Using an open source tool to move my music library to a service that respects artists and doesn't fund AI powered military tech
---
> TLDR: I'm switching service because Spotify is making miserable for artist and indirectly funding AI military tech. I used [spotify_to_tidal](https://github.com/spotify2tidal/spotify_to_tidal/) to move my playlists and favourite songs from Spotify to TIDAL. You can use [this fork, which is a PR in progress,](https://github.com/c0ball/spotify_to_tidal/tree/feat/sync-artists-albums) to also import albums and artists, at your own risk. I use [AntennaPod](https://antennapod.org/) to replace the podcast feature of Spotify.

## But why?

As a user, I really like Spotify. It does everything I wanted and because many of my friends were using it, I could discover new music by checking their playlists or liked songs. As a [musician](https://music.bndy.org/) though, I have long felt uncomfortable with how it does its business and treats artists.

So [when the news hit a few months](https://www.business-humanrights.org/en/latest-news/spotify-faces-boycott-over-ceos-700m-investment-in-ai-military-defence-startup/) ago that Spotify CEO's Daniel Ek invested $700M in Helsing, a defence startup specialised in AI-powered combat drones and military software, I knew it was time to go.

To be clear, this was just the tipping point. Here are a few other reasons Spotify was on my naughty list for a while:
- They have been [underpaying artists](https://www.lalal.ai/blog/how-much-streaming-services-pay-artists-in-2024/), both objectively and compared to other platforms, for a long time 
- They accept, and do not label, [AI-generated music](https://www.bbc.com/news/technology-66882414), which itself is created by exploiting existing music without compensating artists
- They reduced payment pay artists by "bundling" their music with audiobooks (a move approved by [US courts](https://www.musicradar.com/music-industry/spotify-win-major-court-case-allowing-them-to-pay-less-money-to-artists))
- They partner with production companies hiring ghost artists to produce music that cost them less, at the expense of musicians' ability to make a living (I highly recommend reading [this investigation by Liz Pelly](https://web.archive.org/web/20250101060222/https://harpers.org/archive/2025/01/the-ghosts-in-the-machine-liz-pelly-spotify-musicians/) on the topic)

So I decided to switch. I tested a few options that I discarded (Deezer: poor music recommendations and playlist, Qobuz: no linux native app...) and landed on TIDAL. Without getting into details, it basically fits my very demanding needs:
- Pays artists decently (options become quickly limited here)
- Decent music recommendations/playlists
- Artist radio feature (start a radio from a song/artist)
- Doesn't fund defence tech companies

> Note: TIDAL is owned in majority by [Block](https://en.wikipedia.org/wiki/Block,_Inc.), a company founded by Jack Dorsey (the Twitter guy). I don't feel strongly about the guy either way. He's a bit too into crypto for my taste and I'm not into worshipping tech oligarchs anyway. But most of the projects he funds or supports fall into the "going into the right direction" category (see Nostr, Bluesky...), so I'll take it.

> Note 2: Because TIDAL doesn't offer podcast (and I'm totally fine with that), I reinstalled [AntennaPod](https://antennapod.org/), an amazing RSS/podcast manager for Android. It turned out to be much better than Spotify so big win here.

## Moving my music to TIDAL

Now for the interesting part: moving service. I'm a strong defender of the right to data portability, aka, the right to leave a service for another while bringing all your data. Think about it this way: it would be absurd if you could not bring your photos to a new phone because it's a different brand right? Well, I want the same experience when I'm moving to a new digital service, whatever it is. And in Europe, GDPR article 20 actually [mandates that](https://gdpr-info.eu/art-20-gdpr/). 

But reality if often disappointing.

Spotify allows users to download all their data, which I did. But my request to TIDAL to import the data was rejected. In the end, most music streaming platforms basically indicate using a third-party service to migrate your data. Qobuz even graciously [offers a code to access the premium](https://help.qobuz.com/en/articles/58315-how-to-transfer-your-playlists-for-free-with-soundiiz) version of one of these.

TIDAL doesn't, and import with these tools is limited to 500 songs which is maybe a tenth of my music collection.

So if GDPR has abandoned me and TIDAL doesn't have the cash to pay for a premium version of a migration tool, what is left? 

What's left is open-source developers using APIs.

Enter [Spotify_to_tidal](https://github.com/spotify2tidal/spotify_to_tidal/), a nice command line tool that lets you synchronise your Spotify playlists and liked songs with TIDAL. The instructions on the GitHub repository are pretty clear, the long story short is:

```sh
git clone https://github.com/spotify2tidal/spotify_to_tidal.git
cd spotify_to_tidal
python3 -m venv .venv
source .venv/bin/activate 
python -m pip install -e .```

Then follow [these instructions](https://github.com/spotify2tidal/spotify_to_tidal/?tab=readme-ov-file#setup) to get a key. Update `config.yml` and run:

```sh
spotify_to_tidal
```


Because I also wanted to import my favourite artists and album (yes, it's 2025 and I love a [good album](https://tidal.com/browse/album/278403634/u)), I used [this fork,](https://github.com/c0ball/spotify_to_tidal/tree/feat/sync-artists-albums) which is a work in progress adding this feature. It's not perfect and I had some issues but [the PR](https://github.com/spotify2tidal/spotify_to_tidal/pull/92) is almost merged.

> Privacy note: I checked network calls when running this tool and it didn't seem to leak any data. All the requests were going to Spotify or TIDAL. 

This worked almost perfectly. A few songs/artists were not found and I had to add them manually (10 out of maybe 1500 is totally acceptable). 

I've been using TIDAL for 3 months now and I'm really happy. The only complaint I have is that I can't control music playing on one device from another device (e.g.: music is playing from my computer and I can't change song from my phone) but I can live with that.

I particularly like the shared link feature which offers the option to listen to the track on another service. 

![[Pasted image 20250916112728.png]]
*A typical link share page. Also another [album you should check](https://tidal.com/browse/album/179302731/u)*

I've been dreaming lately of a standard for opening music links that would be integrated into OSs and browsers. Just like when you click a URL you can open it with your favourite browser, I'd love to be able to share music links that are service independent and when clicked, simply open your favourite music streaming service. This is not it, but it's something.

## Final thoughts

There are likely other services as good as TIDAL and I might change again in the future, hopefully with better luck when trying to exercise my right to data portability. In the meantime TIDAL does the job and I can once again thank open source developer for making the transition quite smooth. 

Now the only thing left to do is consider removing my own music from Spotify entirely.