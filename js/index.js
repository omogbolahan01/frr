"use strict";
const trialName = document.querySelectorAll(".trial__name");
const topTwo = document.querySelector(".top__two");
const sectionThree = document.querySelector(".section__three__shadow");
const chesssH = document.querySelectorAll(".chesss ");
trialName.forEach((h3) =>
  h3.addEventListener("click", () => {
    trialName.forEach((h3) => h3.classList.remove("active"));
    h3.classList.add("active");
  })
);
topTwo.addEventListener("click", function () {
  topTwo.classList.toggle("active");
});
sectionThree.addEventListener("click", function () {
  sectionThree.classList.toggle("activate");
});
chesssH.forEach((h4) =>
  h4.addEventListener("click", () => {
    chesssH.forEach((h4) => h4.classList.remove("active"));
    h4.classList.add("active");
  })
);
