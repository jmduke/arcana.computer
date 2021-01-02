---
layout: catalog
title: Snippets
rss: /rss/snippets.xml
image: /assets/img/share/snippets.png
---

For topics that aren't quite essays but aren't quite tweets, either. (A self-imposed rule: no entry here should take longer than ten minutes to write and publish.)

{% assign sorted = site.data.snippets | sort: 'name' | reverse %}
{% include timeline--snippets.html content=sorted %}
