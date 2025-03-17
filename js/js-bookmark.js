document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.querySelector(".answer-button");

  //correct answer button
  const correctAnswer = document.querySelector("[data-correct='true']");

  revealButton.addEventListener("click", function () {
    if (correctAnswer.style.backgroundColor === "pink") {
      correctAnswer.style.backgroundColor = ""; // resetting highlight
    } else {
      correctAnswer.style.backgroundColor = "pink"; // highlight correct answer
    }
  });
});

//Card 2
//Show/hide answer

const answerButton = document.querySelector('[js-data="fearless-button"]');
const hiddenAnswer = document.querySelector('[js-data="hidden-answer"]');

answerButton.addEventListener("click", () => {
  console.log("click");
  hiddenAnswer.hidden = !hiddenAnswer.hidden;
  if (hiddenAnswer.hidden) {
    answerButton.textContent = "Reveal the answer";
  } else {
    answerButton.textContent = "Hide the answer";
  }
});

//bookmark

const cardBookmarkButton = document.querySelector(
  '[js-data="card-bookmark-button"]'
);
const cardBookmarkIcon = document.querySelector(
  '[js-data="card-bookmark-icon"]'
);
let isFilled = true;

cardBookmarkButton.addEventListener("click", () => {
  if (isFilled) {
    cardBookmarkIcon.setAttribute("fill", "none");
    isFilled = false;
  } else {
    cardBookmarkIcon.setAttribute("fill", "white");
    isFilled = true;
  }
});
