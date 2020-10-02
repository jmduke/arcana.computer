---
layout: catalog
title: Travels
rss: /rss/travels.xml
image: /assets/img/share/travels.png
draft: true
todos:
  - share image
  - rss feed
  - dynamically generated map
  - add content for each place
  - add a picture for each place
---

> It is not necessarily at home that we best encounter our true selves. The furniture insists that we cannot change because it does not; the domestic setting keeps us tethered to the person we are in ordinary life, who may not be who we essentially are. — _Alain de Botton_

Deep in my heart of hearts, I am a homebody, and while I won't say I _dislike_ traveling it is something akin to running for me: a rich and rewarding endeavor which I tend to only fully appreciate once I'm back home, my back aching and my legs tired.

<style>
.tabular-content-item {
  min-height: 50px;
}  
</style>

{% assign sorted = site.data.travels | sort: 'date' | reverse %}
{% include timeline.html content=sorted %}
