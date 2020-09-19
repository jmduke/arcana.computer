---
layout: catalog
title: Books
rss: /rss/books.xml
image: /assets/img/share--books.png
---

I love to read! (I'm currently reading <strong>{{ site.data.currently[0]['name_(from_content)'] }}</strong> and listening to 
<strong>{{ site.data.currently[2]['name_(from_content)'] }}</strong>.)

This is a list of every book I've read since I've started tracking that sort of thing. I also have a rough rating system
of how good I think a book is. "Good" is relative and intentionally squishy; I want the rating to be indicative of two things:

- How important is this book to me?
- How strongly would I recommend it to someone?

Additionally, since late 2019 I've been trying to write up my thoughts on books after I complete them, as an
exercise in switching from consumptive energies to productive ones.

{% assign sorted = site.data.content | sort: 'date' | reverse | where_exp:"item", "item.type == 'Book' and item.rating" %}
{% include timeline.html content=sorted %}