const NONE = "";
const NUM_1 = "1";
const NUM_2 = "2";
const NUM_4 = "4";
const NUM_8 = "8";
const NUM_16 = "16";
const NUM_32 = "32";
const NUM_64 = "64";
const NUM_128 = "128";
const NUM_256 = "256";
const NUM_512 = "512";
let gameBGM = new Audio('sounds/game.mp3');
let startSE = new Audio('sounds/startSE.mp3');
let gameoverBGM = new Audio('sounds/gameover.mp3');
let gameoverSE = new Audio('sounds/gameoverSE.mp3');
let finishSE = new Audio('sounds/finish.mp3');
const clearBallSE = () => {
return new Audio('sounds/clearBall.mp3');
};
const getPointButtonSE = () => {
return new Audio('sounds/getPointButton.mp3');
};
let nextBreakSE = new Audio('sounds/nextBreak.mp3');
let alertBreakSE = new Audio('sounds/alertBreak.mp3');
let breakBallSE = new Audio('sounds/breakBall.mp3');
const newBallSE = () => {
return new Audio('sounds/newBall.mp3');
};
const addPointTankSE = () => {
return new Audio('sounds/addPointTank.mp3');
};
const addPointTankTotalSE = () => {
return new Audio('sounds/addPointTankTotal.mp3');
};
const selectCellSE = () => {
return new Audio('sounds/selectCell.mp3');
};
let buttonUtilSE = new Audio('sounds/buttonUtil.mp3');
let maxPlayerHP;
let goalPoint;
let score;
let init;
let levelName;
let playerHP;
let selectIndex;
let lockOnIndex;
let brokeIndex;
let nextNumber;
let nextNumberChange;
let point;
let click;
let board;
let ballBroke;
function loading(){
if(localStorage.dbHiEasy === undefined){
localStorage.dbHiEasy = 0;
}
if(localStorage.dbHiNormal === undefined){
localStorage.dbHiNormal = 0;
}
if(localStorage.dbHiHard === undefined){
localStorage.dbHiHard = 0;
}
if(localStorage.dbHiHp300 === undefined){
localStorage.dbHiHp300 = 0;
}
if(localStorage.dbHiHp1 === undefined){
localStorage.dbHiHp1 = 0;
}
load.style.display = "none";
}
function initDisplay(hp,level,goal = "∞"){
buttonUtilSE.currentTime = 0;
buttonUtilSE.play();
startSE.currentTime = 0;
startSE.play();
gameBGM.currentTime = 0;
gameBGM.play();
gameBGM.loop = true;
selectDisplay.style.display = "none";
boardContainer.innerHTML = "";
init = true;
levelName = "dbHi" + level;
highScoreDisplay.innerText = "High Score:" + localStorage.getItem(levelName);
ballBroke = false;
pointTank.innerHTML = "";
score = 0;
maxPlayerHP = hp;
goalPoint = goal;
playerHP = maxPlayerHP;
selectIndex = -1;
lockOnIndex = -1;
brokeIndex = -1;
nextNumber = -1;
nextNumberChange = false;
point = 0;
click = 0;
board = [
NONE,NONE,NONE,NONE,NONE,
NONE,NONE,NONE,NONE,NONE,
NONE,NONE,NONE,NONE,NONE,
NONE,NONE,NONE,NONE,NONE,
NONE,NONE,NONE,NONE,NONE,
];
board.map((cell,index) => {
clickCell(index);
});
scoreDisplay.innerText = "Score:" + score;
pointDisplay.innerText = point + "/" + goalPoint;
nextNumberDisplay.innerHTML = "";
playerNowHP.style.width = ((playerHP / maxPlayerHP) * 100) + "%";
playerNowHPText.innerText = playerHP + "/" + maxPlayerHP;
createBoard();
gameDisplay.style.display = "block";
}
function createBoard(){
let flagNum4 = false;
let flagNum8 = false;
let flagNum16 = false;
let flagNum32 = false;
let flagNum64 = false;
let flagNum128 = false;
let flagNum256 = false;
let flagNum512 = false;
let table;
let plaidSe = false;

let nextBall;
if(nextNumberChange === true){
nextBall = document.createElement("div");
nextBall.className = "ball" + nextNumber;
nextBall.innerText = nextNumber;
nextBall.style.animation="newBall 0.2s ease-in 1";
if(init === false){
nextNumberDisplay.firstElementChild.remove();
}
nextNumberDisplay.appendChild(nextBall);
nextNumberChange = false;
}

if(init === true){
table = document.createElement("table");
table.id = "board";
}else {
table = document.getElementById("board");
}
let count = 0;
let tr;
board.map((cell,index) => {
count++;
switch(cell){
case NUM_4:
flagNum4 = true;
break;
case NUM_8:
flagNum8 = true;
break;
case NUM_16:
flagNum16 = true;
break;
case NUM_32:
flagNum32 = true;
break;
case NUM_64:
flagNum64 = true;
break;
case NUM_128:
flagNum128 = true;
break;
case NUM_256:
flagNum256 = true;
break;
case NUM_512:
flagNum512 = true;
break;
}
if(count === 1){
if(init === true){
tr = document.createElement("tr");
tr.className = "boardRow";
}else{
tr = table.getElementsByClassName("boardRow")[index / 5];
}
}
let td;
if(init === true){
td = document.createElement("td");
td.className = "boardCell";
td.addEventListener("click",() => {
clickCell(index);
});
}else{
td = tr.getElementsByClassName("boardCell")[count - 1];
}
let newBall;
if(init === true){
newBall = document.createElement("div");
} else {
newBall = td.firstElementChild;
}
if(cell !== NONE){
newBall.className = "ball" + cell;
}
if(init === false){
if(newBall.innerText === NONE && cell !== NONE){
let se = newBallSE();
se.currentTime = 0;
se.play();
newBall.style.animation="newBall 0.125s ease-in 1";
}else if(cell === NONE && newBall.innerText !== cell){
if(brokeIndex === index && ballBroke === true){
newBall.style.animation="breakBall 0.2s ease-in 1 forwards";
ballBroke = false;
} else {
let se = clearBallSE();
if(plaidSe !== true){
se.currentTime = 0;
se.play();
plaidSe = true;
}
newBall.style.animation="getBall 0.2s ease-in 1 forwards";
}
}
}
newBall.innerText = cell;
if(init === true){
td.appendChild(newBall);
}

if(index === selectIndex){
td.style.boxShadow = "0 0 3px 2px #f30";
}else{
if((selectIndex !== -1) && (board[selectIndex] === board[index]) && ((index === (selectIndex + 1) && ((selectIndex + 1) % 5 !==  0)) || (index === (selectIndex - 1) && ((index + 1) % 5 !== 0)) || index === (selectIndex + 5) || index === (selectIndex - 5))){
td.style.boxShadow = "0 0 3px 1px #05f";
}else{
td.style.boxShadow = "0 0 3px #5ff";
}
}
if(index === lockOnIndex){
if(click === 14){
td.style.animation="cellLockOn 0.3s ease-in infinite";
}else{
td.style.animation="cellLockOnAttention 0.6s ease-in infinite";
}
}
if(index === brokeIndex){
td.style.animation="cellLockOff 0.2s ease-in 1 forwards";
brokeIndex = -1;
}
if(init === true){
tr.appendChild(td);
}
if(count === 5){
if(init === true){
table.appendChild(tr);
}
count = 0;
}
});
let all1or2 = true;
if(flagNum4 === true) {
document.getElementsByClassName("buttonNum4")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum4")[0].style.boxShadow = "0 0 3px 1px #dd7";
}
if(flagNum8 === true) {
document.getElementsByClassName("buttonNum8")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum8")[0].style.boxShadow = "0 0 3px 1px #d77";
}
if(flagNum16 === true) {
document.getElementsByClassName("buttonNum16")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum16")[0].style.boxShadow = "0 0 3px 1px #d7d";
}
if(flagNum32 === true) {
document.getElementsByClassName("buttonNum32")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum32")[0].style.boxShadow = "0 0 3px 1px #d70";
}
if(flagNum64 === true) {
document.getElementsByClassName("buttonNum64")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum64")[0].style.boxShadow = "0 0 3px 1px #07d";
}
if(flagNum128 === true) {
document.getElementsByClassName("buttonNum128")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum128")[0].style.boxShadow = "0 0 3px 1px #0d7";
}
if(flagNum256 === true) {
document.getElementsByClassName("buttonNum256")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum256")[0].style.boxShadow = "0 0 3px 1px #d00";
}
if(flagNum512 === true) {
document.getElementsByClassName("buttonNum512")[0].style.boxShadow = "0 0 5px 3px #f30";
all1or2 = false;
} else {
document.getElementsByClassName("buttonNum512")[0].style.boxShadow = "0 0 3px 1px #d0d";
}
if(all1or2 === true){
let prevCell = null;
let notMove = true;
board.map((cell,index) => {
if(notMove === true){
if(prevCell !== null || cell === NONE){
if(prevCell === cell || cell === NONE){
notMove = false;
}
}
prevCell = cell;
}
});
if(notMove === true) {
getPoint(1);
getPoint(2);
}
}
if(init === true){
boardContainer.appendChild(table);
init = false;
}
}

