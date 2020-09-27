---
layout: catalog
title: Media diet
image: /assets/img/share/diet.png
---

The concept of a "media diet" is one that I _think_ I originally stole from [Steven Soderbergh](http://extension765.com/soderblogh/34-seen-read-2019) by way of [Kottke.org](https://kottke.org/20/01/steven-soderberghs-media-diet-for-2019). The idea is a simple one: write down whatever media (in my case video games, books, movies,
and/or television) you watched that day.

This started out as a lazy compulsion, but I've grown rather found of this habit over time. "You are what you eat",
and all that — I've realized that paying more attention to how I'm spending my consumptive time has made me more
focused on consuming what I'm interested in, and not simply what's easiest. (I don't think it's coincidental
that since starting this, I've started watching _much_ less television.)

Additionally, media is a surprisingly good cursor with which to paginate my memory; I don't necessarily remember
what March 2018 was like, but I can look back and see what I was reading and playing back then — Ni No Kuni II, and _Claudius The God_ — and suddenly I am taken back to my old apartment on Capitol Hill, and my three weeks of funemployment before Stripe, and how thrilled (& anxious) I was!

(Finished bits of media have links to my thoughts on them.)

{% assign sorted = site.data.diet | sort: 'date' | reverse %}
{% include timeline.html content=sorted %}
