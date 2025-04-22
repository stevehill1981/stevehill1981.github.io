---
layout: wrapper
title: "Code Like It's 198X"
permalink: /code-like-its-198x/
---

<div class="prose max-w-none">

  <h1 class="text-4xl font-bold mb-4">Code Like It's 198x</h1>

  <p class="text-lg mb-6">
    <strong>Welcome to <em>Code Like It's 198x</em></strong>, a blog series exploring the joys and challenges of writing code for vintage computers — from the 8-bit wonders of the 1980s to the 16-bit and early 32-bit systems of the 1990s.
  </p>

  <p class="text-lg mb-6">
    This series is for curious minds who want to understand:
  </p>

  <ul class="list-disc pl-5 mb-6">
    <li>How games and programs were built with limited memory, slow CPUs, and quirky graphics hardware.</li>
    <li>What it's like to write assembly and BASIC in 2025.</li>
    <li>How to get started with emulators, dev tools, and cross-compilers.</li>
    <li>Why learning to code on vintage systems still matters — and what it teaches us about modern software development.</li>
  </ul>

  <p class="text-lg mb-6">
    Whether you're here to relive your childhood, learn the foundations of computing, or just build something fun, you're in the right place.
  </p>

</div>

<div class="bg-white p-6 rounded-lg shadow-md mt-8">

  <h2 class="text-2xl font-bold mb-4">📚 Posts in the Series</h2>

  {% assign posts = site.code198x | sort: "date" %}
  <ul class="series-posts list-disc pl-5">
    {% for post in posts %}
      <li class="mb-4">
        <a href="{{ post.url }}" class="text-blue-600 hover:underline">{{ post.title }}</a>
        {% if post.system %}<small class="text-gray-500">({{ post.system }})</small>{% endif %}<br>
        <small class="text-gray-500">{{ post.date | date: "%B %d, %Y" }}</small><br>
        {% if post.summary %}<p class="text-gray-700">{{ post.summary }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
