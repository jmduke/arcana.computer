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

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Movie' and item.rating" %}
{% include timeline.html content=sorted %}