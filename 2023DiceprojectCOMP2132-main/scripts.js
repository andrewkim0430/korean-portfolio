// Global variables to keep track of game state
let playerRoundScore = 0;
let playerTotalScore = 0;
let computerRoundScore = 0;
let computerTotalScore = 0;
let roundNumber = 1;
let isGameEnded = false;

// Function to simulate rolling a die
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate rolling the dice for the player and computer
function rollDice() {
  const playerDice1 = rollDie();
  const playerDice2 = rollDie();
  const computerDice1 = rollDie();
  const computerDice2 = rollDie();
  return { playerDice1, playerDice2, computerDice1, computerDice2 };
}

// Function to calculate the round score based on dice values
function calculateRoundScore(dice1, dice2) {
  if (dice1 === 1 || dice2 === 1) {
    return 0;
  } else if (dice1 === dice2) {
    return (dice1 + dice2) * 2;
  } else {
    return dice1 + dice2;
  }
}

// Function to update the display with current game state
function updateDisplay() {
  document.getElementById('player-dice-1').textContent = playerDice1;
  document.getElementById('player-dice-2').textContent = playerDice2;
  document.getElementById('computer-dice-1').textContent = computerDice1;
  document.getElementById('computer-dice-2').textContent = computerDice2;
  document.getElementById('player-round-score').textContent = playerRoundScore;
  document.getElementById('player-total-score').textContent = playerTotalScore;
  document.getElementById('computer-round-score').textContent = computerRoundScore;
  document.getElementById('computer-total-score').textContent = computerTotalScore;
  document.getElementById('round-number').textContent = roundNumber;
}

// Function to handle the roll button click
function handleRollButtonClick() {
  if (isGameEnded) {
    return; // Prevent further rolls after the game ends
  }

  // Simulate rolling dice for the player and computer
  const { playerDice1, playerDice2, computerDice1, computerDice2 } = rollDice();

  // Calculate round scores for the player and computer
  playerRoundScore = calculateRoundScore(playerDice1, playerDice2);
  computerRoundScore = calculateRoundScore(computerDice1, computerDice2);

  // Update total scores
  playerTotalScore += playerRoundScore;
  computerTotalScore += computerRoundScore;

  // Update the display
  updateDisplay();

  // Check if the game has ended after three rounds
  if (roundNumber === 3) {
    isGameEnded = true;
    let winner;
    if (playerTotalScore > computerTotalScore) {
      winner = 'Player';
    } else if (playerTotalScore < computerTotalScore) {
      winner = 'Computer';
    } else {
      winner = 'Tie';
    }
    document.getElementById('winner-display').textContent = winner + ' wins!';
  } else {
    roundNumber++;
  }
}

// Function to handle the reset button click
function handleResetButtonClick() {
  // Reset all game state variables
  playerRoundScore = 0;
  playerTotalScore = 0;
  computerRoundScore = 0;
  computerTotalScore = 0;
  roundNumber = 1;
  isGameEnded = false;

  // Reset winner display
  document.getElementById('winner-display').textContent = '-';

  // Update the display
  updateDisplay();
}

// Add event listeners to the roll button and reset button
document.getElementById('roll-button').addEventListener('click', handleRollButtonClick);
document.getElementById('reset-button').addEventListener('click', handleResetButtonClick);

// Initial display update
updateDisplay();

// Function to update player information in the display
function updatePlayerInfo() {
  document.getElementById('player-round-score').textContent = playerRoundScore;
  document.getElementById('player-total-score').textContent = playerTotalScore;
}

// Function to update computer information in the display
function updateComputerInfo() {
  document.getElementById('computer-round-score').textContent = computerRoundScore;
  document.getElementById('computer-total-score').textContent = computerTotalScore;
}

// Function to handle the roll button click
function handleRollButtonClick() {
  if (isGameEnded) {
    return; // Prevent further rolls after the game ends
  }

  // Simulate rolling dice for the player and computer
  const { playerDice1, playerDice2, computerDice1, computerDice2 } = rollDice();

  // Calculate round scores for the player and computer
  playerRoundScore = calculateRoundScore(playerDice1, playerDice2);
  computerRoundScore = calculateRoundScore(computerDice1, computerDice2);

  // Update total scores
  playerTotalScore += playerRoundScore;
  computerTotalScore += computerRoundScore;

  // Update the display for player and computer
  updatePlayerInfo();
  updateComputerInfo();

  // Check if the game has ended after three rounds
  if (roundNumber === 3) {
    isGameEnded = true;
    let winner;
    if (playerTotalScore > computerTotalScore) {
      winner = 'Player';
    } else if (playerTotalScore < computerTotalScore) {
      winner = 'Computer';
    } else {
      winner = 'Tie';
    }
    document.getElementById('winner-display').textContent = winner + ' wins!';
  } else {
    roundNumber++;
    document.getElementById('round-number').textContent = roundNumber;
  }
}

// Function to handle the reset button click
function handleResetButtonClick() {
  // Reset all game state variables
  playerRoundScore = 0;
  playerTotalScore = 0;
  computerRoundScore = 0;
  computerTotalScore = 0;
  roundNumber = 1;
  isGameEnded = false;

  // Reset winner display
  document.getElementById('winner-display').textContent = '-';

  // Update the display for player and computer
  updatePlayerInfo();
  updateComputerInfo();

  // Reset round number display
  document.getElementById('round-number').textContent = roundNumber;
}

