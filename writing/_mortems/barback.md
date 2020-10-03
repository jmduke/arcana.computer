---
layout: page
title: Barback
draft: true
updated: 03/10/2020
todos:
  - Add some screenshots
  - Include financial data
  - Include useful resources
---

Barback was the first project I launched and the first (non-freelancing) project that I made money off of. It was janky; it was poorly prioritized; it was a mess of a time. I was flying by the seat of my pants, having learned iOS development from scratch. It was also a blast, and kindled in me the firm belief (one that I still hold, even stronger now) that it is pretty easy to find a useful niche and to charge money for software within that niche.

### What Barback was

I’ll let the [still present App Store detail page]() do the talking!

This is a basic app. There is nothing particularly interesting or fascinating about it: it reads from a normalized data store of recipes, ingredients, garnishes, and such, and displays a bunch of list and detail views. In many ways, it was a tutorial app: I wasn’t doing anything interesting with the iOS SDKs, but I was using them for the first time.

### How much it made

### Why I decided to build it

I wanted to learn iOS development, I was newly 21 years old (and thus wanted a socially acceptable reason to buy a whole bunch of liquor), and it seemed like a genuinely good idea.

### Lessons learned

- Scope creep hurts. I think Barback would have been more successful (and might still be under active development) if I committed to leaving it at its most basic form: recipes, ingredients, end of list. Instead, I kept on pushing the boundaries of what it could be as an app — add a web app portion! user accounts to track ingredients! in app purchases! — and that made it difficult to double down on what made the app legitimately useful in the first place.
- You don’t know what you don’t know. Learning iOS development was an adventure, and a fun one to be sure, but a consequence of my amateurish approach to the app meant that I made a lot of pretty terrible design decisions. Some of this was inexperience, sure, but some of it was due to not knowing where the map was at all — let alone the territory.
- The App Store is a glorious, glorious acquisition channel. A lot of ink has been spilled about how useful the App Store is for indie developers, and just as much ink (if not more) has been spilled about how it’s a toxic channel that is choking off developers’ livelihoods. I have no interest in rehashing either arguments, but I’ll say this: besides some lightweight experimentation with App Store Ads, I spent no time or energy whatsoever on marketing Barback and it received five digits’ worth of sales. Being able to plug into an ecosystem with tremendous amount of inbound customer demands is a superpower.
- Design for a low customer service footprint. Unlike future projects, a (underrated at the time) victory with Barback was that I really spent no time talking to customers whatsoever. Part of this is by the App Store’s design (which inoculates users and developers very strictly), but the impact was noticeable: every week or so I’d get a bug report or a request to add a new recipe, but beyond that I simply never heard from users. This is non-ideal for more ambitious projects, sure, but for a little cocktail app it meant that I could spend all of my free time building & improving the app rather than chatting with folks who were using it.
- Crashes hurt. Years working on serverside code and web applications instilled in me a sense of blind confidence in the power of rapid fixes: if I pushed a bug, no big deal, I can just push a fix or roll back the version in a matter of minutes. This is... not the case with iOS apps, where each new code change requires manual review and rollout from Apple. I still remember the Thursday night when I realized that I had accidentally pushed broken code to prod — and this wasn’t an interesting edge case, this was “half of Barback’s users are going to crashloop on launch”. It is a terrifying and frustrating feeling!

### Why I stopped running Barback

There are projects that end because they fail spectacularly; there are projects that end they are finished; there are projects that end because they just sort of fizzle out.

Barback was somewhere in between the last two. I was at a point where Barback was certainly stable — it was making a couple hundred dollars every month, which is very nice for a first project, and it satisfied all of the things I wanted to do when I first set out to build it: I understood the world of iOS development, I had collected money, and it was feature-complete for my intentions.

But then along the way the long tail of stretch goals arrived. Adding a full-fledged web interface and learning how to do SEO; adding custom recipe & ingredient support; adding social elements or IAP. I took half-hearted stabs at all of these but my attention and verve was starting to wane, and I had [another project]() that I was growing increasingly excited about, so I decided to call it quits.

“Calling it quits” is probably a bit of an oversell: I didn’t sit down and say “okay, I’m done with Barback now!” I just opened Xcode less and less frequently until it occurred to me that I hadn’t opened it in a month.

### Barback X.0

The last major version of Barback was 3.0; it was, naturally, a from-the-ground-up rebuild. It is still alive on the App Store, and every week I get a couple of downloads. I don’t feel particularly guilty about this, even though the app has never been optimized for new iPhones and looks terrible — hey, at least the recipes are solid!

But I still find myself tempted to build another version of the app. I have largely divorced myself from the world of iOS development, but I miss it; SwiftUI looks pretty neat, and I still have some nostalgia around the joy of building a simple, pleasant app like Barback.

I don’t miss mucking around in Interface Builder; I don’t miss Xcode _at all_, which to this day is still the worst IDE I have ever used. But the sheer joy of running code and seeing it appear on your iPhone is hard to beat, and I think someday — a shining mirage of a future in which I have time to pick up a new side project — I might consider dusting off the proverbial toolbox and starting afresh. (This time there definitely will be iPad support.)
