---
layout: catalog
title: Unfinished content
filters:
  - id: all
    label: Everything
    selector: .tabular-content-item
  - id: books
    label: Books
    selector: .tabular-content-item[data-type='Book']
  - id: games
    label: Games
    selector: .tabular-content-item[data-type='Game']
  - id: television
    label: Television
    selector: .tabular-content-item[data-type='Television']
---

{% assign sorted = 
     site.data.content | 
       sort: 'date' | 
       reverse | 
       where_exp:"item", "item.dates_consumed and item.rating == null" | 
       where_exp:"item", "item.currently == null" 
%}

I start more things than I finish!

Sometimes this is vaguely virtuous, and a [Umeshism](http://arcanesentiment.blogspot.com/2010/01/umeshism.html) of sorts: if you don't leave a bunch of books unfinished or games with credit screens unvisited, you're probably too afraid of abandoning things and need to revisit your mental model of sunk costs.

Sometimes this is... less virtuous. I'm very bad at finishing JRPGs, for instance: the middle act of such games always seems to bore me and the past few truly _long_ games I've finished I basically sprinted as quickly as possible through the waning hours of the game. Ending things is never as exciting as starting them, you know?

This page is a monument to all of those little journeys that I abandoned halfway through. Some I plan on revisiting at some point — _Agatha Christie's Poirot_ is delightful but I need a break from cookie-cutter whodunits, and _Baba Is You_ is a perfect game that I need to spend some time away from for my own sanity. Some I do not — _Borderlands 2_ sucks and I accidentally spoiled myself on the most interesting parts of  _Jimmy and the Pulsating Mass_. Either way, it feels like a fun inversion of the concept of the antilibrary: a room dedicated to all of the things I, for one reason or another, have started but don't particularly care to finish.
{% include timeline--unfinished.html content=sorted %}