// ... (previous code)

// Add event listeners to the roll button and reset button
document.getElementById('roll-button').addEventListener('click', handleRollButtonClick);
document.getElementById('reset-button').addEventListener('click', handleResetButtonClick);

// Initial display update
updatePlayerInfo();
updateComputerInfo();

// Function to update the dice images based on the rolled values
function updateDiceImages(playerDice1, playerDice2, computerDice1, computerDice2) {
  document.getElementById('player-dice-1').style.backgroundImage = `url('/projectdice/images.asdadas${playerDice1}.png')`;
  document.getElementById('player-dice-2').style.backgroundImage = `url('/projectdice/images${playerDice2}.png')`;
  document.getElementById('computer-dice-1').style.backgroundImage = `url('/projectdice/images${computerDice1}.png')`;
  document.getElementById('computer-dice-2').style.backgroundImage = `url('/projectdice/images${computerDice2}.png')`;
}

// Function to handle the roll button click
function handleRollButtonClick() {
  if (isGameEnded) {
    return; // Prevent further rolls after the game ends
  }

  // Simulate rolling dice for the player and computer
  const { playerDice1, playerDice2, computerDice1, computerDice2 } = rollDice();

  // Calculate round scores for the player and computer
  playerRoundScore = calculateRoundScore(playerDice1, playerDice2);
  computerRoundScore = calculateRoundScore(computerDice1, computerDice2);

  // Update total scores
  playerTotalScore += playerRoundScore;
  computerTotalScore += computerRoundScore;

  // Update the display for player and computer
  updatePlayerInfo();
  updateComputerInfo();

  // Update the dice images
  updateDiceImages(playerDice1, playerDice2, computerDice1, computerDice2);

  // Check if the game has ended after three rounds
  if (roundNumber === 3) {
    isGameEnded = true;
    let winner;
    if (playerTotalScore > computerTotalScore) {
      winner = 'Player';
    } else if (playerTotalScore < computerTotalScore) {
      winner = 'Computer';
    } else {
      winner = 'Tie';
    }
    document.getElementById('winner-display').textContent = winner + ' wins!';
  } else {
    roundNumber++;
    document.getElementById('round-number').textContent = roundNumber;
  }
}

// Assuming the imagePath variable holds the relative path to the image
const imagePath = '/projectdice/images/asdadas.png';

// Create a new image element
const imageElement = new Image();

// Set the src attribute of the image element to the relative path
imageElement.src = imagePath;

// Add the image element to the DOM (e.g., inside a container div with an id "image-container")
document.getElementById('image-container').appendChild(imageElement);

function calculateTotalPrice(itemPrice, quantity) {
  // Calculate the total price
  const totalPrice = itemPrice * quantity;

  // Apply a discount if quantity is greater than 10
  const discountPercentage = quantity > 10 ? 0.1 : 0;
  const discountedPrice = totalPrice - totalPrice * discountPercentage;

  return discountedPrice;
}

// Function to update the dice images based on the rolled values
function updateDiceImages(playerDice1, playerDice2, computerDice1, computerDice2) {
  const diceElements = document.querySelectorAll('.dice');

  // Hide the dice elements with opacity 0
  diceElements.forEach((dice) => dice.classList.remove('show'));

  setTimeout(() => {
    // Set the new dice images
    document.getElementById('player-dice-1').style.backgroundImage = `url('/project/images/asdadas${playerDice1}.png')`;
    document.getElementById('player-dice-2').style.backgroundImage = `url('/project/images/project/images/1194703-200${playerDice2}.png')`;
    document.getElementById('computer-dice-1').style.backgroundImage = `url('/images/dice/dice${computerDice1}.png')`;
    document.getElementById('computer-dice-2').style.backgroundImage = `url('/images/dice/dice${computerDice2}.png')`;

    // Show the dice elements with a slight delay for the fade-in effect
    diceElements.forEach((dice) => dice.classList.add('show'));
  }, 100); // Delay the update to give time for the hide animation
}
// Function to update the dice images based on the rolled values
function updateDiceImages(playerDice1, playerDice2, computerDice1, computerDice2) {
  const diceElements = $('.dice');

  // Hide the dice elements with opacity 0
  diceElements.removeClass('show');

  setTimeout(() => {
    // Set the new dice images
    $('#player-dice-1').css('background-image', `url('/projectdice/images/asdadas${playerDice1}.png')`);
    $('#player-dice-2').css('background-image', `url('/projectdice/images/project/images/1194703-200${playerDice2}.png')`);
    $('#computer-dice-1').css('background-image', `url('/projectdice/images/557px-Dice-3-b${computerDice1}.png')`);
    $('#computer-dice-2').css('background-image', `url('/projectdice/images/dice-312623_640${computerDice2}.png')`);

    // Show the dice elements with a slight delay for the fade-in effect
    diceElements.addClass('show');
  }, 100); // Delay the update to give time for the hide animation
}
$(document).ready(function() {
  $('#roll-button').click(handleRollButtonClick);
  $('#reset-button').click(handleResetButtonClick);
});

