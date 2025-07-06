---
title: 'bndy.org'
description: A blog, a portfolio, but mostly an excuse to write some code and update my web-development knowledge.
category: "Tech"
featured: false
active: true
startDate: 2025-03-01
slug: this-site
coverImage: ../../../public/favicon.svg
seo:
  image:
    src: '../../../public/favicon.svg'
    alt: bndy.org - this site
---

I'm not a full time web developer anymore and so every couple of years I try to give myself a new tech project/challenge to keep my skills sharps and learn new things.

2025 is the year I built myself a personal site. The goal was to have a site where I could 1/ list my project 2/ Have a short bio and 3/ blog. Being a big fan of markdown and the [small web](https://smallweb.page/home), I wanted to try once of those fancy framework that take markdown files in and produce a static site on the other side.

After considering the usual suspects (Hugo, Jerkyll, 11TY, Gatsby, Ghost) I landed on [Astro](https://astro.build/), a simple but elegant framework that seemed to offer a lot of nice to have features (like support for multiple UI frameworks, fast build time and great web core vitals) while giving me enough room to do what I wanted. 

After some research I decided to start from a template ([https://astro-paper.pages.dev/](https://astro-paper.pages.dev/)) to make learning faster and got to work. This was also an opportunity to dive into modern development tools with VSCode (I have been a SublimeText user for a while, mostly because I don't work on massive projects), Cursor (which I found suprisingly good) and more CI/CD services like Github Actions (used to build the site everytime I update it) and Docker (to pull the docker image created by my Github Action).


Tech stack:
- Framework: Astro
- Styling: TailwindCSS
- Type checking: Typescript
