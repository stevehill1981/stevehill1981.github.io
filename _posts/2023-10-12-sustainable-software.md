---
layout: post
title: "Sustainable Software"
date: 2023-10-12 13:37:00
categories:
  - development
---
I've been tossing the idea of Sustainable Software back and forth in my mind for over a decade, possibly even
longer than that.

By now, I've been working as a professional software engineer for more than 17 years, for a
wide variety of companies, most of whom have standardised around different technology stacks. I've used PHP,
Go, JavaScript, Ruby, Python; even some Perl, though I definitely wouldn't claim to be current in all of them.

I've also worked with a number of different project management techniques, from extremely formalised approaches
like PRINCE2, to more agile-focused ones like Scrum and Shape Up. I definitely have a preference towards the
lighter touch approaches, however!

Throughout all of this time, the idea that software development should be _sustainable_ has stuck with me. Whilst
there are times when, as a team, you need to pull out all of the stops in order to deliver a key feature in a very
tight timescale, this definitely should not be the norm. Not unless you want to see a high rate of attrition amongst
your engineers and a significant accumulation of technical debt, that is. And if you do want those things... I don't
think there's anything I could say that would convince you otherwise.

<!--more-->

To me, sustainable software engineering is about making the right decisions for the long term health of your product
and of your team. It's about keeping the quality high; it's about being able to build software that is future-proof,
that can adapt to the ever-changing needs of your team, your company, and your customers, whether they be internal or
external.

As such, there's no single prescribed way to achieve sustainability. Your team is different to my team, and both are
different to other teams. I don't know the environment in which you're working, what your constraints are in terms of
time and budget. The technology stack you're working with also influences these decisions, and you may not have the
option to change that either.

That being said, I firmly believe that you'll enjoy more success if you avoid bleeding edge technology as much as is
humanly possible. I've read [Dan McKinley's awesome "Choose Boring Technology" essay](https://mcfunley.com/choose-boring-technology)
(and if you haven't, make sure you set aside the time to do so). Adopting the latest and greatest is *fun*, of course,
and it definitely scratches an itch most of us engineers feel from time-to-time, but it increases the risk of your
product and your project getting wildly out of control and becoming unmaintainable. Choose stable tools that provide
proven solutions, wherever you can.

Try not to throw too many roadblocks in front of your team; you don't want them to become frustrated. You want them to
be focused on delivering the best product they're capable of. Talk to your engineers. Identify their frustrations, then
put a plan in place to mitigate them as best you can.

Make sure your product is stable; you'll struggle to maintain a steady pace if you've built on sand. That means writing
tests. It means having appropriate monitoring in place, and it means that the ever-growing backlog of bugs *must* be
addressed regularly. Every time you prioritise new feature work over a bug ticket, you're increasing the amount of technical
debt in your product, and it *will* catch up with you in the long run, unless your company runs out of money first.

Keep your dependencies up-to-date too. If there's been a security vulnerability in one of the libraries you're using, the
last thing you need is to first have to upgrade a whole bunch of other libraries in order to be able to get to a secure
version again. I've been there, it's not fun.

I'm undoubtedly going to have more to say on this subject, but I just wanted to finally write some of these things down
so that I can get them out of my head.
