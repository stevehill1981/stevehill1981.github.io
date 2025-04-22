---
layout: layouts/base.njk
title: Home
---

<div class="prose mx-auto">
    <section class="mb-12">
        <h1 class="text-5xl font-bold mb-6">Steve Hill</h1>
        <p class="text-xl mb-4">Software developer with a passion for retro computing and modern web development.</p>
        <p class="mb-4">I write about web development, programming techniques, and explore the intersection of vintage computing with modern technology in my "Code Like It's 198x" series.</p>
        <div class="flex space-x-4 mt-6">
            <a href="/about" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">About Me</a>
            <a href="/blog" class="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Read My Blog</a>
        </div>
    </section>

    <section>
        <h2 class="text-3xl font-bold mb-6">Recent Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">{% for post in collections.posts.slice(0, 2) %}<article class="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 class="text-xl font-bold mb-2">
                    <a href="{{ post.url }}" class="hover:text-blue-600">{{ post.data.title }}</a>
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-2">{{ post.date | readableDate }}</p>
                <p class="mb-4">{{ post.data.description }}</p>
                <div class="flex flex-wrap gap-2">{% for tag in post.data.tags %}<span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">{{ tag }}</span>{% endfor %}</div>
            </article>{% endfor %}
        </div>
        <div class="mt-8 text-center">
            <a href="/blog" class="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">View all posts →</a>
        </div>
    </section>
</div> 