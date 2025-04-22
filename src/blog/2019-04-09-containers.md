---

title: "Containers"
date: 2019-04-09
excerpt: "Containers like Docker transformed how we build and run software — offering reproducibility, isolation, and a path to modern deployments. Here's why I changed my mind."
read_time: true
author_profile: true
tags:
  - docker
  - containers
  - devops
  - tooling
---  
By now, most IT professionals will have heard of Docker and containers. They're
either using containers, or are considering doing so in the future.

Personally, I'm something of a recent convert to the idea of using containers.
Until I started in my current role at Divido, all of my employers had been using
more traditional hosting environments; some were even actively hostile towards
the idea of containers.

<!--more-->

Obviously, containers aren't the _only_ way to host an application. The old way
of dedicating an entire physical or virtual server to an application still works,
and may even be necessary in some scenarios.

Containers aren't perfect, either. Things can, and do, go wrong. New processes
have to be put in place for development, deployment and security. New skills have
to be learned (and there's an enormous amount to learn).

So, what are the benefits? Why should you even bother?

## Reproducibility

One problem I've seen again and again is that it's hard to set up a new environment
for a given application. Typically, the process is poorly documented (if at all),
and involves a significant amount of manual work, installing specific packages,
setting up firewall rules...

Containers help with this by forcing you to understand the environment in which
your application is running. Your `Dockerfile` becomes a self-documenting record of
the packages your application needs, of the environment variables that need to be
set, of the ports that need to be exposed. And then, next time you need a new
environment, the `Dockerfile` can be used for that too.

As a bonus, the generated image can be treated as immutable; if you need to run
that exact version of your application again in the future (perhaps to confirm
when a bug was first introduced), then you can just pull the old version and run
it directly.

## Isolation

If you're used to a traditional hosting environment, then you might have multiple
applications running on a single server. So what happens when _one_ of those
applications is updated and requires a newer package version (say, a PHP app that
requires 7.2 instead of 5.6)?

In my experience, a lot of griping, moaning and an eventual rejection of the upgrade
because it's deemed to be too risky, or because it'll break the other applications.

You could move the app to another server, but then you've increased your
infrastructure costs, and the client may not accept that... but with containers,
each app is isolated from the others, so that they can each run whatever version of
PHP (or whatever) they need.

This isolation may also force you to realise hidden dependencies between the
applications, such as a shared filesystem or configuration file.

## Scalability

In a traditional hosting environment, it might be tricky to scale out your
application (by adding more servers). This could be because it's difficult to set
up a new server (as discussed under Reproducibility), but also because it's
expensive to have more servers running than you actually need. With containers,
you can run as many extra instances of your application as you need, and then shut
them down again later - easily! You can even automate the scaling process.

Of course, this assumes that your application was architected to be scaled out in
the first place - if not, containers aren't going to help, and you'll have to do
some work in that area first.

## Security

Since your application is running in an isolated environment when inside of a
container, it can only access the resources you allow it to. That reduces (but
doesn't eliminate) the risk that a malicious user can trick your application into
giving them access to things they shouldn't be able to get to.

Even in a containerised world, you still need to make sure that your application
code itself is secure; that any libraries you're using are up-to-date and free of
known security bugs; that your OS is up-to-date. Thankfully, there are tools for
all of these, and you should really be using them anyway, whether you're using
containers or not.

## Development

I think most software developers understand that differences between their
development environment and production can be a cause of bugs and much frustration.

By using containers in development as well, you know that you're using the exact
same software versions that you'll be running in production. This solves the
well-known "works on my machine" problem... albeit by effectively shipping your
machine to production, in the form of a container.

## Deployment

In many of the organisations I've worked for, deployment has been a painful process,
full of manual steps and considered to be high risk (particularly one company I
worked for, where deployment was "`ssh` into the server and run `svn up` in the 
correct directory" - the guilty parties shall not be named, they know who they are).

With containers, you build an image, then pull that image on the server and run it.
It's pretty much foolproof. And rollbacks, should you need them, are as easy as
running an older version of the application.

Obviously there are more advanced techniques; your CI tool can automatically pull
and deploy the latest image on your behalf, for example, or you can do a rolling
deployment where old and new versions of your application exist concurrently for
a brief period, avoiding downtime.

## Conclusion

Containers may not be the best solution, longer term. We may all decide that there
are better ways, as yet unknown to us. That said, I'm convinced that they're the
best solution *right now* for most of us.

As few as three years ago, I couldn't see what advantages containers might have;
I was used to the way things used to be done, and I didn't want to make a leap into
the unknown and unproven technology.

But that was then, and the container landscape has matured significantly in the
intervening period. The software is better, the user experience is better, and there
are significantly fewer bugs. All this means is that now, I have no hesitation at all
in recommending containers.

Good luck!