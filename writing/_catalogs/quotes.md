---
layout: catalog
title: Quotes and highlights
draft: true
---

{% assign sorted = site.data.notebook | sort: 'name' | reverse %}
{% include timeline--notebook.html content=sorted %}
