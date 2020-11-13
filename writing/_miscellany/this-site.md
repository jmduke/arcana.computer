---
title: How this site is built
layout: page
updated: September 12th, 2020
draft: true
image: /assets/img/share/this-site.png
todos:
  - Write about etymology
  - Write about goals of the site
  - Transcribe prior art
  - Include Airtable screenshots
  - Add link to repository
  - Add Netlify screenshot
  - Write about use of Git & Github
  - Write about Airtable compiler
---

## Design

### Fonts

I'm currently using [SF Pro](https://developer.apple.com/fonts/) as the primary font on this site and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) as the monospace font.

SF Pro was an anti-choice: I wanted a vanilla font is pretty much as vanilla as it gets. IBM Plex Mono is the monospace font I use during development,
so it feels like a natural fit. There are a few drawbacks with each: SF Pro doesn't exist on non-Mac machines, which is a comically user-hostile choice on my part,
and at some point I might substitute it for something else. IBM Plex Mono doesn't support ligatures, which is a shame — code ligatures are nice! — but not a dealbreaker.

## Airtable

Airtable is a SaaS for interacting with structured tabular data. If you’ve got a long memory, you can think of it as “Microsoft Access for millennials.” To hear them describe it:

> Part spreadsheet, part database, and entirely flexible, teams use Airtable to organize their work, their way.

I really like Airtable. I use it to store a lot of data, mostly around content consumption:

1. The books, movies, and games I’ve consumed or plan on consuming, alongside metadata and my reviews/thoughts
2. My content diet [^1] for each day for the past four years
3. A notebook of quotes and highlights that I’ve collected
4. A dictionary of words that I’ve learned
5. What I’m currently playing, reading, and listening to

In general, if something I’m cataloging can or should be tied back to the content in which I encountered it, I’ll put it in Airtable.

There are a lot of risks with using Airtable: I’d prefer to be using something open-source and plaintext-friendly if possible. But the advantages of Airtable — really robust filtering/searching, a UI I can use from my iPad or iPhone, and support for foreign links — outweighs the risks thus far.

I think the right long-term solution here is to migrate this to either an SQLite database or a very cleverly formatted YAML scheme, but there aren’t any satisfactory solutions for doing either on iPads yet.

## Jekyll

> Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. — [Jekyll Docs](https://jekyllrb.com/docs/)

I use Jekyll to compile this site. Jekyll is, at least in my zeitgeist, _the_ Platonic ideal of a static site generator: it is not perfect, but it is by far the most popular and most-discussed (a fact largely due to its longevity).

Jekyll is..._fine_.

I don’t mean this in a disparaging way!

I’ve spent a lot of time trying out different static site generators. I’ve attempted to port this site (or some incarnation of it) to [Pelican], to [Hugo], to [Eleventy], and to countless static site generators. I’ve attempted migrations to [Wordpress], to [Ghost], and even [Tumblr] at one point. All of these platforms have pros and cons, but my motivations for trying out each and every one of them came less from a specific pain point I ran into with Jekyll and more a misguided beatification of the unknown. “The reason I’m not blogging more is because of _software reasons_”, I would tell myself, and then in vain try to spend a weekend rewriting my RSS generation as if that’s a cure for writer’s block.

Jekyll is good and I would recommend using it. It has drawbacks: it is somewhat slow (my site takes around twenty seconds to recompile, which is painful especially when I’m messing around with CSS), it is not particularly extendible, and it relies on a very finicky Ruby toolchain.

But it is popular — it is very rare to find yourself to be the first person to try and do something with Jekyll, which is a very large advantage unless you want to reimplement Atom generation for the thrill of it. The open source ecosystem for Jekyll is, while not as large as you might hope, probably as large as you need. And its popularity means that it plays nicely with things like [Github Pages]() and [Netlify]() for deployments.

### Special sauce

Most of my usage of Jekyll is fairly boring: boring is good! I do a handful of weird things to try
and make the site sparkle, though:

- [I use a JavaScript oneliner]() to better compress the timeline elements in [catalog pages].
- I use the [sample filter]() and [a list of admittedly hackneyed niceties](https://github.com/jmduke/arcana.computer/blob/master/_data/footers.yaml) to dynamically generate footers.

## Netlify

Netlify is a platform for deploying and extending static sites like this one.

There are a number of things I like quite a bit about Netlify:

1. **A built-in admin interface.** Netlify offers a [CMS](https://github.com/netlify/netlify-cms) that allows you to browse an admin interface of your site similar to something you’d use in a dynamic solution like Wordpress or Ghost. This is particularly clever because it is all static and webhook-driven: it’s still using git as the backing datastore, so it remains purely static. This is particularly useful for me because I like to do a lot of copyediting on my iPad, which has historically not had a great time of trying to wrangle with git or static sites.
2. **Easy deploys.** It takes me around five minutes to create a new site within Netlify, hook it up to a git repo, and get automatic deployment every time that repo has a new commit.

There is exactly one thing I don’t like about Netlify, and that is the fact that it will probably go away at some point in the next ten years. (Netlify, if you’re listening, I don’t blame you — it’s just how these things tend to work.)

Longer term, I think it’s fairly easy to break free of the two advantages Netlify provides. The “easy deploys” bit is a nicety that is easily replicable with some time mucking around with my own git server and either an S3 or bespoke storage hook.

The administrative story — making it easier for me to edit my writing away from my iPad — is a little trickier. There are some bits of prior art here. A number of authors have duct-taped a solution together with Shortcuts and Working Copy:

- [Arthur Lorotte de Banes](https://sysless.com/updating-jekyll-blog-from-ipad/);
- [Josh Ginter](https://thesweetsetup.com/a-ulysses-shortcuts-and-working-copy-workflow-for-capturing-ideas-and-publishing-to-a-jekyll-based-blog/);
- [Avery Vine](https://www.averyvine.com/blog/programming/2019/10/04/publishing-to-jekyll-from-ipad-with-shortcuts-and-working-copy)

I might try and copy their tactics, but they feel — at first glance — like a way to do a thing and say that it’s been done, rather than the optimal solution to the problem. I think over the next few years the process of publishing on an iPad will get much better, and I’m happy to punt on the problem for now.

## Why is it called arcana.computer?

## Principles

> What sort of writing could you create if you worked on it (be it ever so rarely) for the next 60 years?
> What could you do if you started now?
> — [Gwern](https://www.gwern.net/About#long-site)

## Prior art

I am a sucker for this genre of page. I think it is really fun to read through how other
blogging technologists (and yes, I am cringing at my employment of that term) approach building
their software. Some particular entries I enjoy:

- [Gwern](https://www.gwern.net/About)
- [Paul Stamatiou](https://paulstamatiou.com/about-this-website/)
- [Jonnie Hallman]()

[^1]: The concept of a "content diet" is one I stole from Steven Soderbergh; I've found it surprisingly useful and clarifying.

## A living table of contents

You have probably noticed that the index page of this site has something of an aspirational table of contents:
there are published posts, there are drafts of posts, there are outright placeholders for posts.  (There are, too,
posts that will _never_ be finished, like my catalogs of [books](/catalogs/books).) [^1] [^2] 

This accomplishes two things that are important to me:

1. It frees this site from the shackles of "sort by creation date" publishing. I think the idea of sorting all of your
content by order of creation is silly and a legacy of blogging software being a CRUD database; this is not Twitter, and I want this writing to be long-form and long-lasting.
2. It reminds me of what is left to be written about. I don't know if this site will ever be meaningfully "finished" (I suspect it will not), but being able to glance at the index page and remember that I have a whole bunch of writing about prior projects that I haven't done yet is a useful symptom in of itself.

## What's left to be done

There are still a handful of things I'd like to do on this site. (If there's any takeaway you should have from this post — and the site itself! — it's that a large to-do list should never be a blocker for publication.) They are, roughly:

- Figuring out how to automatically generate share images
- Adding a better pre-commit linter
- Adding a step to download & optimize images (they're being stored on Airtable at the moment)
- Fix up sidenotes, which are currently disabled
- Allow clicking on images to expand and center them

I'm sure this list will balloon over time, like any good backlog. But I still love this site, and sincerely hope that you enjoy it as well.

[^1]: I resent myself for using the noun "post" here, as I think that insinuates a lack of gravitas from which I'm
trying to run away from.

[^2]: I can't remember the first place where I saw this notion: the most recent one, and the one that comes to mind most immediately, is on Will Larson's [guide for staff engineers](https://staffeng.com/guides).