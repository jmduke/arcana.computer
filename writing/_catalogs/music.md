---
layout: catalog
title: Music
rss: /rss/music.xml
image: /assets/img/share/music.png
filters:
  - id: all
    label: All music
    selector: .tabular-content-item
  - id: favorites
    label: Favorites
    selector: .tabular-content-item[data-rating='10']
---

This is a relatively new catalog that I started in late 2020 (with _some_ backdating)
as a bit of a forcing function to listen to more new music and not just constantly listen
to a rotation of the same power pop [^1] and lo-fi that I always do.

It is bare-bones (in terms of content & metadata) at the moment, but I hope to have some more
interesting pieces in the next few months!

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Album' and item.rating" %}
{% include timeline.html content=sorted %}

[^1]: give carly rae jepsen a sword