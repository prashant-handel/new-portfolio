let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let isgameover = false;
let turn = "X";

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2,0,0,0],
    [3, 4, 5,0,10,0],
    [6, 7, 8,0,20,0],
    [0, 3, 6,-10,10,90],
    [1, 4, 7,0,10,90],
    [2, 5, 8,10,10,90],
    [0, 4, 8,0,10,45],
    [2, 4, 6,0,10,135],
  ];

  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      isgameover = true;
      document.getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform =
        `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width = "25vw";
        
    }
  });
};

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", (e) => {
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
    document.querySelector(".line").style.width = "0vw";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.getElementsByTagName("img")[0].style.width = "0px";
});
function togglePlaying() {
  music.play();
}
function togglePause() {
  music.pause();
}

let musicOn = document.getElementById("musicOn");
musicOn.addEventListener("click", () => {
  togglePlaying();
});

let musicOff = document.getElementById("musicOff");
musicOff.addEventListener("click", () => {
  togglePause();
});
