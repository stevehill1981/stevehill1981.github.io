---
layout: layouts/base.njk
title: Code Like It's 198x
---

<div class="prose mx-auto">
    <h1>Code Like It's 198x</h1>
    
    <p class="text-xl mb-8">A series exploring programming techniques and technologies from the 1980s and how they relate to modern development.</p>
    
    <div class="space-y-8">
        {% for article in collections.code198x %}
        <article class="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 class="text-2xl font-bold mb-2">
                <a href="{{ article.url }}" class="hover:text-blue-600">{{ article.data.title }}</a>
            </h2>
            <p class="text-gray-600 dark:text-gray-400">{{ article.date | readableDate }}</p>
            <p class="mt-2">{{ article.data.description }}</p>
            <div class="mt-4">
                <a href="{{ article.url }}" class="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">Read more →</a>
            </div>
        </article>
        {% endfor %}
    </div>
</div> 