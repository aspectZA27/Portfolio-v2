// Turn off the browser's automatic scroll restoration
if ("history" in window && "scrollRestoration" in window) {
  window.history.scrollRestoration = "manual";
}

// Force the window to scroll to the top left instantly
window.scrollTo(0, 0);

const ruan = "RUAN";
let ruan1 = document.getElementById("titleR");
let ruanIndex = 0;
const ruanAppear = setInterval(() => {
  let span = document.createElement("span");
  span.textContent = ruan[ruanIndex];

  if (ruanIndex <= 1) {
    span.id = "krugerSpan";
  } else if (ruanIndex === 2) {
    span.id = "letterA";
  } else {
    span.id = "krugerSpan";
  }

  ruan1.appendChild(span);
  ruanIndex++;

  if (ruanIndex >= ruan.length) {
    clearInterval(ruanAppear);

    let letterA = document.getElementById("letterA");

    const kruger = "KRUGER";
    let kruger1 = document.getElementById("titleK");
    let krugerIndex = 0;
    const krugerAppear = setInterval(() => {
      let span = document.createElement("span");
      span.textContent = kruger[krugerIndex];

      if (krugerIndex <= 5) {
        span.id = "krugerSpan";
      }

      kruger1.appendChild(span);
      krugerIndex++;

      if (krugerIndex >= kruger.length) {
        clearInterval(krugerAppear);
      }
    }, 150);
  }
}, 150);

//Loading effect on profile
const loader = document.getElementById("loader");
const loaders = ["|", "/", "-", "\\"];
let loaderIndex = 0;
setInterval(() => {
  loader.textContent = loaders[loaderIndex];
  loaderIndex = (loaderIndex + 1) % loaders.length;
}, 150);

const loader1 = document.getElementById("loader1");
const loaders1 = ["|", "/", "-", "\\"];
let loader1Index = 0;
setInterval(() => {
  loader1.textContent = loaders1[loader1Index];
  loader1Index = (loader1Index + 1) % loaders1.length;
}, 150);

const textElement = document.getElementById("about_p");
const text = textElement.textContent;
textElement.textContent = "";

let hasTyped = false;

function wrapLetters() {
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("letter");
    textElement.appendChild(span);
  });
}

function animateLetters() {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("show");
    }, i * 30);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true;

        wrapLetters();
        animateLetters();
      }
    });
  },
  {
    threshold: 0.5,
  },
);

observer.observe(textElement);
