---
layout: default
title: Dinir Nertan - Code Works
description: Codes written by Dinir.
---
{% include underconstruction.html %}

# Code Works

<section>
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