// Selecte the element
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const showDistance = document.getElementById("distance");

// Global variable
let isDragging;
let selectedLine;

// Set the initial positions for line1 and line2
line1.style.top = "100px";
line2.style.top = "200px";

// when mouse is down start dragging
function startDragging(event) {
  isDragging = true;
  selectedLine = event.target;
}

// when mouse is up stop dragging
function stopDragging() {
  isDragging = false;
  selectedLine = null;
}

// Move the line as the mouse moves and display the distance
function dragLine(event) {
  if (!isDragging) return;

  // Get the container's position (top,left,right,bottom,height,width)
  const containerRect = document
    .querySelector(".container")
    .getBoundingClientRect();

  // console.log(containerRect);
  // console.log(event.clientY);

  // Calculate the new position for the line, keeping it within the container
  let newPosition = event.clientY - containerRect.top;
  newPosition = Math.max(0, Math.min(containerRect.height - 5, newPosition));

  // Move the selected line to the new position
  selectedLine.style.top = `${newPosition}px`;

  // Calculate the distance between the two lines
  const line1Position = parseInt(line1.style.top);
  const line2Position = parseInt(line2.style.top);
  const distance = Math.abs(line1Position - line2Position);

  // Show the distance
  showDistance.textContent = `Distance: ${distance}px`;
}

line1.addEventListener("mousedown", startDragging);
line2.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", dragLine);
document.addEventListener("mouseup", stopDragging);
