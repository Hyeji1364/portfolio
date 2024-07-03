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
