---
layout: catalog
title: Books
rss: /rss/books.xml
---


{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Book' and item.rating" %}
{% include timeline.html content=sorted %}