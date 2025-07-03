// Array of gardening tips
const tips = [
  "Water your plants early in the morning to reduce evaporation.",
  "Use coffee grounds in compost to add nitrogen.",
  "Pinch off dead flowers to encourage new blooms.",
  "Rotate your crops each season to keep soil healthy.",
  "Add mulch around plants to conserve moisture and suppress weeds."
];

// Grab the button and display element
const tipButton = document.getElementById("tipButton");
const tipDisplay = document.getElementById("tipDisplay");

// When button is clicked, choose a random tip and show it
tipButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipDisplay.textContent = tips[randomIndex];
  
  // Optional: add a little fade-in effect
  tipDisplay.style.opacity = 0;
  setTimeout(() => {
    tipDisplay.style.transition = "opacity 0.5s";
    tipDisplay.style.opacity = 1;
  }, 10);
});
