---
title: 'Auto-cpufreq Gnome extension'
description: A simple governor switcher Gnome-Shell-Extension for auto-cpufreq.
category: "Tech"
featured: false
active: false
startDate: 2025-05-01
slug: auto-cpufreq-switcher-gnome
coverImage: ../../assets/images/projects/auto-cpufreq.png
seo:
  image:
    src: '../../assets/images/projects/auto-cpufreq.png'
    alt: Project preview
---

[Auto-cpufreq](https://github.com/AdnanHodzic/auto-cpufreq) is neat little tool developed by  [Adnan Hodzic](https://github.com/AdnanHodzic) that automatically optimise CPU power and speed and ultimately improve battery life on Linux.

Using Gnome as my Desktop Environment, I wanted a quick and easy way to switch governor (e.g.: profile) to force powersaving even when running CPU-demanding programs on battery. Basically prioritise battery life over performance. 

Auto-cpufreq has a GUI that allows users to do just that but I wanted something more handy so I developped [this gnome extension](https://github.com/EBendinelli/auto-cpufreq-switcher). You can install it from the [Gnome extension store](https://extensions.gnome.org/extension/8320/auto-cpufreq-switcher/).

This was heavily inspired by [GPU-Supergfxctl-Switch](https://github.com/chikobara/GPU-Switcher-Supergfxctl/blob/main/extension.js), another gnome extension I use. 

Tech stack:
- Javascript (GJS)
