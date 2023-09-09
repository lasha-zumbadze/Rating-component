"use strict";
const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const btnContainer = document.querySelector(".rating-list");
const btns = document.querySelectorAll(".rating");
const submit = document.querySelector(".btn-submit");
const result = document.querySelector(".result");
let ratingValue;
let activeBtn;

btnContainer.addEventListener("click", function (e) {
  const btn = e.target;

  if (!btn.classList.contains("rating")) return;

  btns.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });

  if (!btn.classList.contains("active")) {
    btn.classList.add("active");
    activeBtn = true;
    ratingValue = btn.textContent;
    
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (!activeBtn) return;

  mainContainer.style.transform = "rotateY(90deg)";
  result.insertAdjacentHTML(
      "afterbegin",
      `<p>You selected ${ratingValue} out of 5</p>`
    );

  setTimeout(() => {
    thanksContainer.style.transform = "rotateY(0deg)";
  }, 900);
});
