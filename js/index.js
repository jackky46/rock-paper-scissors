let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const result_desc = document.querySelector(".description p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const restart_button = document.getElementById("button");



function getComputerChoice() {
    const choices = ['✊', '✋', '✌️'];
    const randomNumber = Math.floor(Math.random() * 3) ;
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You " + userChoice + " Computer " + computerChoice;
    result_desc.innerHTML = userChoice + " beats " + computerChoice + ". You Win!";
}

function lose (userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You " + userChoice + " Computer " + computerChoice;
    result_desc.innerHTML = computerChoice + " beats " + userChoice + ". You Lost!";
}

function draw (userChoice, computerChoice) {
    result_div.innerHTML = "You " + userChoice + " Computer " + computerChoice;
    result_desc.innerHTML = userChoice + " Ties With " + computerChoice + ". You Tie!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "✊✌️":
        case "✋✊":
        case "✌️✋":
            win(userChoice, computerChoice);
        break;

        case "✊✋":
        case "✋✌️":
        case "✌️✊":
            lose(userChoice, computerChoice);
        break;

        case "✊✊":
        case "✋✋":
        case "✌️✌️":
            draw(userChoice, computerChoice);
        break;
    }
}

function refresh() {
    refresh = location.reload();
}
restart_button.addEventListener("click", refresh, false);

function main() {
    rock_div.addEventListener('click', function() {
        game("✊");
    });
    paper_div.addEventListener('click', function() {
        game("✋");
    });
    scissors_div.addEventListener('click', function() {
        game("✌️");
    });
}

main();