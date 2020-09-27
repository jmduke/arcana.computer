---
layout: catalog
title: Movies
rss: /rss/movies.xml
image: /assets/img/share/movies.png
---

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Movie' and item.rating" %}
{% include timeline.html content=sorted %}