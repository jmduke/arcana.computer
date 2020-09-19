---
layout: catalog
title: Years in review
image: /assets/img/share--years-in-review.png
---

Every year I write a post about the year I've had. These existed as stand-along blog posts
at one point, but I think they're actually most interesting in a timeline form: as I review them
every so often, I'm struck by how recurrent my hopes and anxieties are and how foolish some of them
appear. I also used to write birthday posts, but I've since discontinued that trend; the demarcation
of birthdays seems somehow trivial and arbitrary compared to year-ends. (Don't get me wrong, year-ends
are still pretty trivial and arbitrary.)

<style>
.tabular-content-item {
  min-height: 50px;
}  
</style>

{% assign sorted = site.data.years | sort: 'date' | reverse %}
{% include timeline.html content=sorted %}
