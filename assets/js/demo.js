(() => {
  "use strict";
  const video = document.getElementById("docuforge-video");
  if (!video) return;
  const error = document.getElementById("video-error");
  const chapters = Array.from(document.querySelectorAll("[data-seek]"));
  const setReady = (ready) => chapters.forEach((button) => { button.disabled = !ready; });
  const failed = () => { setReady(false); error.hidden = false; };
  const ready = () => { error.hidden = true; setReady(Number.isFinite(video.duration) && video.duration > 0); };
  video.addEventListener("loadedmetadata", ready);
  video.addEventListener("error", failed);
  const source = video.querySelector("source");
  if (source) source.addEventListener("error", failed);
  if (video.readyState >= 1) ready();
  chapters.forEach((button) => button.addEventListener("click", () => {
    const time = Number(button.dataset.seek);
    if (!Number.isFinite(time) || !Number.isFinite(video.duration)) return;
    video.currentTime = Math.min(Math.max(0, time), Math.max(0, video.duration - 0.1));
    video.focus();
    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => { /* Native controls remain available. */ });
  }));
})();
