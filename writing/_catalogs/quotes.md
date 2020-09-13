---
layout: catalog
title: Quotes and highlights
rss: /rss/quotes.xml
---

I collect quotes like trading cards. I don't have a strong criteria for inclusion in this list: if the
quote was remarkable in any way (a clever turn of phrase, an interesting concept, a pithy aphorism,
a useful insight, a beautiful piece of diction) I'll add it here. At some point I might try and 
make this entire enterprise a little more organize with tags and such, but that seems unnecessary
while the number of quotes is still less than a thousand: it is hard to displace the ergonomics of Command & F.

{% assign sorted = site.data.notebook | sort: 'name' | reverse %}
{% include timeline--notebook.html content=sorted %}
