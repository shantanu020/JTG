window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("featureVideo");
    const playButton = document.getElementById("playPauseBtn");
  
    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playButton.style.display = "none";
      } else {
        video.pause();
        playButton.style.display = "block";
      }
    });
  
    video.addEventListener("ended", () => {
      playButton.style.display = "block";
    });
  });
  