<h2>My Projects</h2>

{% for project in site.projects %}
  <ul class="projects">
    <li>
      <h3>
        <a class="post-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
      </h3>
      {{ project.excerpt | markdownify }}
      <ul class="tools">
        {% for technology in project.technologies %}
          <li>{{ technology | capitalize }}</li>
        {% endfor %}
      </ul>
    </li>
  </ul>
{% endfor %}
