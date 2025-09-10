---
author: Eliot Bendinelli
pubDatetime: 2025-05-07
modDatetime: 
title: Syncing Obsidian notes with Astro
slug: syncing-obsidian-notes-with-astro
featured: false
draft: false
tags:
  - tech
  - knowledge-base
description: How I write blog posts in markdown in Obsidian and synchronise them with my Astro site
Type: "[[Blog posts]]"
---

I use [Obsidian](obsidian.md) on a daily basis, it's my note-taking app, my journaling app, my project management app (to a certain extent) and more. 

When I started this site with the idea to write regular blog posts, my intention was obviously to use Obsidian to write said post, and have them sync with minimal effort.

[This site](/projects/this-site) runs on Astro. One of the reasons I chose this framework is that it can take Markdown files and turn them into html files quite easily. This allows me to work on `.md` files from my favourite Markdown editor and churn out nicely formatted pages like this one.

Now, the issue is that my IDE is *not* my favourite Markdown editor. Obsidian is. So with everything setup, I looked for the best way to **write my blog posts in Obsidian and have them automatically synced with my Astro site, which is hosted on GitHub**. This is all desktop based, I don't care about publishing from my phone.

After some research I identified three options: 

1. Open my local clone of the GitHub repository with Obsidian: easy to setup but: I didn't like the idea of having a second vault open (which I need to setup with all the nice things I already use, like [Templater](https://github.com/SilentVoid13/Templater)). Plus, I would need to open the terminal or my IDE to stash/commit/push changes.
2. Sync script: people have already done the hard work. [Rach Smith's Obsidian-to-astro-sync](https://github.com/rachsmithcodes/obsidian-to-astro-sync/tree/main?tab=readme-ov-file) (related [blog post](https://rachsmith.com/automating-obsidian-to-astro/)) is a script that copies the files in a designated it to a local clone of your site. The good part is that it processes images and links and maintain a very clean structure in your Obsidian vault. The downside is that if I just want to update some content, I need to open Obsidian + run the sync script + push from the terminal or my IDE.
3. Pull a subset of my website inside Obsidian with Obsidian git and sparse checkout. This is inspired by [Steph Ango's (CEO of Obsidian) setup](https://stephango.com/vault) and the solution I ended up using.

Here is how to set it up.

## Pulling Astro content inside Obsidian with Obsidian git and sparse checkout

The idea with this method is to have only a part of my GiHub repository (the part with the content, `src/data/` and `src/assets/images` in my case) pulled inside my Obsidian vault. This has two benefits: 
1. I have my content available inside my existing Obsidian vault, and 
2. I can easily push content to my repo with the Git integration, triggering a GitHub Action that builds and deploy my site.

> Note: If I want a local preview, I sync my local project (git pull) and run Astro locally 

This solution makes use of sparse-checkout, a handy little command I did not know about. [This GitHub blog post](https://github.blog/open-source/git/bring-your-monorepo-down-to-size-with-sparse-checkout/) was immensely useful to understand how to use it.

*Two notable downsides*:
- You need to use relative path for images to display in Obsidian (`../../assets/images/blog/image.png` in my case) instead of something like `@/assets/images/blog/image.png`.
- Slightly cumbersome directory structure (posts are stored appear in `Blog/src/data/blog/`)

### How to

Note: you'll need to have Git installed and authentication setup.

1. Close Obsidian, open your terminal and clone your repository inside your vault without checking-out. I cloned it into a "Blog" folder but you don't have to

```sh
cd /path/to/your/vault
git clone --no-checkout https://github.com/USER/your-astro-blog Blog
```

2. `cd` into the newly created folder and setup [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout)

```sh
cd Blog
git sparse-checkout init
```

3. Set the directories you want to pull with your checkout. Feel free to add/remove according to your setup to only pull the content that you want to edit in Obsidian

```sh
echo "src/data/" >> .git/info/sparse-checkout
echo "src/assets/images/" >> .git/info/sparse-checkout
```

4. Checkout 

```sh
git checkout main
```

From there you should have the content of your Astro site in a folder inside your vault. 

Now time to setup Obsidian to be able to pull/stash/commit/push and more:

5. Open Obsidian and install [Obsidian Git](https://github.com/Vinzent03/obsidian-git): Settings > Community Plugins > Browser > Search for Obsidian Git. Install and enable
6. Setup Obsidian Git: Setting > Git

The most important thing here is to setup the `Custom base path` (at the bottom) to `Blog` (or whatever name you chose). I also changed the default commit message to something more meaningful for me than "vault backup"

And you should be all set! Now you have a `Blog` folder in your Obsidian vault, and after you've edited or created content you can simply press `Ctrl+P` and launch `Git: Commit-and-sync`. The content will be pushed to your repository.

> Note 1: If you don't want to commit to your `main` branch you can easily create and select a new branch with `Ctrl+P` and `Git: switch Branch` 
 
> Note 2: Otherwise you can make use of the `draft` property for your blog posts and set it to false by default