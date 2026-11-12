<h2 id="publications" style="margin: 2px 0px 12px;">Papers</h2>

<div class="publication-browser" data-publication-browser>
  <div class="publication-tabs" role="tablist" aria-label="Research area" hidden>
    <button type="button" class="publication-tab" id="tab-robotics" role="tab" aria-controls="robotics" aria-selected="true" data-publication-tab="robotics">Robotics</button>
    <button type="button" class="publication-tab" id="tab-autonomous-driving" role="tab" aria-controls="autonomous-driving" aria-selected="false" tabindex="-1" data-publication-tab="autonomous-driving">Autonomous Driving</button>
  </div>
  <p class="publication-note">(*Equal contribution)</p>

  <div id="robotics" class="publication-panel" role="tabpanel" aria-labelledby="tab-robotics">
    <h3 class="publication-domain-title">Robotics</h3>
    <h4 class="publication-group-title">Published Papers</h4>
    {% include publication-list.html papers=site.data.publications.robotics %}
    <h4 class="publication-group-title">Preprints</h4>
    {% assign robotics_preprints = site.data.publications.preprint | where: "area", "robotics" %}
    {% include publication-list.html papers=robotics_preprints %}
  </div>

  <div id="autonomous-driving" class="publication-panel" role="tabpanel" aria-labelledby="tab-autonomous-driving">
    <h3 class="publication-domain-title">Autonomous Driving</h3>
    <h4 class="publication-group-title">Published Papers</h4>
    {% include publication-list.html papers=site.data.publications.autonomous_driving %}
    <h4 class="publication-group-title">Preprints</h4>
    {% assign driving_preprints = site.data.publications.preprint | where: "area", "autonomous_driving" %}
    {% include publication-list.html papers=driving_preprints %}
  </div>
</div>
