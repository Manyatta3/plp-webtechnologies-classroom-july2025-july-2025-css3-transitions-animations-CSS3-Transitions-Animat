/* --------Part 2: JavaScript Functions------- */

// Example 1: Function with parameters & return value
function calculateArea(width, height) {
  return width * height; // returns area
}

// Example usage:
console.log("Box area is:", calculateArea(100, 100));

// Example 2: Demonstrating scope
let globalMessage = "I am global!";

function showScopeExample() {
  let localMessage = "I am local!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}

showScopeExample();

/* -------Part 3: Combining CSS + JS------- */

const box = document.querySelector(".box");
const animateBoxBtn = document.getElementById("animateBoxBtn");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Function to toggle spin animation
function toggleSpin(element) {
  element.classList.toggle("spin");
}

// Trigger spin animation on button click
animateBoxBtn.addEventListener("click", () => {
  toggleSpin(box);
});

// Function to show modal
function showModal() {
  modal.style.display = "flex";
}

// Function to hide modal
function hideModal() {
  modal.style.display = "none";
}

// Event listeners for modal
toggleModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);
