---
layout: catalog
title: Unfinished content
filters:
  - id: all
    label: Everything
    selector: .tabular-content-item
  - id: books
    label: Books
    selector: .tabular-content-item[data-type='Book']
  - id: games
    label: Games
    selector: .tabular-content-item[data-type='Game']
  - id: television
    label: Television
    selector: .tabular-content-item[data-type='Television']
---

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.dates_consumed and item.rating == null" %}
{% include timeline.html content=sorted %}