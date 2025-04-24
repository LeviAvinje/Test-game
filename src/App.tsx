
import './App.css'


function App() {
const gameBoard = document.querySelector("#gameBoard");
const ctx = (gameBoard as HTMLCanvasElement | null)?.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard?.width;
const gameHeight = gameBoard?.height;
const boardBackground = "white";
const snakeColor ="lightgreen";
const snakeBorder ="black";
const foodColor ="red";
const unitSize ="25px";
let running = false;
let xVelocity = unitSize;
let yVelocity = 0
let foodX;
let foody;
let score = 0
let snake = [
  {x:unitSize * 4, y:0},
  {x:unitSize * 3, y:0},
  {x:unitSize * 2, y:0},
  {x:unitSize, y:0},
  {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn?.addEventListener("click", resetGame);

gameStart();
creatFood();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function creatFood(){
  function randomFood(min,max) {
    const randNum = Math.round((Math.random() * (max - min) + min)/ unitSize) * unitSize;
    return randNum
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foody = randomFood(0, gameHeight - unitSize);
  
};
};
function drawFood(){
  
};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};



  return (
    <>
      <div id="gameContainer">
        <canvas id="gameBoard" width="500" height="500"></canvas>
        <div id="scoreText">0</div>
        <button id="resetBtn">Reset</button>
      </div>
    </>
  )
}

export default App


12:48