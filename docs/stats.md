---
title: Stats and Credits
sidebar: Overview_sidebar
permalink: stats_credits.html
# draft: true
# toc: true
# summary: 
# keywords: []
# authors: []
# last_updated: Month Day, Year
# tags: []
noedit: true
noprinter: true
customPageType: info
---

<!-- Data for page counts -->
{% assign word_count = 0 %}
{% assign valid_pages = site.pages | where_exp:"item","item.private != true" %}
{% for page in valid_pages %}
    {% assign words = page.content | number_of_words %}
    {% assign word_count = word_count | plus:words %}
{% endfor %}

Currently, there are **{{valid_pages | size}}** active pages in the wiki averaging roughly **{{word_count | divided_by:valid_pages.size}}** words per page. **{{valid_pages | where_exp:"item","item.authors" | size}}** pages have a non-anonymous author.

<!-- Data for credits and percentage bars -->
{% assign highest_contribution = 0 %}
{% assign authors = valid_pages | map: 'authors' | join: ',' | split: ',' | uniq | sort_natural %}
{% for author in authors %}
    {% assign page_count = valid_pages | where_exp:"item","item.authors contains author" | size %}
    {% if page_count > highest_contribution %}
        {% assign highest_contribution = page_count %}
    {% endif %}
{% endfor %}

{% assign highest_up_10 = highest_contribution | times:10 %}

The following individuals have chosen to take credit for their work. They are listed in alphabetical order:
<table class="credit-table">
    <thead>
        <tr>
            <th>Names</th>
            <th>Contributions</th>
            <th>Percentage</th>
        </tr>
    </thead>
<tbody>

{% for author in authors %}
    {% if author.size > 0 %}
        {% assign page_count = valid_pages | where_exp:"item","item.authors contains author" | size %}
        <tr><td>
        {% if site.data.person_links[author] %}
            <b><a href="{{site.data.person_links[author]}}">{{author}}</a></b>
        {% else %}
            <b>{{author}}</b>
        {% endif %}
        </td>
        <td>
        Contributed to {{page_count}} page{% if page_count != 1 %}s{% endif %}
        </td>
        {% assign percent_contribution = page_count | times:10 | divided_by:highest_contribution %}
        <td>
        <div class="stats-contribution-wrapper">
        {% for i in (1..10) %}
            {% if i <= percent_contribution %}
                <i class="fa fa-circle stats-contribution sc-filled"></i>
            {% else %}
                <i class="fa fa-circle stats-contribution sc-empty"></i>
            {% endif %}
        {% endfor %}
        </div>
        </td></tr>
    {% endif %}
{% endfor %}

</tbody>
</table>

Many others have chosen to remain anonymous and have helped significantly in the background, even if they didn't directly write a page. I would personally like to thank everyone who has taken an interest in the project.
