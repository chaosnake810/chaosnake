function loading(){
if(localStorage.hiscoreBD==undefined){
localStorage.hiscoreBD="0.0";
}
highscore.innerHTML="HI-SCORE:" + localStorage.hiscoreBD + "m";
var images=[playerImg,player2Img,obstacleImg,moveLeftObstacleImg,moveRightObstacleImg,background1,background2];
 for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
  }
stageBGM.load();
gameOverBGM.load();
moveSE.load();
gameOverSE.load();
errorSE.load();
wallSE.load();
startSE.load();
highScoreSE.load();
dropSE.load();
load.style.display="none";
}

function shuffleArray(array){
for(shu = 0;shu<6;shu++){
array.sort(()=> Math.random() - 0.5);
}
}
var startFlag=false;
var meter=0;
var place = 100;
var count;
var dropInterval;
var stageBGM = new Audio("sounds/stage.mp3");
var gameOverBGM = new Audio("sounds/gameover.mp3");
var moveSE = new Audio("sounds/move.aac");
var gameOverSE = new Audio("sounds/gameoverSE.mp3");
var errorSE = new Audio("sounds/error.mp3");
var wallSE = new Audio("sounds/wall.mp3");
var startSE = new Audio("sounds/start.mp3");
var highScoreSE = new Audio("sounds/highscore.mp3");
var dropSE = new Audio("sounds/drop.mp3");
var playerImg="images/player.png";
var player2Img="images/player2.png";
var obstacleImg = "images/obstacle.png";
var moveLeftObstacleImg = "images/move_left_obstacle.png";
var moveRightObstacleImg = "images/move_right_obstacle.png";
var background1 = "images/background1.png";
var background2 = "images/background2.png";
var stage = [
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0]
];

function start(){
startSE.currentTime=0;
startSE.play();
dropSE.currentTime=0;
dropSE.play();
cover.style.display="none";
display.style.background="#000";
player.style.display="none";
floor.style.display="none";
var timeOut = setTimeout('changeUnderground()',1000);
}
function changeUnderground(){
display.style.background="url(" + background2 +")";
player.style.display="block";
player.style.bottom="300px";
count = 0;
startFlag=true;
stageBGM.currentTime = 0;
stageBGM.play();
stageBGM.loop = true;
dropInterval = setInterval('droping()',125);
}
function droping(){
meter += 1.5;
score.innerHTML="SCORE:"+ meter.toFixed(1) + "m";
if(count%2!=0){
player.setAttribute("src",player2Img);
}else{
player.setAttribute("src",playerImg);
}
stage.shift();
if(count == 3){
count=0;
var pushArray = [];
var obstacleCount = 0;
for(i = 0;i<12;i++){
if(i != 11){
if(obstacleCount != 6){
var randomArray = [0,0,0,0,1,2,4];
if(obstacleCount==4){
randomArray = [0,0,1];
}
shuffleArray(randomArray);
pushArray.push(randomArray[0]);
if(randomArray[0]==2){
pushArray.push(3);
obstacleCount+=2;
i++;
}else if(randomArray[0]==4){
pushArray.push(5);
obstacleCount+=2;
i++;
}else if(randomArray[0]==1){
obstacleCount++;
}
}else{
pushArray.push(0);
}
}else{
if(obstacleCount != 5){
var randomArray = [0,0,1];
shuffleArray(randomArray);
pushArray.push(randomArray[0]);
if(randomArray[0]==1){
obstacleCount++;
}
}else{
pushArray.push(0);
}
}
}
stage.push(pushArray);
}else{
count++;
stage.push([0,0,0,0,0,0,0,0,0,0,0,0]);
}
obstacles.remove();
display.insertAdjacentHTML('afterbegin','<div id="obstacles"></div>');
for(i = 0;i < stage.length;i++){
for(j = 0;j < stage[i].length;j++){
if(stage[i][j]==1){
obstacles.insertAdjacentHTML('afterbegin','<img src="' + obstacleImg + '"class="obstacle" style="top:' + 
i * 20 +'px;left:'+ j * 20 +'px">');
}else if((stage[i][j]==2 && i > 1) || (stage[i][j]==3 && i <= 1)){
obstacles.insertAdjacentHTML('afterbegin','<img src="' + moveRightObstacleImg + '"class="obstacle" style="top:' + 
i * 20 +'px;left:'+ j * 20 +'px">');
}else if((stage[i][j]==4 && i <= 1) || (stage[i][j]==5 && i > 1)){
obstacles.insertAdjacentHTML('afterbegin','<img src="' + moveLeftObstacleImg + '"class="obstacle" style="top:' + 
i * 20 +'px;left:'+ j * 20 +'px">');
}
}
}
if(stage[1][place/20]==1 || stage[1][place/20]==3 || stage[1][place/20]==4){
gameOver();
}
}
function left(){
if(startFlag){
player.style.transform="rotateY(180deg)";
if(place != 0){
place -= 20;
player.style.left = place + "px";
moveSE.currentTime=0;
moveSE.play();
}else{
wallSE.currentTime=0;
wallSE.play();
}
if(stage[1][place/20]==1){
gameOver();
}
}else{
errorSE.currentTime=0;
errorSE.play();
}
}
function right(){
if(startFlag){
player.style.transform="rotateY(0deg)";
if(place != 220){
place += 20;
player.style.left = place + "px";
moveSE.currentTime=0;
moveSE.play();
}else{
wallSE.currentTime=0;
wallSE.play();
}
if(stage[1][place/20]==1 || stage[1][place/20]==3 || stage[1][place/20]==4){
gameOver();
}
}else{
errorSE.currentTime=0;
errorSE.play();
}
}
function gameOver(){
gameOverSE.currentTime=0;
gameOverSE.play();
stageBGM.pause();
gameOverBGM.currentTime = 0;
gameOverBGM.play();
gameOverBGM.loop = true;
clearInterval(dropInterval);
startFlag=false;
player.style.display="none";
document.getElementById('start').style.display="none";
gameover.style.display="block";
cover.style.display="block";
if((meter.toFixed(1) * 10) > (Number(localStorage.hiscoreBD).toFixed(1) * 10)){
localStorage.hiscoreBD = String(meter.toFixed(1));
highscore.innerHTML="HI-SCORE:" + localStorage.hiscoreBD + "m";
pop("NEW RECORD!!");
highScoreSE.currentTime=0;
highScoreSE.play();
}
}
function restart(){
startSE.currentTime=0;
startSE.play();
gameOverBGM.pause();
meter=0;
player.style.display="block";
player.style.bottom="20px";
place = 100;
player.style.left="100px";
player.style.transform="rotateY(0deg)";
player.setAttribute("src",playerImg);
display.style.background="url(" + background1 +")";
floor.style.display="block";
gameover.style.display="none";
document.getElementById("start").style.display="block";
obstacles.remove();
display.insertAdjacentHTML('afterbegin','<div id="obstacles"></div>');
stage = [
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0]
];
}
function pop(message){
popup.style.display="block";
popMessage.innerHTML=message;
}
function ok(){
startSE.currentTime=0;
startSE.play();
popup.style.display="none";
}