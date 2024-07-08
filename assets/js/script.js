document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("background-music");
  const musicButton = document.getElementById("music-button");
  const soundButton = document.getElementById("sound-button");
  const volumeSliderContainer = document.getElementById(
    "volume-slider-container"
  );
  const volumeSlider = document.getElementById("volume-slider");

  // 음악 자동 재생
  music.play();

  // 음악 재생/멈춤 버튼
  musicButton.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      musicButton.textContent = "⏸️"; // 일시정지 아이콘
    } else {
      music.pause();
      musicButton.textContent = "🎵"; // 재생 아이콘
    }
  });

  // 볼륨 조절 버튼
  soundButton.addEventListener("click", function () {
    if (
      volumeSliderContainer.style.display === "none" ||
      volumeSliderContainer.style.display === ""
    ) {
      volumeSliderContainer.style.display = "flex";
    } else {
      volumeSliderContainer.style.display = "none";
    }
  });

  // 볼륨 슬라이더
  volumeSlider.addEventListener("input", function () {
    music.volume = volumeSlider.value;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".intro-text");
  const lines = introText.querySelectorAll("span");
  let delay = 0;

  window.addEventListener("scroll", () => {
    const section2Top = introText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (section2Top < windowHeight) {
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.style.opacity = 1;
          line.style.transform = "translateY(0)";
        }, delay + index * 300);
      });
    }
  });
});
