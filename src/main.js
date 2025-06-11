const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resetBtn = document.getElementById('reset-btn');
const resultMessage = document.getElementById('result-message');
const attemptsCount = document.getElementById('attempts-count');

let secretNumber;
let attempts;

function initializeGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsCount.textContent = attempts;
  resultMessage.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
}

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    resultMessage.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    return;
  }

  attempts++;
  attemptsCount.textContent = attempts;

  if (guess === secretNumber) {
    resultMessage.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intento${attempts > 1 ? 's' : ''}.`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (guess < secretNumber) {
    resultMessage.textContent = 'El número es más alto.';
  } else {
    resultMessage.textContent = 'El número es más bajo.';
  }
}

guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', initializeGame);

// Iniciar juego al cargar la página
initializeGame();
