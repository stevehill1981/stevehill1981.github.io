---
layout: single
title: "The Microservice Hangover"
date: 2025-05-01
excerpt: "Microservices were supposed to make our lives easier. For many teams, they made everything harder. This is a story about scale, pain, and learning the hard way."
read_time: true
author_profile: true
tags:
  - architecture
  - microservices
  - devops
  - lessons-learned
--- 

Microservices were supposed to save us.

They were supposed to make teams autonomous, codebases modular, and  
deployments painless. The pitch was irresistible: split your monolith into  
cleanly bounded services, let each team move fast, and scale effortlessly.  
Amazon did it. Netflix did it. Why shouldn't we?

So we drank the Kool-Aid.

And now a lot of us have woken up with the hangover.

<!--more-->

Here’s the thing no one said loudly enough: **microservices are a trade-off**,  
not a free win. They can work — beautifully, even — but only if you have the  
scale, discipline, tooling, and culture to support them.

Most teams don’t.

I saw it firsthand at Divido, a fintech company I worked at from 2018 to 2021.  
At their peak, they had fewer than 50 engineers — and more than 120  
microservices. Each client deployment involved no less than six separate  
Kubernetes environments. The stack was spread across PHP, Go, and TypeScript,  
with a mix of REST and GraphQL APIs. DevOps was a four-person team, juggling  
dozens of environments across dozens of clusters.

What could possibly go wrong?

---

## What we thought we were buying

The microservices promise looked like this:

- **Independence** — teams can deploy on their own schedule  
- **Scalability** — each service scales independently  
- **Isolation** — faults don’t cascade  
- **Modularity** — change one part without touching the rest

And in theory, all of that can be true.

But what we ended up with wasn’t independence. It was a fragile web of  
inter-service calls, all with hidden dependencies. It wasn’t scalability. It  
was duplicated logic and coordination hell. It wasn’t isolation. It was latency  
spikes, observability gaps, and “just retry it again” coping strategies.

---

## What we actually built

We built:

- **A distributed monolith** — with tightly coupled services that couldn’t  
  function alone  
- **A cognitive overload machine** — where no one understood the whole system  
- **A dev environment nightmare** — where spinning up a new feature meant  
  negotiating with CI pipelines and staging clusters  
- **An operational time bomb** — where one flaky service brought down five more  
  because no one could keep track of who depended on what

And we did all that *with fewer than 30 engineers* by the end.

---

## When microservices make sense

Microservices are not inherently bad. There are times when they are the right  
tool for the job:

- You have *truly independent* domains  
- You have the headcount to support clear service ownership  
- Your infrastructure maturity is already high  
- You’re solving scale problems that justify the split

But that’s a rare situation. And most teams try to adopt microservices long  
before they have the organizational scaffolding to support them.

---

## What most teams actually need

Most teams — especially small or mid-sized ones — need:

- **Clear boundaries** inside a well-structured monolith  
- **Good tests and fast CI**  
- **Strong documentation**  
- **A shared understanding of architecture and ownership**

If you want autonomy, you don’t need microservices. You need trust and  
discipline. You need codebases that are *composable*, not scattered. You need  
tooling that supports speed without multiplying failure modes.

In short, you need to build software that’s sustainable, not just scalable.

---

## Final thought

Microservices are not a silver bullet. They are not a badge of architectural  
maturity. And they are not a shortcut to team velocity.

They are a tool — a powerful one — but only when used with care.

If your architecture feels harder than your product, maybe you don’t need  
smaller services. Maybe you need fewer of them.
