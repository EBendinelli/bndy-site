---
author: Eliot Bendinelli
pubDatetime: 2026-03-11
modDatetime:
title: "Advertising intelligence: your latest reminder about surveillance advertising"
slug: adint-nothing-new
featured: false
draft: false
tags:
  - adtech
  - tech
  - Internet  
description: Some thoughts on what ADINT really is about, what it reveals about online advertising, and what we can do about it
---
A few months ago, some friends shared a (great) [article published by Martin Untersinger in Le Monde](https://www.lemonde.fr/pixels/article/2026/01/21/comment-l-industrie-de-la-publicite-en-ligne-alimente-en-secret-la-surveillance-d-etat_6663454_4408996.html?lmd_medium=al&lmd_campaign=envoye-par-appli&lmd_creation=ios&lmd_source=default) covering private companies selling advertising intelligence, ADINT, tools to law enforcement. Many people around me were surprised and shocked by the content of this piece, which, frankly is how anyone should react when learning that your activities online are packaged and sold to governments so they can monitor you. Yet in my view this is more than a story about how law enforcement agencies are increasing their surveillance capabilities (although that certainly *is* a story). It's a reminder that online advertising turned the internet into a surveillance machine.

So here are some thoughts. On what the ADINT is really about, how new it really is, what it tells about how the internet works and, most importantly, what we can do about it.

> *TLDR; The online advertising industry is a surveillance machine that collects an processes massive amounts of personal information. This information can be purchased by almost anyone. Private companies selling this data to law enforcement are just a side effect of the business model. Governments, and other nefarious actors, were already buying and exploiting this data before these companies emerged. We can fix this, the internet doesn't have to come with built-in surveillance to function.*

## Advertising Intelligence?

First let's quickly clarify what we're talking about:  advertising intelligence, or ADINT, is the use of data collected and processed by online advertising technologies to extract intelligence about groups and individuals. Similar to how OSINT relies on publicly available information, and how SOCMINT leverage social media, ADINT taps into the tools and data that power online targeted advertising to surface intelligence. 

Maybe you're thinking there's a difference here, because advertising data should not be publicly accessible. Well, you're almost right. 

The thing is, the entire purpose of the online advertising infrastructure is to connect brands seeking to put ads in front of people's eyeballs and publishers with digital real estate to sell. As such, the industry needs interested actors to be able to plug into the ecosystem and to participate freely, be they a website seeking to monetise traffic or an advertising company trying to sell products.

What this means is that almost anyone, with a little money and technical knowledge, can join the party. Some safeguards exist, but if you still see ads online (nb: [you don't have to](https://ublockorigin.com/)), you'll know those are far from sufficient. So while the data isn't fully publicly available, accessing it isn't very difficult either.

Now taking part in this ecosystem is one thing, but how does that transform into collecting intelligence about real people?

This is where understanding how online advertising really works matters. At its core, the internet money-making machine accepts that tracking, following and profiling users to sell all their information to the highest bidder in an auction is an acceptable way to monetise content. And I'm not making a dodgy comparison here, most internet ads are literally sold at auctions through a system called [Real Time Bidding](https://privacyinternational.org/explainer/2974/why-am-i-really-seeing-ad-answer-might-be-real-time-bidding-rtb). Apple even made [a very explicit ad](https://www.youtube.com/watch?v=d1vmePWngd8) a few years ago depicting what this would look like in the real world (the video itself is also an add so exercise caution, ATT only solved part of the problem). 

To allow advertisers to target people as precisely (or creepily) as possible, many companies have made it their entire business to track and profile individuals. The data they collect this way can include a list of pages someone visited, the purchases they made, their geolocation over the past few weeks, links they followed, ads they clicked, etc. This data is then used to infer additional "information" about them, such as their purchasing power, alcohol consumption, number of kids and more. If you're curious about what the end result looks like, [this 2018 piece by my former colleague Frederike Kathleuner](https://privacyinternational.org/long-read/2433/i-asked-online-tracking-company-all-my-data-and-heres-what-i-found) is as relevant as ever.

## Knock, knock, it's the police... and everyone else

Now this opens two doors to extract online advertising data and use them for other purpose: 1/ If anyone is able to participate, almost nothing prevents a malicious actor from taking part in this system with the sole purpose of collecting data. The RTB system I mentioned before literally works with a [broadcasting system](https://www.iccl.ie/rtb/), meaning such an actor could stand in, pretending they are interesting in bidding, but actually only collecting broadcasted information; 2/ If the first option seems too complex and risky to implement, simply buy this already nicely compiled and processed data from an adtech company or a data broker.

The story mentioned above focuses on private entities acting as an intermediary between law enforcement and adtech companies. Possibly mixing the two approaches mentioned above, they specialise in collecting, packaging and distributing precise information about individuals to law enforcement with the means to afford their service. 

But government agencies didn't wait for those actors to appear to make use of advertising data. It's been [known](https://www.wsj.com/articles/federal-agencies-use-cellphone-location-data-for-immigration-enforcement-11581078600) for [years](https://www.vice.com/en/article/cbp-dhs-venntel-location-data-no-warrant/) that [agencies](https://www.eff.org/deeplinks/2022/06/how-federal-government-buys-our-cell-phone-location-data) purchase data from data brokers and other adtech companies to track individuals and collect information about them. The US, with its weak data protection law, is a particularly fertile ground for such practices as there is virtually no limit to what data apps and websites can collect and monetise. Users also have very low level of control over how their data will be used, meaning that data shared to access features (e.g.: location in a dating app) might in turn be sold without their knowledge. And if you're tempted to justify law enforcement behaviour as simply "them doing their job", know that many agencies focused on adtech data specifically because it offered a mean to [circumvent the required legal process](https://cdt.org/insights/report-legal-loopholes-and-data-for-dollars-how-law-enforcement-and-intelligence-agencies-are-buying-your-data-from-brokers/) to get information about individuals. 

What really reveals the depth of the issue is that [nefarious campaign groups](https://www.aclu.org/news/privacy-technology/catholic-group-buying-data-to-out-gay-priests) also used similar techniques to track and pressure unknowing individuals, preventing them from exercising [their rights](https://time.com/6184111/abortion-surveillance-tech-tracking/).

So yeah, the internet advertising industry is basically a surveillance machine that can be exploited by anyone with money and knowledge. **Online targeted advertising is surveillance advertising** and private companies turning this feature into a product is just a side effect of how the ecosystem functions and how we allowed it to grow.

## The internet doesn't have to monitor you

To some people, say a [VC evangelist](https://www.a16z.news/p/of-course-theyre-putting-ads-in-ai?utm_source=tldrnewsletter), the ad-supported internet is the best thing that could ever happen to humanity. They see it as the one and only way to enable the free distribution of knowledge and the only way to have a functional internet. Ignoring the fact that these people might not know about Wikipedia (it's only the [8th most visited website](https://en.wikipedia.org/wiki/List_of_most-visited_websites) in the world), I find it incredible that they are willing to accept that a mega surveillance machine is the only way we could keep the biggest human-made network running.

I'm not a fan of ads, but the biggest reason for that is that every time I see an ad that's creepily accurate in its targeting, I know it means something I did online or offline was monitored and transformed into a data point that could be leveraged to show me this ad. And while it might have been an "innocent" ad this time, it still means this data could be used against me in the future. 

Things don't have to be this way. In fact the internet ran on non-targeted ads for years before behavioural targeting came along. I'm all for a publicly/community supported internet, but if no one wants to pay for it but the advertisers, I'm happy to oblige as long as that doesn't also mean feeding a massive surveillance infrastructure.

The last few years have seen a flurry of initiatives that point to alternative means of growing a healthy internet that delivers on its initial promises. Whether it's [decentralised social media](https://joinmastodon.org/) that offer an alternative to exploitative monopolies, calls to [rewild the internet](https://www.noemamag.com/we-need-to-rewild-the-internet/), efforts to develop [new monetisation systems](https://www.x402.org/), attempts to update true and trusted ones [like contextual advertising](https://kobler.no/), [local service hosting](https://www.chatons.org/en)... There are many out there dreaming and building an internet with no place for surveillance.

In the meantime, [block ads](https://ublockorigin.com/), [block trackers](https://privacybadger.org/),  read guides to [minimise your online trail](https://privacyinternational.org/guides/minimising-online-trail), support your favourite site/artist/organisation/product, support strong data protection law, contribute to projects that inspire you, [leave an exploitative service](https://www.helloquitx.com/), talk about it with your friends and family... Whatever feels right. Those are merely suggestions. Look around you and pick one thing you think is achievable, meaningful and likely to contribute to making the internet a better place. There's nothing to lose.

> *Note: since I started writing this blog the [Electronic Frontier Foundation released another article](https://www.eff.org/deeplinks/2026/03/targeted-advertising-gives-your-location-government-just-ask-cbp?utm_source=effector) on law enforcement agencies buying geolocation data from data brokers.*

