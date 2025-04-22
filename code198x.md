---
layout: default
title: "Code Like It's 198X"
permalink: /code198x/
---

# Code Like It's 198X

**Welcome to _Code Like It’s 198X_**, a blog series exploring the joys and challenges of writing code for vintage computers — from the 8-bit wonders of the 1980s to the 16-bit and early 32-bit systems of the 1990s.

This series is for curious minds who want to understand:
- How games and programs were built with limited memory, slow CPUs, and quirky graphics hardware.
- What it’s like to write assembly and BASIC in 2025.
- How to get started with emulators, dev tools, and cross-compilers.
- Why learning to code on vintage systems still matters — and what it teaches us about modern software development.

Whether you're here to relive your childhood, learn the foundations of computing, or just build something fun, you're in the right place.

---

## 📚 Posts in the Series

{% assign posts = site.code198x | sort: "date" %}
<ul class="series-posts">
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {% if post.system %}<small>({{ post.system }})</small>{% endif %}<br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small><br>
      {% if post.summary %}<p>{{ post.summary }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