function clickCell(index){
let flag = false;
if(board[index] === NONE){
flag = true;
nextNumberChange = true;
selectIndex = -1;
if(nextNumber !== -1){
board[index] = nextNumber;
}else {
let rand = Math.floor(Math.random() * 100) % 3;
if(rand === 0){
board[index] = NUM_1;
}else if(rand === 1){
board[index] = NUM_2;
}else{
board[index] = NUM_4;
}
}
let rand = Math.floor(Math.random() * 100) % 3;
if(rand === 0){
nextNumber = NUM_1;
}else if(rand === 1){
nextNumber = NUM_2;
}else{
nextNumber = NUM_4;
}
}else if(index !== selectIndex){
if(selectIndex === -1){
selectIndex = index;
let se = selectCellSE();
se.currentTime = 0;
se.play();
}else if((board[selectIndex] === board[index]) && ((index === (selectIndex + 1) && ((selectIndex + 1) % 5 !==  0)) || (index === (selectIndex - 1) && ((index + 1) % 5 !== 0)) || index === (selectIndex + 5) || index === (selectIndex - 5))){
flag = true;
switch(board[selectIndex]){
case NUM_1:
board[selectIndex] = NUM_2;
board[index] = NONE;
break;
case NUM_2:
board[selectIndex] = NUM_4;
board[index] = NONE;
break;
case NUM_4:
board[selectIndex] = NUM_8;
board[index] = NONE;
break;
case NUM_8:
board[selectIndex] = NUM_16;
board[index] = NONE;
break;
case NUM_16:
board[selectIndex] = NUM_32;
board[index] = NONE;
break;
case NUM_32:
board[selectIndex] = NUM_64;
board[index] = NONE;
break;
case NUM_64:
board[selectIndex] = NUM_128;
board[index] = NONE;
break;
case NUM_128:
board[selectIndex] = NUM_256;
board[index] = NONE;
break;
case NUM_256:
board[selectIndex] = NUM_512;
board[index] = NONE;
break;
case NUM_512:
board[selectIndex] = NONE;
board[index] = NONE;
addPointTank(1024,1);
break;
}
selectIndex = -1;
}else{
selectIndex = index;
let se = selectCellSE();
se.currentTime = 0;
se.play();
}
}else{
selectIndex = -1;
let se = selectCellSE();
se.currentTime = 0;
se.play();
}
if(init === false){
if(flag === true){
click++;
if(click === 10){
lockOnIndex = Math.floor(Math.random() * 100) % 25; 
alertBreakSE.currentTime = 0;
alertBreakSE.play();
}
if(click === 14){
nextBreakSE.currentTime = 0;
nextBreakSE.play();
}
if(click === 15){
breakBall();
brokeIndex = lockOnIndex;
lockOnIndex = -1;
click = 0;
}
}
createBoard();
}
}

