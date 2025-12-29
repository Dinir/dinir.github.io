---
layout: default
title: Dinir Nertan - Code Works
description: Codes written by Dinir.
---
{% include underconstruction.html %}
<link rel="stylesheet" href="./stylesheet/project-card.css">

# Code Works

<section class="project-cards">
    {% for p in site.data.project %}
    {% include projectslot.html
        id=p.id
        url=p.url
        img=p.img
        imgalt=p.imgalt
        title=p.title
        description=p.description
        tags=p.tags
    %}
    {% endfor %}
</section>

<script src="./script/projectCards.js" />