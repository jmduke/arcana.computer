---
layout: catalog
title: Movies
rss: /rss/movies.xml
image: /assets/img/share/movies.png
filters:
  - id: all
    label: All movies
    selector: .tabular-content-item
  - id: favorites
    label: Favorites
    selector: .tabular-content-item[data-rating='10']
---

I am not a movie buff, but, uh, here you go. I think I _want_ to be a film person more than I currently am; I certainly
have outgrown my television phase [^1] but I don't make a particularly strong habit of watching movies.

There is one exception to this, which is that almost every Sunday night for the past year my partner and I have watched a movie together. These come in phases — we had our Miyazaki phase, our pre-code screwball phase, and our Harry Potter phase — but it's been a really nice tradition.

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Movie' and item.rating" %}
{% include timeline.html content=sorted %}

[^1]: You could find me in the 2012 A.V. Club comment section, vigorously debating the finer points of Mad Men.