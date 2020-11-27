---
layout: catalog
title: Games
rss: /rss/games.xml
image: /assets/img/share/games.png
filters:
  - id: all
    label: All games
    selector: .tabular-content-item
  - id: favorites
    label: Favorites
    selector: .tabular-content-item[data-rating='10']
---

I like to play video games! (I'm currently playing <strong>{{ site.data.currently[1]['name_(from_content)'] }}</strong>.)

As you'll probably realize quickly, I'm a sucker for JRPGs and the RPG genre in general,
but even within those confines I'm fairly normcore (lots of Final Fantasy, Fire Emblem, 
and Pokemon — though maybe describing my RPG tastes as normcore is showing that I care
too much about the niche.)

(Also, be warned: **my writeups will probably contain spoilers.**)

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Game' and item.rating" %}
{% include timeline.html content=sorted %}