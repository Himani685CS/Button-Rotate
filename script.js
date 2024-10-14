// PART A: Change Color of the Second Row Buttons
const colorButtons = document.querySelectorAll('#part-a .fixed-btn');
const rowButtons = document.querySelectorAll('#color-buttons button');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.style.backgroundColor;
    rowButtons.forEach(btn => btn.style.backgroundColor = color);
  });
});

// PART B: Rotate Colors and Text of the Rotating Buttons
const rotatingButtons = document.querySelectorAll('#rotating-buttons button');
const rotateButton = document.getElementById('rotate-btn');

rotateButton.addEventListener('click', () => {
  // Store current colors and text in an array
  const buttonStates = Array.from(rotatingButtons).map(button => ({
    color: button.style.backgroundColor,
    text: button.textContent
  }));

  // Rotate the colors and text clockwise
  rotatingButtons[0].style.backgroundColor = buttonStates[2].color;
  rotatingButtons[0].textContent = buttonStates[2].text;

  rotatingButtons[1].style.backgroundColor = buttonStates[0].color;
  rotatingButtons[1].textContent = buttonStates[0].text;

  rotatingButtons[2].style.backgroundColor = buttonStates[1].color;
  rotatingButtons[2].textContent = buttonStates[1].text;
});