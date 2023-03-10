const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        // Creating variables inside to restrain
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut'); // Fade out intro screen when we play
            match.classList.add('fadeIn');
        });
    };

    // Play match
    const playMatch = () => {
        // Need to get player's options
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        
        // Computer's options should be randomly generated
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option => {
            option.addEventListener('click', function(){ //Use a normal function to use 'this' option clicked
            //console.log(this);
                const computerNumber = Math.floor(Math.random() * 3);
                //console.log(computerNumber);
                const computerChoice = computerOptions[computerNumber];
                //console.log(computerChoice); // random computer options  
                // We call compareHands() here  
                
                setTimeout( () => {
                    compareHands(this.textContent, computerChoice);

                    // Update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                // Set timeout for animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Comparison function, feed choice we made to compare computer choice
    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');
        
        // Check for tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return; //end function
        };

        // Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You win!';
                pScore++;
                updateScore();
                return;
            } else  { // computer has paper
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        };

        // Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            } else  { // computer has rock
                winner.textContent = 'You win!';
                pScore++;
                updateScore();
                return;
            }
        };

        // Check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            } else  { // computer has paper
                winner.textContent = 'You win!';
                pScore++;
                updateScore();
                return;
            }
        };
    };

    // Call inner functions
    startGame();
    playMatch();
};

// Start game function
game();