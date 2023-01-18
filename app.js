const game = () => {
    let pScore = 0;
    let cScore = 0;

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

    // Call inner functions
    startGame();
    updateScore();
};

// Start game function
game();