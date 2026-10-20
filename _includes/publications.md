<h2 id="publications" style="margin: 2px 0px 12px;">Papers</h2>

(*Equal contribution) 

<h3 style="margin: 20px 0px 10px;">Robotics</h3>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.robotics %}

<li>
<div class="pub-row">
  <div class="pub-media">
    {% if link.image %} 
    <a class="pub-figure" href="{{ link.image | relative_url }}" data-title="{{ link.title | escape }}" aria-label="Enlarge figure for {{ link.title | escape }}">
      <img src="{{ link.image | relative_url }}" class="teaser" alt="Figure for {{ link.title | escape }}" loading="lazy" decoding="async" {% if link.image_width and link.image_height %}width="{{ link.image_width }}" height="{{ link.image_height }}"{% endif %}>
    </a>
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="pub-details">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Read {{ link.title | escape }}">Paper</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Source code for {{ link.title | escape }}">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Project page for {{ link.title | escape }}">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn" target="_blank" rel="noopener noreferrer">BibTeX</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

<h3 style="margin: 20px 0px 10px;">Autonomous Driving</h3>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.autonomous_driving %}

<li>
<div class="pub-row">
  <div class="pub-media">
    {% if link.image %} 
    <a class="pub-figure" href="{{ link.image | relative_url }}" data-title="{{ link.title | escape }}" aria-label="Enlarge figure for {{ link.title | escape }}">
      <img src="{{ link.image | relative_url }}" class="teaser" alt="Figure for {{ link.title | escape }}" loading="lazy" decoding="async" {% if link.image_width and link.image_height %}width="{{ link.image_width }}" height="{{ link.image_height }}"{% endif %}>
    </a>
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="pub-details">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Read {{ link.title | escape }}">Paper</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Source code for {{ link.title | escape }}">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Project page for {{ link.title | escape }}">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn" target="_blank" rel="noopener noreferrer">BibTeX</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

<h3 style="margin: 20px 0px 10px;">Preprint</h3>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.preprint %}

<li>
<div class="pub-row">
  <div class="pub-media">
    {% if link.image %}
    <a class="pub-figure" href="{{ link.image | relative_url }}" data-title="{{ link.title | escape }}" aria-label="Enlarge figure for {{ link.title | escape }}">
      <img src="{{ link.image | relative_url }}" class="teaser" alt="Figure for {{ link.title | escape }}" loading="lazy" decoding="async" {% if link.image_width and link.image_height %}width="{{ link.image_width }}" height="{{ link.image_height }}"{% endif %}>
    </a>
    {% endif %}
    {% if link.conference_short %}
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="pub-details">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %}
      <a href="{{ link.pdf }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Read {{ link.title | escape }}">Paper</a>
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Source code for {{ link.title | escape }}">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Project page for {{ link.title | escape }}">Project Page</a>
      {% endif %}
      {% if link.bibtex %}
      <a href="{{ link.bibtex }}" class="btn" target="_blank" rel="noopener noreferrer">BibTeX</a>
      {% endif %}
      {% if link.notes %}
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
