# BS Paint

A very simple paint program architected so that **all data is stored on the DOM**.


### Introduction

Ever used [MS Paint](https://en.wikipedia.org/wiki/Microsoft_Paint)? It was a very simple paint program for Windows. We're going to take that limited-feature app and implement even fewer features for a fake MS Paint. Welcome to BS Paint!


### Setup

You may have noticed that there is no JavaScript. What is there is plenty of html and css. Let's look around, shall we?


### We Shall

First, the HTML. We have three sections:
1. The palette.
2. The brush.
3. The canvas.

We'll be checking the state of those three things as the user interacts with them. Pay attention to the logical flow of the app, and if you need to see Colin's version for logical flow reference, it's at [bs-paint.surge.sh](https://bs-paint.surge.sh).

Did you notice how all those things have `.color-${n}` classes on them? That brings us to the CSS, which has none of those classes. You can pick your own colors and define them using those classes. You'll need at least four of them, and one for a blank color. (Unless you want to implement erasing another way, but... we'll get there!)

Now on to the real meat of it: the JavaScript.


### BS Paint's JavaScript

There is none!

It will be your job to connect all the pieces logically, with event listeners and DOM manipulation galore.

But keep in mind that for this project, we're going to use *no global data structures*. Maybe some DOM elements saved globally so we don't have to re-query them, but no array of colors, no variable holding the current color, none of that. We'll be holding all of our data in the DOM.

But here are some (possibly new to you!) tools you can use:

* `classList` and its [many awesome methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods). 4 out of 5 DOM manipulators recommend this tool.
* Making `classList` an array using `Array.from()`, though while you gain array methods, you lose all of its native methods in the exchange.
* `className`, which is actually a string with spaces separating the class names (if there are more than one). It is, in fact, in the exact same format as when you add classes in the html. If you want to make an array from this string instead of using the `Array.from()` method, converting a string of words to an array of words is easy enough!