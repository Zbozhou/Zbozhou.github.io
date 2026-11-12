(function () {
  "use strict";

  const browser = document.querySelector("[data-publication-browser]");
  if (browser) {
    const tabs = Array.from(browser.querySelectorAll("[data-publication-tab]"));
    const panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    });

    function selectTab(id, focus, updateHistory) {
      const index = tabs.findIndex(function (tab) {
        return tab.dataset.publicationTab === id;
      });
      if (index < 0 || panels.some(function (panel) { return !panel; })) return;
      tabs.forEach(function (tab, position) {
        const selected = position === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[position].hidden = !selected;
      });
      if (focus) tabs[index].focus({ preventScroll: true });
      if (updateHistory && window.location.hash !== "#" + id) {
        window.history.pushState(null, "", "#" + id);
      }
    }

    function selectFromLocation() {
      const id = window.location.hash.slice(1);
      selectTab(id === "autonomous-driving" ? id : "robotics", false, false);
    }

    if (tabs.length === 2 && panels.every(function (panel) { return panel; })) {
      browser.classList.add("publication-tabs-ready");
      browser.querySelector(".publication-tabs").hidden = false;
      selectFromLocation();
      tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function () {
          selectTab(tab.dataset.publicationTab, false, true);
        });
        tab.addEventListener("keydown", function (event) {
          let next = index;
          if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
          else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = tabs.length - 1;
          else return;
          event.preventDefault();
          selectTab(tabs[next].dataset.publicationTab, true, true);
        });
      });
      window.addEventListener("hashchange", selectFromLocation);
    }
  }

  const dialog = document.getElementById("publication-viewer");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const image = dialog.querySelector(".publication-viewer-image");
  const title = document.getElementById("publication-viewer-title");
  const source = dialog.querySelector(".publication-viewer-source a");
  const closeButton = dialog.querySelector(".publication-viewer-close");
  let opener = null;

  document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) return;
    const figure = event.target.closest("a.pub-figure");
    if (!figure || event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    opener = figure;
    const thumbnail = figure.querySelector("img");
    title.textContent = figure.dataset.title;
    image.src = figure.href;
    image.alt = thumbnail ? thumbnail.alt : figure.dataset.title;
    source.href = figure.href;
    dialog.showModal();
    document.documentElement.classList.add("publication-viewer-open");
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });

  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("publication-viewer-open");
    if (opener) opener.focus({ preventScroll: true });
  });
}());
