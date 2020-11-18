---
title: About this site
layout: page
updated: November 14th, 2020
image: /assets/img/share/this-site.png
excerpt: Why and how I built a comically overwrought and hopelessly oslipsistic personal site.
toc: true
end_cta: true
---

<style>
  .images {
    display: flex;
    align-items: center;
  }
</style>

## Philosophy

> What sort of writing could you create if you worked on it (be it ever so rarely) for the next 60 years?
> What could you do if you started now?
> [Gwern](https://www.gwern.net/About#long-site)

I am going through a serious disenchantment with the concept of _content_. The first time I seriously blogged it was because I was a junior in college who suddenly discovered Hacker News, and was convinced that the most expeditious way I had to break into the industry was to, like, blog about list comprehensions in Python and stuff. That turned into blogging about new Swift APIs and blogging about side projects and tweeting the same zeitgeisty things that a horde of other junior engineers were. I don't mean that as a negative thing — writing those blog posts gave me an early following, a foothold into a world in which I felt (and still feel, to some extent) an outsider, and strengthened my skills as a writer and engineer.

But the process feels empty now. As I write this, a solid portion of my social graph is spending their time investing in Substack content that will be abandoned in much the same way Medium content was abandoned in 2015.

Let me put this another way. Have I told you about why I stopped listening to podcasts?

I used to listen to a bevy of 'em — news podcasts like [The Daily](https://www.nytimes.com/column/the-daily), tech ones like [Accidental Tech Podcast](https://atp.fm/). They weren't mindblowing, but they felt _good_ — it felt virtuous and pragmatic to keep abreast of the zeitgeist, whether that zeitgeist was cultural events or technical discussions or NBA draft rumors.

One day, though, I made the mistake of accidentally messing up my syncing on my [podcatcher of choice](https://overcast.fm/) by pulling out my iPad that hadn't been touched in a few months for a plane ride. For a few bizarre moments, I caught myself listening to episodes that was three months out of date. What started out as a minor annoyance (oh no, I need to spend the next three hours doing crosswords to the sound of silence!) turned into fascination and finally into horror as I realized just how irrelevant the content was — entire swaths of how I spent my day had the shelf-life of a mere fortnight or less.

Anyway, I'm getting off track. [^5] I want to do a better job of writing things and thinking about things that don't have creation dates or publication dates. _That's_ what's motivating this site.

### Goals

1. **Fast**. I want this site to be fast to load. "Page speed" is an obvious benefit in of itself, and it seems almost trivial to argue that static sites should be quick to the touch. There are parts of this site — for example, my catalogs, which aggressive pull in thousands of words and hundreds of images — that don't quite meet this bar, but simple pages such as this one do.
2. **Accessible**. Both as an end of itself and a means to progress my abilities as an a11y-first developer, this site should be as accessible as possible. At the time of this writing, it scores a 92/100 on Lighthouse, with the remaining eight points coming from my lighthouse plugin. (If you know of any areas where I can improve accessibility, please [email me](mailto:me@jmduke.com) and let me know!)
3. **Durable**. I want a site that I can work on in form and content and spirit for the next twenty years. I am sure it will go through redesigns and reconceptualizations and reworks and all of that — I am not foolish enough to think that this site will ever be "finished" — but I want the soul of it to be as constant as possible.
4. **Genuine**. It seems silly to talk about being genuine right after throwing a phrase like "the soul of [this site]" at you, but if you know me in real life you know that I am _exactly_ that level of grandoise/idiotic. So, yeah — I want this site to sound as aggressively like me as possible. There are [great sites](https://julian.com) that strive for an authorial voice; I am uninterested in that ambition.

### Etymology

Why is this site called "arcana dot computer", you ask? That is a somewhat odd name! Why wouldn't you just do firstnamelastname.com, and dispense with all this weird "naming your personal website" nonsense?

Honestly, there's no good reason. I have a bad habit of buying silly domain names and this was one of them. In a prior life, I [wrote a newsletter](https://newsletter.jmduke.com) called Minor Arcana; the word "arcana" has always felt a little fun and incongruous to me, perhaps indicative of my slightly askew relationship with technology. [^7]

### Prior art

I am a sucker for this genre of page. I think it is really fun to read through how other
blogging technologists (and yes, I am cringing at my employment of that term) approach building
their software. Some particular entries I enjoy:

| Writer | Reason |
|-------|--------|
| [Aaron Z. Lewis](https://aaronzlewis.com) | Emphasis on multimedia |
| [Andy Matuschak](https://notes.andymatuschak.org/About_these_notes) | Built primarily for the author |
| [Gwern](https://www.gwern.net/About) | Wonderful design; obsessive level of depth |
| [Jonnie Hallman](https://destroytoday.com) | Tone & cleanliness |
| [Julian Shapiro](https://www.julian.com/blog) | Commitment to evergreen content |
| [Paul Stamatiou](https://paulstamatiou.com/about-this-website) | Nice use of affordances |

[^1]: The concept of a "content diet" is one I stole from Steven Soderbergh; I've found it surprisingly useful and clarifying.

### Drafting in public

> Think about blogging for a second: the fact that a list of posts is ordered chronologically by publication date, by default, is a bug in our incrementally-correct worldview. Blogging tools don't create any incentive to go back and edit previous ideas or posts. Or, at the very least, the default ordering has a de facto side effect of fewer people being aware of revisions or reversals to previously-published ideas. [Brian Lovin](https://brianlovin.com/overthought/incrementally-correct-personal-websites)

You have probably noticed that the index page of this site has something of an aspirational table of contents:
there are published posts, there are drafts of posts, there are outright placeholders for posts.  (There are, too,
posts that will _never_ be finished, like my catalogs of [books](/catalogs/books).) [^1] [^2] 

This accomplishes two things that are important to me:

1. It frees this site from the shackles of "sort by creation date" publishing. I think the idea of sorting all of your
content by order of creation is silly and a legacy of blogging software being a CRUD database; this is not Twitter, and I want this writing to be long-form and long-lasting.
2. It reminds me of what is left to be written about. I don't know if this site will ever be meaningfully "finished" (I suspect it will not), but being able to glance at the index page and remember that I have a whole bunch of writing about prior projects that I haven't done yet is a useful symptom in of itself.



## Implementation

At a high level, this site is powered by the following things:

| Technology | Use |
|-------|--------|
| HTML/SCSS/JS | Design & implementation |
| [Jekyll](#jekyll) | Static site generation |
| [Airtable](#airtable) | Storing structured data |
| [Git & GitHub](#git) | Storing content |
| [Netlify](#netlify) | Deployments and online editing |
| [Zapier](#zapier) | Periodic deploys |
| [Buttondown](#buttondown) | Newsletter subscriptions |
| [Fathom](#fathom) | Lightweight analytics |

It's also [entirely open-source](https://github.com/jmduke/arcana.computer).

### Design

Honestly, I don't think there's that much to say about the design of this site. I think it is fairly boring; if I were to describe the general philosophy behind it, I would say "use as little CSS as possible and make it as likely as possible that this site is renderable and pleasant in the year 2040." I don't know if I succeeded — I certainly have had those lofty goals in the past, and fallen desparately short — but I'd like to think that I came closer to the mark than usual, with around [500 total lines of CSS](https://github.com/jmduke/arcana.computer/blob/master/_sass/main.scss).

### Fonts

I'm currently using [SF Pro](https://developer.apple.com/fonts/) as the primary font on this site and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) as the monospace font.

SF Pro was an anti-choice: I wanted a vanilla font is pretty much as vanilla as it gets. IBM Plex Mono is the monospace font I use during development,
so it feels like a natural fit. There are a few drawbacks with each: SF Pro doesn't exist on non-Mac machines, which is a comically user-hostile choice on my part,
and at some point I might substitute it for something else. IBM Plex Mono doesn't support ligatures, which is a shame — code ligatures are nice! — but not a dealbreaker.

### Airtable

> Part spreadsheet, part database, and entirely flexible, teams use Airtable to organize their work, their way. [Airtable's slightly less generic marketing site](https://airtable.com/)

<div class="images">
  <img src="/assets/img/airtable.png" alt="A screenshot of my 'Content catalog' in Airtable">
  <img src="/assets/img/airtable2.png" alt="A screenshot of my 'Press list' in Airtable">
  <img src="/assets/img/airtable3.png" alt="A screenshot of my 'Media diet' in Airtable">
</div>

Airtable is a SaaS for interacting with structured tabular data. If you’ve got a long memory, you can think of it as “Microsoft Access for millennials.”

I really like Airtable. I use it to store a lot of data, mostly around content consumption:

1. The [books](/catalogs/books), movies, and games I’ve consumed or plan on consuming, alongside metadata and my reviews/thoughts
2. My [media diet](/catalogs/media-diet) for each day for the past four years
3. A [notebook of quotes and highlights](/catalogs/quotes) that I’ve collected
4. A [dictionary of words that I’ve learned](/catalogs/words)

In general, if something I’m cataloging can or should be tied back to the content in which I encountered it, I’ll put it in Airtable.

There are a lot of risks with using Airtable: I’d prefer to be using something open-source and plaintext-friendly if possible. But the advantages of Airtable — really robust filtering/searching, a UI I can use from my iPad or iPhone, and support for foreign links — outweighs the risks thus far. [^4]

I think the right long-term solution here is to migrate this to either an SQLite database or a very cleverly formatted YAML scheme, but there aren’t any satisfactory solutions for doing either on iPads yet.

"Okay, Justin," you say. "All of that sounds fine, but how do you actually get Airtable data into this site?"

This involves a little finagling. Jekyll is very good at treating data as a first-party object and being extensible; Airtable is not very good at programmatic access, especially with linked data. As a result, I built out a welterweight [Jekyll plugin](https://github.com/jmduke/arcana.computer/blob/master/_plugins/airtable_sync.rb) that I should presumably
open-source at some point. The Ruby is, as you'll no doubt discover, somewhat messy, but the idea is pretty simple:

1. Pull each table that I care about from the server.
2. Denormalize it.
3. Serialize it and write it to disk.

The result is pretty nice; every time I deploy the site, it automatically pulls all the latest data from Airtable.

### Jekyll

> Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. [Jekyll documentation](https://jekyllrb.com/docs/)

I use Jekyll to compile this site. Jekyll is, at least in my zeitgeist, _the_ Platonic ideal of a static site generator: it is not perfect, but it is by far the most popular and most-discussed (a fact largely due to its longevity).

Jekyll is..._fine_.

I don’t mean this in a disparaging way!

I’ve spent a lot of time trying out different static site generators. I’ve attempted to port this site (or some incarnation of it) to [Pelican](https://blog.getpelican.com/), to [Hugo](https://gohugo.io/), to [Eleventy](https://www.11ty.dev/), and to countless static site generators. I’ve attempted migrations to [Wordpress](https://wordpress.com/), to [Ghost](https://ghost.org/), and even [Tumblr](https://www.tumblr.com/) at one point. All of these platforms have pros and cons, but my motivations for trying out each and every one of them came less from a specific pain point I ran into with Jekyll and more a misguided beatification of the unknown. “The reason I’m not blogging more is because of _software reasons_”, I would tell myself, and then in vain try to spend a weekend rewriting my RSS generation as if that’s a cure for writer’s block.

Jekyll is good and I would recommend using it. It has drawbacks: it is somewhat slow (my site takes around twenty seconds to recompile, which is painful especially when I’m messing around with CSS), it is not particularly extendible, and it relies on a very finicky Ruby toolchain.

But it is popular — it is very rare to find yourself to be the first person to try and do something with Jekyll, which is a very large advantage unless you want to reimplement Atom generation for the thrill of it. The open source ecosystem for Jekyll is, while not as large as you might hope, probably as large as you need. And its popularity means that it plays nicely with things like [Github Pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/) for deployments.

I use a handful [third party packages](https://github.com/jmduke/arcana.computer/blob/master/Gemfile) to power
this site, as well. They are all pretty uninteresting and self-explanatory.

### Netlify

> Perfect for anything from the simplest landing page to full-scale, feature-rich web applications, Netlify is a whole new global platform where modern frontend tools, microservices, and serverless architecture are all first-class citizens. Start deploying your websites with a modern workflow that's both productive and fun. [Netlify's boring marketing page](https://www.netlify.com/products/workflow/)

<div class="images">
  <img src="/assets/img/netlify1.png" alt="A screenshot of Netlify. It's boring.">
  <img src="/assets/img/netlify2.png" alt="A second screenshot of Netlify. It's still boring.">
</div>

Netlify is a platform for deploying and extending static sites like this one.

There are a number of things I like quite a bit about Netlify:

1. **A built-in admin interface.** Netlify offers a [CMS](https://github.com/netlify/netlify-cms) that allows you to browse an admin interface of your site similar to something you’d use in a dynamic solution like Wordpress or Ghost. This is particularly clever because it is all static and webhook-driven: it’s still using git as the backing datastore, so it remains purely static. This is particularly useful for me because I like to do a lot of copyediting on my iPad, which has historically not had a great time of trying to wrangle with git or static sites.
2. **Easy deploys.** It takes me around five minutes to create a new site within Netlify, hook it up to a git repo, and get automatic deployment every time that repo has a new commit.

There is exactly one thing I don’t like about Netlify, and that is the fact that it will probably go away at some point in the next ten years. (Netlify, if you’re listening, I don’t blame you — it’s just how these things tend to work.)

Longer term, I think it’s fairly easy to break free of the two advantages Netlify provides. The “easy deploys” bit is a nicety that is easily replicable with some time mucking around with my own git server and either an S3 or bespoke storage hook.

The administrative story — making it easier for me to edit my writing away from my iPad — is a little trickier. There are some bits of prior art here. A number of authors have duct-taped a solution together with Shortcuts and Working Copy, like [Arthur Lorotte de Banes](https://sysless.com/updating-jekyll-blog-from-ipad/) or [Josh Ginter](https://thesweetsetup.com/a-ulysses-shortcuts-and-working-copy-workflow-for-capturing-ideas-and-publishing-to-a-jekyll-based-blog/) or [Avery Vine](https://www.averyvine.com/blog/programming/2019/10/04/publishing-to-jekyll-from-ipad-with-shortcuts-and-working-copy). At some point, I might try and copy their tactics, but they feel — at first glance — like a way to do a thing and say that it’s been done, rather than the optimal solution to the problem. I think over the next few years the process of publishing on an iPad will get much better, and I’m happy to punt on the problem for now.

### Zapier

<img src="/assets/img/zapier.png" alt="A screenshot of Zapier">

As an unnecessary extravagance, I use Zapier to deploy this site once every day. This isn't strictly necessary, but I go fairly often updating the backing Airtable data (e.g. cataloging a new movie or book) without actually changing the _content_ of the site itself in Git, and thus need a way to tell the site to recompile without having to go through the arduous manual labor of clicking a button in the Netlify UI. 

(I am aware that this is something that could absolutely be solved with cron, and there's no reason for me to use Zapier over a tool that I can actually own myself.)

### Buttondown

_Obviously_, I use [Buttondown](http://buttondown.email/) to handle newsletter subscriptions for this site. You can read more about Buttondown [here](/mortems/buttondown).

### Git & GitHub

Do I really need to write about why I chose Git? Are you expecting me to be, like, "well, I _considered_ Subversion, but the changeset model really doesn't jive with my editing and publishing process?" 

Git was the default choice. I wanted to be able to store this information somewhere that wasn't my rusty Mac Mini and I wanted to be able to publish at a regular cadence. 

The site, as mentioned above, is [open source](https://github.com/jmduke/arcana.computer) and will be for the interminable future. The commit log reflects my own rambunctious use of version control in trivial projects, which is equivalent to that of blindly smashing the Save button every few hours. There's a world in which I am reasonable and diligent and work on new posts in feature branches and merge them in once they are completed; I don't see that world merging with our own, both for reasons delineated above in terms of "drafting in public" and also the much less interesting reason of my own overwhelming sloth.

### Fathom

> Fathom is a simple, light-weight, privacy-first alternative to Google Analytics. So, stop scrolling through pages of reports and collecting gobs of personal data about your visitors, both of which you probably don’t need. Our website stats show up on a single, blazingly fast dashboard so you can make business decisions quickly. [Fathom's rather well-designed marketing page](https://usefathom.com)

<img src="/assets/img/fathom.png" alt="A screenshot of Fathom">

The pull quote says it all, right? I am a nosy, metrics-loving simpleton at heart and I want to see how popular this site gets. I am also not a fan of Google Analytics; there are all of the boring and valid privacy considerations, sure, but also the interface is incredibly annoying to use and more than anything else I just want a scalar that tells me how many uniques I'm getting. Fathom does that very well; I originally discovered it as the analytics engine that powers Buttondown.

(There is also [Simple Analytics](https://simpleanalytics.com/), which has a nigh-identical value proposition and boasts a bevy of testimonials from folks who I generally trust. At some point it might be fun to tinker around with it, but I literally cannot think of a single reason why to switch over at this point.)


### Special sauce

Most of my usage of Jekyll is fairly boring: boring is good! I do a handful of weird things to try
and make the site sparkle, though:

| File | Description |
|-------|--------|
| [`normalize_catalog_heights.js`](https://github.com/jmduke/arcana.computer/blob/master/assets/js/normalize_catalog_heights.js) | layout of timeline elements in [catalog pages](/catalogs/books) |
| [`footers.yaml`](https://github.com/jmduke/arcana.computer/blob/master/_data/footers.yaml) | used in conjunction with the [sample filter](https://jekyllrb.com/docs/liquid/filters/) to dynamically generate footers for each page |
| [`sidenotes.js`](https://github.com/jmduke/arcana.computer/blob/master/assets/js/sidenotes.js) | handling of pop-up endnotes [^6] |
| [`newsletter.js`](https://github.com/jmduke/arcana.computer/blob/master/assets/js/newsletter.js) | AJAX newsletter subscriptions |
| [`lightbox.js`](https://github.com/jmduke/arcana.computer/blob/master/assets/js/lightbox.js) | very lightweight lightboxes for images |
| [`airtable_sync.rb`](https://github.com/jmduke/arcana.computer/blob/master/_plugins/airtable_sync.rb) | Pulling data from Airtable during compilation |

### What's left

There are still a handful of things I'd like to do on this site. (If there's any takeaway you should have from this post — and the site itself! — it's that a large to-do list should never be a blocker for publication.) They are, roughly:

- Figuring out how to automatically generate share images
- Adding a better pre-commit linter
- Adding a step to download & optimize images (they're being stored on Airtable at the moment)

I'm sure this list will balloon over time, like any good backlog. But I still love this site, and sincerely hope that you enjoy it as well.

## Coda

I sincerely hope you enjoyed this solipsistic lens into the site. If you've got any questions,
please [email me](mailto:me@jmduke.com); I'm always happy to talk shop. 

Lastly, if there's anything I can convince you of: you should build a personal site, you should obsess over it, you should meticulously document it, and you should have quite a bit of fun doing so. (It's worth it.)


[^1]: I resent myself for using the noun "post" here, as I think that insinuates a lack of gravitas from which I'm trying to run away.

[^2]: I can't remember the first place where I saw this notion: the most recent one, and the one that comes to mind most immediately, is on Will Larson's [guide for staff engineers](https://staffeng.com/guides).

[^4]: I will warn you that the iOS apps are... not particularly good, at least at the scale of content that I'm using it with, and I end up dropping down to the browser for most use cases. But at least they don't do the "you cannot use the web version at all if we detect you are on an iOS device" thing!

[^5]: And for what it's worth, I still listen to podcasts. Well, podcast. [Zach Lowe](https://twitter.com/zachlowe_nba) and [Dan Carlin](https://www.dancarlin.com/) are very good.

[^6]: Like this one!

[^7]: There is no more inspirational piece of programming writing to me than [Hexing the technical interview](https://aphyr.com/posts/341-hexing-the-technical-interview).
