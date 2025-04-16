---
layout: page
title: Tags
permalink: /tags/
---

<ul>
{% assign tags_list = site.tags %}
{% for tag in tags_list %}
  <li>
    <h2>{{ tag[0] }}</h2>
    <ul>
      {% for post in tag[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
