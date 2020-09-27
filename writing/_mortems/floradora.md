---
layout: default
title: Floradora
image: /assets/img/share/floradora.png
draft: true
---

<div class="notice">
    This is a republication of a post I wrote in 2016.
    At some point I'll turn this into a proper retrospective.
</div>

<p>Last week I released <a href="http://floradora.cloud">Floradora</a>!  It’s a tiny little Mac menu bar app.  This gif explains it easier than words:</p>


<p><img alt="" src="http://floradora.cloud/img/demo.gif"/></p>


<p>In case you don’t get the gist immediately: it’s a thing you click on to get a text box to send yourself emails.</p>


<p>It’s basically <a href="http://captio.co">Captio</a> for Mac.  (As a sidebar: if you don’t already own Captio, buy it immediately.  It’s tremendously useful.)</p>


<h2 id="why-i-made-it">Why I made it</h2>


<p>So I’m going to basically lift the product description I used for the iTunes Store, because it’s both folksy and accurate:</p>


<blockquote>
<div>
<p>Have you ever sent yourself a quick email just to remind yourself to do something later? Maybe it’s an article or a PDF or just a question to follow up on.</p>
<p>I do this <em>all the time</em>, because I treat my email inbox like a todo-list: if there’s an email I haven’t read, then it’s something I need to check out later.</p>
<p>So I made a tool to help with that! Because going to your email (app or website), writing an email with some garbage subject and adding yourself as the only recipient was just too many steps.</p>
<p>With Floradora, sending yourself a note has never been easier. It’s a tiny little app that lives in your menu bar: click it and you get a text box to write stuff in, then just hit the send button and it automatically appears in your inbox. It’s that easy.</p>
</div>
</blockquote>


<p>And that’s pretty much the truth!  I process todos and new information in a very specific way:</p>


<ol>
<li>Stuff arrives in my inbox.</li>
<li>If it’s something that can be done in less than two minutes, I’ll do it.</li>
<li>Otherwise I throw it into Todoist and archive the item (unless it’s something like a flight reservation, where the email itself is materially useful.)</li>
</ol>


<p>And so the ability to add something to my inbox <strong>as quickly as possible</strong> is paramount.  When I’m out, this is easy with Captio (seriously, check it out) but when I’m on my laptop – especially if I’m doing something important or productive – the friction of having to swap to Nylas or Gmail, type in my email, click like three buttons – obviously it’s like five seconds, but it’s an annoying five seconds.</p>


<p>So I scratched my own itch!</p>


<h2 id="how-i-built-it">How I built it</h2>


<p>Honestly, the app is super simple.  I vend out the actual email delivery to <a href="http://sendgrid.com">Sendgrid</a>, so the entire thing is a couple UI elements and a service call.</p>


<p>(I have joked that it took more effort and code to get images to be pasted correctly into the main text box than the entire rest of the app.  This is an exaggeration, but not a large one.)</p>


<h2 id="what-s-next">What’s next</h2>


<p>I’ve done the routine marketing things for Floradora – posting it on HN and Reddit (a Product Hunt staff member scooped me and posted it on off hours, unfortunately 😞).</p>


<p>However, I know I need to do more than that – especially considering the Mac App Store where I can’t really expect organic search traffic to feed revenue for such a small, niche application.</p>


<p>So, I put together a little Trello board:</p>


<p><img alt="" src="http://imgur.com/sNb26wQ.png"/></p>


<p>As you can see, there’s still a lot of stuff I need to do.  And marketing – cold calling, essential – is like a new exercise, and it is exhausting.</p>


<p>But, still, taking a simple app from conception to completion in the span of a couple weeks feels <em>great</em>.  Even if Floradora doesn’t increase its sales beyond where it’s currently at (a couple downloads at $2.99 each every day), it was a great project.</p>


<p>I hope I can find more small-scoped projects that scratch my own itch in the future.  Small victories are still victories.</p>