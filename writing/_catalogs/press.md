---
layout: catalog
title: Press
rss: /rss/press.xml
---

<style>
.tabular-content-item {
  min-height: 50px;
}  
</style>

I have been fortunate enough to get to navelgaze, opine, and/or thought-lead on a number of podcasts.

Similarly, sometimes I or my projects are covered in the press. I find this less consequential but slightly more fun.

{% assign sorted = site.data.press | sort: 'date' | reverse %}
{% include timeline.html content=sorted %}