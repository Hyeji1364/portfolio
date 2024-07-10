document.addEventListener("DOMContentLoaded", function () {
  const music1 = document.getElementById("background-music1");
  const music2 = document.getElementById("background-music2");
  const musicButton = document.getElementById("music-button");
  const soundButton = document.getElementById("sound-button");
  const volumeSliderContainer = document.getElementById(
    "volume-slider-container"
  );
  const volumeSlider = document.getElementById("volume-slider");
  const portfolioReportText = document.querySelector(".portfolio-report p");
  const introText = document.querySelector(".intro-text");
  const lines = introText.querySelectorAll("span");
  let delay = 0;

  // 페이지 로드 시 첫 번째 음악 자동 재생
  music1.play();

  // 첫 번째 음악이 끝나면 두 번째 음악 재생
  music1.addEventListener("ended", function () {
    music2.play();
  });

  // 음악 재생/멈춤 버튼
  musicButton.addEventListener("click", function () {
    if (music1.paused && music2.paused) {
      music1.play();
      musicButton.textContent = "⏸️"; // 일시정지 아이콘
    } else {
      music1.pause();
      music2.pause();
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
    music1.volume = volumeSlider.value;
    music2.volume = volumeSlider.value;
  });

  // 포트폴리오 텍스트 스크롤 애니메이션
  function handleScroll() {
    const rect = portfolioReportText.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight) {
      portfolioReportText.classList.add("scroll-animate");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 페이지 로드 시 초기 상태 확인

  // 인트로 텍스트 애니메이션
  function handleIntroScroll() {
    const section2Top = introText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (section2Top < windowHeight) {
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.style.opacity = 1;
          line.style.transform = "translateY(0)";
        }, delay + index * 300);
      });
      window.removeEventListener("scroll", handleIntroScroll);
    }
  }

  window.addEventListener("scroll", handleIntroScroll);
  handleIntroScroll(); // 페이지 로드 시 초기 상태 확인
});
