let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const computerpara = document.querySelector("#computer-score");
const drawgame = () => {
  msg.innerText = "Draw";
  msg.style.background = "rgb(43, 43, 43)";
};
const showWinner = (userwin) => {
  if (userwin) {
    msg.innerText = "You Win !!";
    msg.style.background = "green";
    userscore++;
    userpara.innerText = userscore;
  } else {
    msg.innerText = "You lose";
    msg.style.background = "red";
    computerscore++;
    computerpara.innerText = computerscore;
  }
};
const playgame = (userchoice) => {
  const compchoice = gencompchoice();

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};
const gencompchoice = () => {
  const option = ["rock", "paper", "scissors"];
  const rankindx = Math.floor(Math.random() * 3);
  return option[rankindx];
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});
