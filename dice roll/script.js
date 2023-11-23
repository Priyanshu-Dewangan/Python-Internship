let rolling = false; // Flag to prevent multiple rolls

function rollDice() {
    if (rolling) return; // Don't allow multiple rolls simultaneously

    const diceImage = document.getElementById('diceImage');
    const resultElement = document.getElementById('result');
    const maxRolls = 15; // Adjust as needed, controls how many times the images change
    let rolls = 0;

    rolling = true;

    const rollSound = new Audio('roll_sound.mp3'); // Get the audio element
    


    function roll() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const imagePath = `dice-${randomNumber}.png`;
        diceImage.src = imagePath;

        rolls++;
        if (rolls < maxRolls) {
            setTimeout(roll, 100); // Adjust the duration of each "roll" as needed
        } else {
            rolling = false;
            resultElement.textContent= `You Landed on ${randomNumber}`; 
            diceImage.style.animation = ''; 
        }
    }

    diceImage.style.animation = 'rollAnimation 1s linear infinite';
    roll();
    rollSound.play();
   
}

