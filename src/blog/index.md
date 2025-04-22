---
layout: layouts/base.njk
title: Blog
---

<div class="prose mx-auto">
    <h1>Blog</h1>
    
    <ul class="space-y-8">
        {% for post in collections.posts %}
        <li class="border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 class="text-2xl font-bold mb-2">
                <a href="{{ post.url }}" class="hover:text-blue-600">{{ post.data.title }}</a>
            </h2>
            <p class="text-gray-600 dark:text-gray-400">{{ post.date | readableDate }}</p>
            <p class="mt-2">{{ post.data.description }}</p>
        </li>
        {% endfor %}
    </ul>
</div> 