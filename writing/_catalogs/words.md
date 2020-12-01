---
layout: catalog
title: Words I have learned
rss: /rss/words.xml
image: /assets/img/share/words.png
---

When I was in high school and even more insufferable than I am now, a friend and I started a tumblr called "sun words".  The concept of this was to collect words that we discovered that were particularly succulent or mellifluous. [^1]

I have found myself learning more and more words recently.  This is fun and good: I was worried for a while that my days of adapting and playing with the English language were largely behind me.  I thought it would be interesting and illustrative to collect a list of the words I've learned recently alongside the sources from which I've gleaned them. 

When I first started building this catalog, I expected the plurality to be from the NYT crossword [^2], and the data appears to bear that out:

<style>
th:last-child, td:last-child  {
  text-align: right;
  font-variant: tabular-nums;
}
</style>

{% assign nyt = 0 %}
{% assign twitter = 0 %}
{% assign books = 0 %}
{% assign wikipedia = 0 %}
{% assign miscellany = 0 %}
{% for c in site.data.words %}
{% if c.source contains "NYT" %}
{% assign nyt = nyt | plus: 1 %}
{% elsif c.source contains "Twitter" %}
{% assign twitter = twitter | plus: 1 %}
{% elsif c.source contains "Wikipedia" %}
{% assign wikipedia = wikipedia | plus: 1 %}
{% elsif c.content[0].type contains "Book" %}
{% assign books = books | plus: 1 %}
{% else %}
{% assign miscellany = miscellany | plus: 1 %}
{% endif %}
{% endfor %}

| Source | Count |
|---|----|
| The NYT Crossword | {{ nyt }} |
| Twitter | {{ twitter }} |
| [Books I've read](/catalogs/books) | {{ books }} |
| Wikipedia | {{ wikipedia }} |
| Miscellany | {{ miscellany }} |

<style>
.tabular-content-item {
  min-height: 50px;
}  
</style>
{% include timeline.html content=site.data.words %}

[^1]: Why "sun words"? Because we were high schoolers, and because we learned of the concept of "SAT words" — words that made Flesch-Kincaid salivate — and because _Sun_day comes after _Sat_urday.  (I told you — insufferable.)
[^2]: Of which I recommend you make a daily habit!