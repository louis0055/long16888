const video = document.querySelector(".player video");
const sound = document.querySelector(".sound");

function updateSoundLabel() {
  sound.textContent = video.muted || video.volume === 0 ? "開啟聲音" : "關閉聲音";
}

sound.addEventListener("click", () => {
  const enableSound = video.muted || video.volume === 0;
  video.muted = !enableSound;
  if (enableSound) {
    if (video.volume === 0) video.volume = 1;
    if (video.paused) video.play().catch(() => {});
  }
  updateSoundLabel();
});
video.addEventListener("volumechange", updateSoundLabel);
updateSoundLabel();
sound.hidden = false;
