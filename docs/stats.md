---
title: Stats
sidebar: Overview_sidebar
permalink: stats.html
# draft: true
# toc: true
# summary: 
# keywords: []
# authors: []
# last_updated: Month Day, Year
# tags: []
noedit: true
customPageType: info
---

{% assign word_count = 0 %}
{% assign valid_pages = site.pages | where_exp:"item","item.private != true" %}
{% for page in valid_pages %}
    {% assign words = page.content | number_of_words %}
    {% assign word_count = word_count | plus:words %}
{% endfor %}

Currently, there are **{{valid_pages | size}}** active pages in the wiki averaging roughly **{{word_count | divided_by:valid_pages.size}}** words per page.

The following individuals have chosen to take credit for their work. They are listed in alphabetical order:
{% assign authors = valid_pages | map: 'authors' | join: ',' | split: ',' | uniq | sort_natural %}
<ul>
{% for author in authors %}
    {% if author.size > 0 %}
        <li>
        {% assign page_count = site.pages | where_exp:"item","item.authors contains author" | size %}
            {% if site.data.person_links[author] %}
                <b><a href="{{site.data.person_links[author]}}">{{author}}</a></b>: Contributed to {{page_count}} page{% if page_count != 1 %}s{% endif %}
            {% else %}
                <b>{{author}}</b>: Contributed to {{page_count}} page{% if page_count != 1 %}s{% endif %}
            {% endif %}
        </li>
    {% endif %}
{% endfor %}
</ul>

Many others have chosen to remain anonymous and have helped significantly in the background, even if they didn't directly write a page. I would personally like to thank everyone who has taken an interest in the project.