//Declare score variables

let userScore = 0;
let aiScore = 0;

//Declare DOM variables

const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const smallUserWord = 'user'.fontsize(3).sup();
const smallAiWord = 'ai'.fontsize(3).sup();

//Get computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//Convert letters to readable
function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

//Declare win function
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallAiWord} You win.`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}
//Declare lose function
function lose(userChoice, computerChoice) {
    aiScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallAiWord} You lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}
//Declare draw function
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallAiWord} It's a draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

//Add game function and outcome scenarios
function game(userChoice) {
   const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        default: draw(userChoice, computerChoice);
            break;
    }
}



//Add event listeners to buttons
function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        game('s');
    })

}

main();
