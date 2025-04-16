---
layout: post
title: "Microservices, and why they're not always the answer"
date: 2020-07-18
excerpt: "Microservices were supposed to save us. For most teams, they just moved the pain around — and made everything more complicated in the process."
read_time: true
author_profile: true
tags:
  - microservices
  - architecture
  - devops
  - lessons-learned
---  
Microservices have been fashionable for a while now, and why wouldn't they be?

On the face of it, the concept sounds compelling; your application is complex, so you break it up into
many smaller components that work together to get the job done.

In theory, this allows your development teams to work independently of each other, multiplying your
throughput and delivering more value to your clients and your business. Sure, there's a bit of extra
operational overhead, but that's ok, right?

<!--more-->

I was only half-joking the other day when I told a colleague that I could measure my seniority as a
developer by an increase in the number of times my answer to a question was "it depends". This is another
of those situations.

Whether microservices are beneficial or not depends on many factors:

  * Does your organisation value code quality?
  * Do your developers write tests to prove that the code they're writing works as expected?
  * Do you have comprehensive monitoring of your production environment?
  * Does your ops team have capacity to support running dozens of new services?
  
If you can't answer "yes" to all of these questions, then you might want to reconsider.

I've often seen microservices being adopted when an existing legacy monolith becomes too hard to maintain,
usually because of an underinvestment in quality and testing, or because senior team members have moved on
to pastures new and nobody left at the company fully understands how the system works.

Let's be clear - these are terrible reasons to make the change. If you don't understand how your current
system works, how could you ever hope to extract it into separate services? And if you don't have a pretty
comprehensive test suite, how do you know your system is even working in the way you think it does?

And if you push ahead anyway, well... good luck. Now, instead of a single codebase fully of slightly
broken code, you have dozens or hundreds of codebases full of slightly broken code, each of which probably
has hidden, undocumented dependencies on at least one other microservice, if not _many_.

As a bonus, now each of your developers needs to be able to spin up a significant proportion of your
production infrastructure on their workstations in order to be able to make a change to any single part of
your system. You can't easily run a full end-to-end test, partly because running the entire application is
so heavy, and partly because each of your services now interacts in subtle ways that are hard to monitor;
you have to trust that the parts you haven't changed are working how they're supposed to.

Oh, by the way: someone in another team changed that other service last week, introducing a minor bug that
their test suite didn't pick up (assuming they have one), and now your service is broken too and you don't
know why.

You probably need more developers now too - at least twice as many - because now you have to try to keep
all of these various services in sync with each other, and you can't make as much progress as you thought
because every new feature requires changes that cascade through dozens of other services, and each of those
other services needs to be released in the right order so that your entire production stack doesn't fall
over.

Microservices, simply put, are a solution to a problem that the majority of organisations simply do not
have - how to ship working software when you have tens of thousands of engineers beavering away at the same
time. If you're not operating at the scale of somewhere like Google, Facebook or Netflix, chances are good
that you don't need to adopt a microservice architecture.

There are, of course, ways to mitigate against most of the problems above, and microservices done well can
be hugely beneficial. I've just seen enough instances where the transition has been a complete nightmare
to be wary of yet another silver bullet. A monorepo is not the answer, either.

My advice: stick with a monolith until you have no choice but to extract functionality. Even then, don't
go whole hog - slice off a small piece of your system at a time, and iterate until you find the right
balance.

There's always going to be complexity somewhere; when evaluating whether to make a move towards microservices,
the decision you're forced to make is where that complexity hits you. Is it during development, where any
viable technology stack likely has excellent debugging and static analysis tools and test frameworks, or is
it when you deploy, maintain and manage your software?

Recently, we're hearing that the likes of Uber (who were historically massive proponents of the microservice
approach) are moving the needle gradually back in the other direction, towards fewer, larger services. I
suspect we're going to see other organisations doing the same over the next couple of years. Whether this is
itself another instance of the cargo-culting that led to the widespread adoption of microservices in the first
place remains to be seen.
