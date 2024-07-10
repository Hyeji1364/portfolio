document.addEventListener("DOMContentLoaded", function () {
  const loadHTML = async (url, elementId) => {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;

    if (elementId === "section1") {
      const music1 = document.getElementById("background-music1");
      const music2 = document.getElementById("background-music2");
      const musicButton = document.getElementById("music-button");
      const soundButton = document.getElementById("sound-button");
      const volumeSliderContainer = document.getElementById(
        "volume-slider-container"
      );
      const volumeSlider = document.getElementById("volume-slider");

      music1.play();

      music1.addEventListener("ended", function () {
        music2.play();
      });

      musicButton.addEventListener("click", function () {
        if (music1.paused && music2.paused) {
          music1.play();
          musicButton.textContent = "⏸️";
        } else {
          music1.pause();
          music2.pause();
          musicButton.textContent = "🎵";
        }
      });

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

      volumeSlider.addEventListener("input", function () {
        music1.volume = volumeSlider.value;
        music2.volume = volumeSlider.value;
      });
    }

    if (elementId === "section2") {
      const introText = document.querySelector(".intro-text");
      const lines = introText?.querySelectorAll("span");
      let delay = 0;

      window.addEventListener("scroll", () => {
        const section2Top = introText?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (section2Top < windowHeight) {
          lines.forEach((line, index) => {
            setTimeout(() => {
              line.style.opacity = 1;
              line.style.transform = "translateY(0)";
            }, delay + index * 800);
          });
        }
      });
    }
  };

  loadHTML("section1.html", "section1")
    .then(() => {
      return loadHTML("section2.html", "section2");
    })
    .then(() => {
      return loadHTML("section3.html", "section3");
    })
    .then(() => {
      return loadHTML("section4.html", "section4");
    })
    .then(() => {
      document.querySelectorAll("#container > div").forEach((section) => {
        section.style.margin = "0";
        section.style.padding = "0";
      });
    });
});
