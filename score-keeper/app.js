// Selecting DOM elements
const p1Button = document.querySelector("#p1button"); // Player 1 button
const p2Button = document.querySelector("#p2button"); // Player 2 button
const p1Display = document.querySelector("#p1Display"); // Player 1 score display
const p2Display = document.querySelector("#p2Display"); // Player 2 score display
const winningScoreSelect = document.querySelector("#playto"); // Winning score select dropdown
const resetButton = document.querySelector("#reset"); // Reset button

// Initializing variables
let p1Score = 0; // Player 1 score
let p2Score = 0; // Player 2 score
let winningScore = 5; // Default winning score
let isGameover = false; // Flag to track if game is over

// Event listeners for player buttons
p1Button.addEventListener("click", () => {
  // Increment player 1 score if game is not over
  if (!isGameover) {
    p1Score += 1;
    // Check if player 1 reached winning score
    if (p1Score === winningScore) {
      isGameover = true; // Set game over flag
      // Apply styling to indicate winner and loser
      p1Display.classList.add("text-success");
      p2Display.classList.add("text-danger");
      // Disable buttons
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // Update player 1 score display
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  // Increment player 2 score if game is not over
  if (!isGameover) {
    p2Score += 1;
    // Check if player 2 reached winning score
    if (p2Score === winningScore) {
      isGameover = true; // Set game over flag
      // Apply styling to indicate winner and loser
      p2Display.classList.add("text-success");
      p1Display.classList.add("text-danger");
      // Disable buttons
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // Update player 2 score display
    p2Display.innerText = p2Score;
  }
});

// Event listener for changing winning score
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value); // Update winning score
  reset(); // Reset the game
});

// Event listener for reset button
resetButton.addEventListener("click", reset);

// Function to reset the game
function reset() {
  isGameover = false; // Reset game over flag
  p1Score = 0; // Reset player 1 score
  p2Score = 0; // Reset player 2 score
  // Reset score displays
  p1Display.innerText = 0;
  p2Display.innerText = 0;
  // Remove winner/loser styling
  p1Display.classList.remove("text-success", "text-danger");
  p2Display.classList.remove("text-success", "text-danger");
  // Enable buttons
  p1Button.disabled = false;
  p2Button.disabled = false;
}
