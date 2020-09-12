---
layout: catalog
title: Games
rss: /rss/games.xml
---

I like to play video games!

As you'll probably realize quickly, I'm a sucker for JRPGs and the RPG genre in general,
but even within those confines I'm fairly normcore (lots of Final Fantasy, Fire Emblem, 
and Pokemon — though maybe describing my RPG tastes as normcore is showing that I care
too much about the niche.)

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Game' and item.rating" %}
{% include timeline.html content=sorted %}