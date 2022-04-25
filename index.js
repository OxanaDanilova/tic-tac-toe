//game logic
//game state // 0 - Spieler 1 am Zug, 1 - Spieler 2 am Zug
let gameState = 0;
const fieldsArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const onNewGame = () => {
  console.log("new game button clicked");
};

const drawField = () => {
  fieldsArr.forEach((el, index) => {
    const cell = document.getElementById(index + 1);
    cell.innerHTML = el === 1 ? "X" : el === 2 ? "O" : "";
  });
};

const onCellClick = (e) => {
  console.log("Cell clicked", e.target.id);
  const id = e.target.id - 1;
  if (gameState > 1 || fieldsArr[id] !== 0) return;

  fieldsArr[id] = gameState + 1;
  gameState = gameState === 0 ? 1 : 0;
  drawField();
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  const newGameBtn = document.getElementById("new-game");
  newGameBtn.disabled = gameState > 1 ? false : true;
  console.log(gameState);
  newGameBtn.addEventListener("click", onNewGame);
});

const cells = document.querySelectorAll(".field-container>div");
console.log(cells);
cells.forEach((cell) => cell.addEventListener("click", onCellClick));
