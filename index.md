---
layout: default
title: Dinir Nertan - Video Game Music Composer and Web Developer
description: Personal homepage made to showcase works of Dinir Nertan.
---
<div id="stack">
{% for c in site.data.navigation %}
<article id="{{ c.name }}">
{% capture page %}
{% include content/{{ c.filename | append: '.md' }} %}
{% endcapture %}
{{ page | markdownify }}
</article>
{% endfor %}
</div>
<script src="./script/updateFromItemPosition.js"></script>