---
layout: layouts/base.njk
title: Projects
---

<div class="prose mx-auto">
    <h1>Projects</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {% for project in collections.projects %}
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 class="text-xl font-bold mb-2">
                <a href="{{ project.url }}" class="hover:text-blue-600">{{ project.data.title }}</a>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.data.description }}</p>
            <div class="flex flex-wrap gap-2">
                {% for tag in project.data.tags %}
                <span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">{{ tag }}</span>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</div> 