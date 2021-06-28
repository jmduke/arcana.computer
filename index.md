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

I work at <a href="https://stripe.com">Stripe</a> during the day as an engineering manager. Outside of that, I run <a href="https://buttondown.email">Buttondown</a> and <a href="https://spoonbill.io">Spoonbill</a>. I also have a <a href="https://www.instagram.com/itstellybelly/">very nice Corgi puppy</a>, write a <a href="https://buttondown.email/letters-to-j">weekly newsletter with my friend Jasdev</a>, and mentor aspiring technologists in partnership with <a href="https://www.un-loop.org/">Unloop</a>. With what precious time remains, I generally am either playing video games, watching Miami sports, or writing for this web site.

If you're
interested in subscribing to monthly updates from this project, you should subscribe below or via the [omnibus RSS feed](/rss/omnibus.xml):

{% include subscription-widget.html %}

Alternatively, you can jump right into some writing.
This domain is an ongoing work: links below that are slightly faded are drafts, and unclickable links
are placeholders for future content.
You're welcome to peruse them, of course, and you might also enjoy [my shorter, more blog-y posts](/catalogs/snippets).

<div class="index-row">
{% include content_pane.html c=site.industry title="Industry" %}
{% include content_pane.html c=site.engineering title="Engineering" %}
{% include content_pane.html c=site.products title="Products" %}
{% include content_pane.html c=site.mortems title="My Projects" %}
{% include content_pane.html c=site.miscellany title="Miscellany" %}
{% include content_pane.html c=site.catalogs title="Catalogs" %}
</div>

Lastly, if you're interested in chatting, you can find me on [Twitter]({{ site.social.twitter }}) or reach out over [email]({{ site.social.email }}).
I love getting random tweets and emails, I promise.
