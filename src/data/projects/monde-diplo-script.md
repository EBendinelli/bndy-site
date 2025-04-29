---
title: 'Le Monde Diplomatique auto-download script'
description: A simple puppeteer script to download the epub of the latest edition of Le Monde Diplomatique.
category: "Tech"
featured: false
active: false
startDate: 2022-10-01
slug: monde-diplomatique-puppeteer-script
coverImage: ../../assets/images/projects/tech-default.png
seo:
  image:
    src: '../../assets/images/projects/tech-default.png'
    alt: Project preview
---

A simple puppeteer script to download the epub version of the latest [Le Monde Diplomatique](https://mondediplo.com/) edition. For those too lazy to log into the site, download it manually and put it on their e-reader.

https://gist.github.com/EBendinelli/7c51e84cfae267183013a1d8bbe11c6d

This script runs on my raspberry pie at home. To make the most of it, I have an extra script that I call monthly with a crontab:

```sh
!/bin/bash

echo "starting task"

cd /home/USER/scripts/epubGrabber/
sudo -u USER node epubGrabber.js

tail --pid=$pid -f /dev/null
echo "download completed"

rsync -r /home/USER/scripts/epubGrabber/downloads/ /var/www/books/
echo "job done"
```

This script runs the puppeteer automation and puts the latest edition of the newspaper in `/var/www/books/`, a directory that I'm serving on a local IP wthanks to a [basic nginx configuration](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/). 

With this, I can access the file server from my Kobo's integrated browser and get the latest edition on my e-reader without having to do anything.