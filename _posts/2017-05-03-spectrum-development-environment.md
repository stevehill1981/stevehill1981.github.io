---
layout: post
title:  "Getting started with ZX Spectrum Development"
date:   2017-03-16 08:45:00
categories: development, retrogames, spectrum
---
Excited by meeting <a href="https://en.wikipedia.org/wiki/Henrique_Olifiers">Henrique Olifiers</a> and <a href="http://www.jimbagley.co.uk/aboutme.html">Jim Bagley</a> at last year's Revival 2016,
I was all set to start on developing a game for the upcoming <a href="http://www.specnext.com">Spectrum Next</a>.

It's taken them slightly longer than expected to launch the <a href="https://www.kickstarter.com/projects/1835143999/zx-spectrum-next/">Kickstarter for this
absolutely stunning looking machine</a>; tweaks to the spec being the main reason
for the delay. The team are super passionate about delivering something that
really captures the essence of the Spectrum, while bringing it up-to-date with
new abilities that it could never have had back in the day.

That Kickstarter is already well over its initial goal; as I write this, it's
sitting at £431,013 - the target amount was £250,000. It's looking likely that
it'll meet at least the next stretch goal at £450,000 by the end of this week,
and hopefully then blast on to meet the others.

All this has gotten me excited about Spectrum development again, and so I'm
looking at setting up a development environment to make it easier for me to do
so. Bear in mind that I was a kid when I had my Spectrum back in the 80s and
early 90s, so any programming I did was fairly limited. I barely touched machine
code, although I did experiment a little with a cool package called <a href="http://www.worldofspectrum.org/infoseekid.cgi?id=0008967">White
Lightning</a> (not the cider - it was a version of FORTH intended specifically for
games programming).

I'm working on a Mac, so not all of the information I share here will necessarily
be relevant to other environments. That said, I expect to mostly be working with
Z80 Assembly language which _will_ be relevant.

Since I don't yet have my Next, I'll be working in an emulator. I'm told that
<a href="https://sourceforge.net/projects/zesarux/">ZEsarUX</a> is the best emulator currently available, and it's supposed to be able to
emulate the TBBlue, the forerunner to the Spectrum Next. I'll also need to be
able to compile my programs, and <a href="https://www.z88dk.org/">Z88DK</a> seems
to be the best solution for that. It's going to take me a while to cobble these
together, but I'm sure I'll get there in the end :)

My first challenge to myself: be able to get a machine code program running that
will clear the screen. Sounds simple, right? Well, Paul Land posted a <a href="http://www.speccyvirgins.com/2017/05/blog-post_72.html">very
useful Spectrum memory map</a> on his website. As I understand it, I should be
able to clear the screen by blanking out all the bytes from $4000 (16384) to
$5AFF. I'll give that a go, and update this post with my progress. And an video
of it, if I get that far...

I've also found these very good videos by Michael Daley, who recommends a slightly
different toolset for building Spectrum software... <a href="https://vimeo.com/166935577">part 1 is here</a>,
and <a href="https://vimeo.com/167876638">part 2 is here</a>. Michael recommends
using <a href="http://zxsp.blogspot.co.uk/p/about-zxsp.html">ZXSP</a>, and the <a href="http://pasmo.speccy.org">Pasmo assembler</a>. He's also taken the time to explain how to
set up building your programs from within Sublime Text 3, which I found extremely
useful. Michael is the author of <a href="https://github.com/mikedaley/SpectREM">SpectREM</a>;
I'd assume that means he's moved away from ZXSP since his earlier videos ;)