function getPoint(num){
let count = 0;
board.map((cell,index) => {
if(cell === String(num)){
board[index] = NONE;
count++;
if(selectIndex === index){
selectIndex = -1;
}
}
});
if(count !== 0){
if(num !== 1 && num !== 2){
let se = getPointButtonSE();
se.currentTime = 0;
se.play();
}
addPointTank(num,count);
createBoard();
}
}

function breakBall(){
if(board[lockOnIndex] !== NONE){
ballBroke = true;
let damage = (10 - (Math.log(Number(board[lockOnIndex])) / Math.log(2))) + Number(board[lockOnIndex]);
playerHP -= damage;
if(playerHP <= 0) {
playerHP = 0;
gameOver();
}
board[lockOnIndex] = NONE;
breakBallSE.currentTime = 0;
breakBallSE.play();
playerNowHP.style.width = ((playerHP / maxPlayerHP) * 100) + "%";
playerNowHPText.innerText = playerHP + "/" + maxPlayerHP;
}
}

function addPointTank(num,count) {
for(let i = 0; i < count; i++){
let newPoint = document.createElement("div");
newPoint.className = "gotPoint " + "pointColor" + num;
let randTop = (Math.floor(Math.random() * 100) % 100) + 1;
let randLeft = (Math.floor(Math.random() * 100) % 100) + 1;
let size = (Math.log(num) / Math.log(2)) * 10;
if(size === 0){
size = 1;
}
newPoint.style.top = randTop + "%";
newPoint.style.left = randLeft + "%";
newPoint.style.width = size + "%";
newPoint.style.height = size + "%";
setTimeout(() => {
pointTank.appendChild(newPoint);
let pointText = document.createElement("div");
pointText.className = "pointText";
pointText.style.animation="getPointText 1s ease-in 1";
pointText.innerText = "+" + num;
pointTankContainer.appendChild(pointText);
let se = addPointTankSE();
se.currentTime = 0;
se.play();
setTimeout(() => {
pointText.remove();
},1000);
},(100 * (num === 2 ? i + (25 - count) : i)));
}
setTimeout(() => {
let pointText = document.createElement("div");
pointText.className = "pointSumText";
pointText.style.animation="getPointText 1.5s ease-in 1";
pointText.innerText = "+" + (num * count);
pointTankContainer.appendChild(pointText);
let se = addPointTankTotalSE();
se.currentTime = 0;
se.play();
setTimeout(() => {
pointText.remove();
},1500);
},(100 * (num === 2 ? 26 : count + 1)));
point += num * count;
if(num !== 1024 && num !== 1 && num !== 2){
score += (num * (Math.log(num) / Math.log(2))) * count;
}else if(num === 1024){
score += 50000;
}else{
score += 500;
}
scoreDisplay.innerText = "Score:" + score;
pointDisplay.innerText = point + "/" + goalPoint;
if(goalPoint !== "∞"){
if(point >= goalPoint){
let message = "FINISH!\n\nScore: " + score + "\nHP Bonus: " + (playerHP * 10) + "\nTotal: " + (score + (playerHP * 10));
score = score + (playerHP * 10);
if(score > Number(localStorage.getItem(levelName))){
localStorage.setItem(levelName,score);
message += "\n\nHigh Score!!!";
}
popup(message);
finishSE.currentTime = 0;
finishSE.play();
}
}
};
function popup(message){
if(message === ""){
popContainer.style.display = "none";
gameDisplay.style.display = "none";
selectDisplay.style.display = "block";
buttonUtilSE.currentTime = 0;
buttonUtilSE.play();
gameoverBGM.pause();
}else{
pop.innerText = message;
popContainer.style.display = "inline-flex";
gameBGM.pause();
}
}
function gameOver(){
gameoverSE.currentTime = 0;
gameoverSE.play();
if(goalPoint !== "∞"){
popup("GAMEOVER");
}else{
let message = "GAMEOVER\n\nScore: " + score;
if(score > Number(localStorage.getItem(levelName))){
localStorage.setItem(levelName,score);
message += "\n\nHigh Score!!!";
}
popup(message);
}
gameoverBGM.currentTime = 0;
gameoverBGM.play();
}