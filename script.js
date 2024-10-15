// PART A: Change color of all buttons based on the clicked button
const colorButtons = document.querySelectorAll('.color-btn');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    colorButtons.forEach(btn => {
      btn.style.backgroundColor = color;
      btn.style.color = color === 'yellow' ? 'black' : 'white';
    });
  });
});

// PART B: Rotate colors and text among BTN1, BTN2, and BTN3
const rotateButtons = document.querySelectorAll('.rotate-btn');
const rotateButton = document.getElementById('rotate-btn');

rotateButton.addEventListener('click', () => {
  const buttonStates = Array.from(rotateButtons).map(btn => ({
    color: btn.style.backgroundColor,
    text: btn.textContent
  }));

  // Rotate states clockwise
  rotateButtons[0].style.backgroundColor = buttonStates[2].color;
  rotateButtons[0].textContent = buttonStates[2].text;

  rotateButtons[1].style.backgroundColor = buttonStates[0].color;
  rotateButtons[1].textContent = buttonStates[0].text;

  rotateButtons[2].style.backgroundColor = buttonStates[1].color;
  rotateButtons[2].textContent = buttonStates[1].text;

  // Adjust text color for yellow button
  rotateButtons.forEach(btn => {
    btn.style.color = btn.style.backgroundColor === 'yellow' ? 'black' : 'white';
  });
});
