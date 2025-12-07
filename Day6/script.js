const guessbutton = document.querySelector('.js_buttonGuess'); 

guessbutton.addEventListener('click', () => {
    const computer = Math.floor(Math.random() * 10) + 1 ;
    const guess= +prompt('guess Number', 0)
    
    if (guess === computer) {
        document.querySelector('.js_guessDisplay').innerHTML = alert(`Answer: ${computer}
Correct... 'you win' 🎉🎉🎉`)
    }else {
        document.querySelector('.js_guessDisplay').innerHTML =alert(`Answer: ${computer}
Wrong! 'Try again' 🤣🤣🤣`)
};
});