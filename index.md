---
layout: default
title: Home page
---

<style>
    p {
        font-size: 24px;
        line-height: 32px;
    }
</style>

Hello! <strong>arcana dot computer</strong> is a weblog from <strong>Justin Duke</strong>. (That's me.)

I work at Stripe during the day and I run Buttondown and Spoonbill. I write about the technology industry, with
specific emphases on building and growing projects. I am also prone to a whole lot of navel-gazing, as you are probably
soon to discover.

If you're
interested in subscribing to monthly updates from this project, you should subscribe below:

{% include subscription-widget.html %}

Alternatively, you can jump right into some writing.
This domain is an ongoing work: links below that are stricken through are drafts, and unclickable links
are placeholders for future content.
You're welcome to peruse them, of course!

<div class="index-row">
{% include content_pane.html c=site.industry title="Industry" %}
{% include content_pane.html c=site.engineering title="Engineering" %}
{% include content_pane.html c=site.products title="Products" %}
{% include content_pane.html c=site.mortems title="Mortems" %}
{% include content_pane.html c=site.miscellany title="Miscellany" %}
{% include content_pane.html c=site.catalogs title="Catalogs" %}
</div>

Lastly, if you're interested in chatting, you can find me on [Twitter]({{ site.social.twitter }}) or reach out over [email]({{ site.social.email }}).
I love getting random tweets and emails, I promise.
