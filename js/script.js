const quoteId = document.querySelector(".quote-id");
const quote = document.querySelector(".quote");
const button = document.querySelector("button");
const fadeInElements = document.querySelectorAll(".fade-in");

// DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  fadeInElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });
});

// Function to trigger animation
const triggerAnimation = () => {
  fadeInElements.forEach((element) => {
    element.classList.remove("fade-in");
    void element.offsetWidth; // Force reflow to restart animation
    element.classList.add("fade-in");
  });
};

// Function to fetch advice
const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data.slip);
  quoteId.textContent = `#${data.slip.id}`;
  quote.textContent = data.slip.advice;
};

button.addEventListener("click", () => {
  getAdvice();
  triggerAnimation();
});
