const ruan = "RUAN";
let ruan1 = document.getElementById("titleR");
let ruanIndex = 0;
const ruanAppear = setInterval(() => {
  let span = document.createElement("span");
  span.textContent = ruan[ruanIndex];

  if (ruanIndex === 2) {
    span.id = "letterA";
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

      if (krugerIndex === 4) {
        span.id = "letterE";
      }

      kruger1.appendChild(span);
      krugerIndex++;

      if (krugerIndex >= kruger.length) {
        clearInterval(krugerAppear);

        let letterE = document.getElementById("letterE");
      }
    }, 200);
  }
}, 200);

const lettersA = ["A", "4"];
const lettersE = ["E", "3"];
let indexA = 0;
let indexE = 0;
let isVisibleA = true;
let isVisibleE = true;

setInterval(() => {
  letterA.textContent = lettersA[indexA];
  indexA = (indexA + 1) % lettersA.length;

  setInterval(() => {
    isVisibleA = !isVisibleA;
    letterA.style.opacity = isVisibleA ? "1" : "0";
  }, 300);
}, 2000);

setInterval(() => {
  letterE.textContent = lettersE[indexE];
  indexE = (indexE + 1) % lettersE.length;

  setInterval(() => {
    isVisibleE = !isVisibleE;
    letterE.style.opacity = isVisibleE ? "1" : "0";
  }, 500);
}, 2000);
