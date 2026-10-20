(function () {
  "use strict";

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
