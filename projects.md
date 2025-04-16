---
layout: page
title: Projects
permalink: /projects/
---

Here are some of the side projects and experiments I’ve worked on over the years.

{% for post in site.posts %}
  {% if post.tags contains "projects" %}
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  {% endif %}
{% endfor %}
