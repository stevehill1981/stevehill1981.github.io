---
layout: page
title: Projects
permalink: /projects/
---

Here are some of the side projects and experiments I've worked on over the years.

<div class="mt-10 space-y-10">
{% for project in site.projects %}
  <article>
    <h2 class="text-xl font-semibold mb-1">
      <a href="{{ project.url | relative_url }}" class="hover:text-primary no-underline">{{ project.title }}</a>
    </h2>
    {% if project.excerpt %}
    <div class="text-muted mb-2">
      {{ project.excerpt }}
    </div>
    {% endif %}
    {% if project.technologies %}
    <p class="text-sm text-muted">
      <strong>Technologies:</strong> {{ project.technologies | join: ', ' }}
    </p>
    {% endif %}
  </article>
{% endfor %}
</div>
