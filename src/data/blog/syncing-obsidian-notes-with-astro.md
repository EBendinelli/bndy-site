---
author: Eliot Bendinelli
pubDatetime: 2025-05-07
modDatetime: 
title: Syncing Obsidian notes with Astro
slug: syncing-obsidian-notes-with-astro
featured: false
draft: true
tags:
  - tech
  - knowledge-base
description: How I to write your blog posts in markdown in Obsidian and synchronise them with your Astro site
Type: "[[Blog posts]]"
---
I use [Obsidian](obsidian.md) on a daily basis, it's my note-taking app, my journaling app, my project management app (to a certain extend) and more. So when I started this site with the idea to write regular blog posts, my intention was obviously to use Obsidian to write said post and have them sync with minimal efforts.

[This site](/projects/) runs on Astro. One of the reason I chose this framework is that it can take Markdown files and turn them into html files quite easily. That allows me to work on `.md` files from my favourite markdown editor and churn out nicely formatted pages like this one.

Now the issue is my IDE is *not* my favourite markdown editor. Obsidian is. So with everything setup, I looked for the best way to achieve the following: **writing my blog posts in Obsidian and have them automatically synced with my Astro site which is hosted on GitHub**. This is all desktop based, I don't care about publishing from my phone.

After some research I identified three options: 

>If you want to go straight to the one I picked, [click here](#3-obsidian-git-plus-sparse-checkout)
### 1. Open my local clone of the GitHub repository with Obsidian 

This would work. I already have a local copy of my site setup with git. So I could open a new vault with Obsidian and select the entire repository (a vault in Obsidian literally just a folder, it's one thing I particularly like). Then I would open the terminal or my IDE and stash/commit/push.

*Pros*:
- Super simple to setup if you already have a git repository 
- Two way-sync

*Cons*:
- Need to manually pull/stash/commit/push when you want to update the site (so opening another tool)
- Obsidian vault will be full or irrelevant files (the rest of the code)
- You will have to juggle between vaults. My blog posts ideas usually span in my main vault or are added there. It's a bit of a hassle to have to open two vaults and you can't easily navigate between website content and your other notes
- Images inside of blog posts won't display because paths are different (I call my images inside a blog post with `@/assets/images/blog/image.jpg` which won't work in Obsidian)

#### How to

- git clone your repository somewhere on your machine if you don't already have it
- Obsidian > open new vault > select the local repository
- Once you've finished writing, open terminal or IDE to pull/stash/commit/push

### 2. Sync scripts

The idea of this method is simply to synchronise the notes your have in your vault with the local copy of your repository. This allows for two interesting things: 1/ you can have a clean arborescence in Obsidian and 2/ you can process your notes to make links and images work.

*Pros:*
- Images are processed by the script so they show in your vault
- Clean note organisations (one folder for your notes, one for the assets and that's it)

*Cons:*
- Only one-way sync (you can't pull content from your repo back into your vault easily)
- Requires 2 steps to work: trigger the script manually outside of Obsidian (although I'm sure you could figure something out) and pull/stash/commit/push
- Requires additional tooling
- A bit technical to setup

#### How to

I didn't test this solution because of the additional tools required to make it work but here [Rach Smith's Obsidian-to-astro-sync](https://github.com/rachsmithcodes/obsidian-to-astro-sync/tree/main?tab=readme-ov-file) looks like the best option (also check related [blog post](https://rachsmith.com/automating-obsidian-to-astro/)).

### 3. Obsidian git + sparse checkout

Fair warning: this is not the easiest to setup but in my opinion the resulting workflow is worth it. 

The idea is basically to have the only a part of my github repository cloned locally (the part with the content `src/data/` and `src/assets/images`) inside my Obsidian vault. This means I can easily access the content and synchronise in one command it with the git integration. This is inspired by Steph Ango's (CEO of Obsidian) [own setup](https://stephango.com/vault).

This solution makes use of sparse-checkout, a handy little command I did not know about. [This Github blog post](https://github.blog/open-source/git/bring-your-monorepo-down-to-size-with-sparse-checkout/) was immensely useful to understand how to use it.

*Pros*:
- All my content is in one vault (which also means I have backups of my blog posts and projects should my site be nuked and my GitHub repo wiped)
- I can take advantage of all the nice Obsidian features like templates with [Templater](https://github.com/SilentVoid13/Templater) to have pre-formatted blog posts and projects
- Two-way sync
- Pushing content to my site is as simple as `CTRL+P` > `git Commit-and-sync`

*Cons*:
- Not the easiest to setup
- Images inside of blog posts won't display because paths are different (same issue as with option 1)
- Slightly cumbersome directory structure (posts will appear in `Blog/src/data/blog/`)

#### How to

Note: you'll need to have git installed and authentication setup.

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

3. Set the directories you want to download with your checkout. Feel free to add/remove according to your setup to only pull the content that you want to edit in Obsidian

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

5. Install [Obsidian git](https://github.com/Vinzent03/obsidian-git): Settings > Community Plugins > Browser > Search for Obsidian git. Install and enable
6. Setup Obsidian git: Setting > Git

The most important things here is to setup the Custom base path (at the bottom) to `Blog` (or whatever name you chose). I also changed the default commit message to something more meaningful for me than "vault backup"

And you should be all set! Now you have  a `Blog` folder in your Obsidian vault and after you've edited or created content you can simple press `Ctrl+P` and launch `Git: Commit-and-sync`. The content will be pushed to your repository.

Note 1: If you don't want to commit to your `main` branch you can easily create and select a new branch with `Ctrl+P` and `Git: switch Branch`
Note 2: Otherwise you can make use of the `draft` property for your blog posts and set it to false by default

