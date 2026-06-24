let letterA = document.getElementById("letterChangeA");

const letters = "A4A4A4".split("");
let index = 0;
let isVisible = true;

setInterval(() => {
  letterA.textContent = letters[index];
  index = (index + 1) % letters.length;

  setInterval(() => {
    isVisible = !isVisible;
    letterA.style.opacity = isVisible ? "1" : "0";
  }, 300);
}, 2000);
