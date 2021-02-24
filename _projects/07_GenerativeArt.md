---
layout: generative_art
title: Generative Art
---

Something I have wanted to explore for a while now is *generative art* which, broadly speaking, is a type of art which has been partially or completely created by an autonomous system. Commonly, generative art makes use of geometric shapes and patterns, different forms of randomness, strict mathematical relations and more. It can also be both purely exhibitional or interactive.

# (En)Joy Division
For my first piece of generative art I wanted to create something resembling the cover of *Unknown Pleasures* - the debut album of the band *Joy Division* released back in 1979. This was also inspired by the this [tutorial](https://generativeartistry.com/tutorials/joy-division/){:target="_blank"}. <br/>

There are a few steps involved in creating this piece:
* Start drawing a line from left to right of a specified window
* For some distance between and after the center sample a number of random oscillations up-and-down
* Round those oscillations by turning them into quadratic curves
* Make sure that a given _line_ is drawn over any line that comes above it vertically

Due to the randomness of the oscillations, every time the page is refreshed a new variation is rendered.

<div class="border">
  <div class="frame">
    <div id="joy_division">
    </div>
  </div>
</div>

This was created using the [p5.js](https://p5js.org/){:target="_blank"} library.
