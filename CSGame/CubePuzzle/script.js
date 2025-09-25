let xyz = false;
var rotatese = new Audio('sounds/rotatese.m4a');
let flag = false;
let ti;
let same;
let t;
let minute;
let second;
var lock = false;
var start = true;
var  rotate = ["F()","Fd()","B()","Bd()","U()","Ud()","D()","Dd()","R()","Rd()","L()","Ld()","M()","Md()","E()","Ed()","S()","Sd()"];
var Front = ['','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>','<span class="white">　</span>'];
var Back = ['','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>','<span class="yellow">　</span>'];
var Up = ['','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>','<span class="red">　</span>'];
var Down = ['','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>','<span class="orange">　</span>'];
var Right = ['','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>','<span class="lime">　</span>'];
var Left = ['','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>','<span class="blue">　</span>'];
window.onload=function(){
showCube();
rotatese.load();
load.style.display="none";
}

function showCube(){
cube.innerHTML="<span id=corner_up_left>" + Front[1] + "</span><span id=edge_up>" + Front[2] + "</span><span id=corner_up_right>" + Front[3] + "</span><br><span id=edge_left>" + Front[4] + "</span><span id=center>" + Front[5] + "</span><span id=edge_right>" + Front[6] + "</span><br><span id=corner_down_left>" + Front[7] + "</span><span id=edge_down>" + Front[8] + "</span><span id=corner_down_right>" + Front[9] + "</span>";
corner_up_left.firstElementChild.style.borderTopColor=Up[7].split('"')[1];
corner_up_left.firstElementChild.style.borderLeftColor=Left[3].split('"')[1];
edge_up.firstElementChild.style.borderTopColor=Up[8].split('"')[1];
corner_up_right.firstElementChild.style.borderTopColor=Up[9].split('"')[1];
corner_up_right.firstElementChild.style.borderRightColor=Right[1].split('"')[1];
edge_left.firstElementChild.style.borderLeftColor=Left[6].split('"')[1];
edge_right.firstElementChild.style.borderRightColor=Right[4].split('"')[1];
corner_down_left.firstElementChild.style.borderBottomColor=Down[1].split('"')[1];
corner_down_left.firstElementChild.style.borderLeftColor=Left[9].split('"')[1];
edge_down.firstElementChild.style.borderBottomColor=Down[2].split('"')[1];
corner_down_right.firstElementChild.style.borderBottomColor=Down[3].split('"')[1];
corner_down_right.firstElementChild.style.borderRightColor=Right[7].split('"')[1];
if(!xyz){
rotatese.currentTime=0;
rotatese.play();
}
if(flag){
stopTimer();
}
}

function F(){
if(!lock){
Right[0] = Right[1];
Right[1] = Up[7];
Up[7] = Left[9];
Left[9] = Down[3];
Down[3] = Right[0];
Right[0] = Right[4];
Right[4] = Up[8];
Up[8] = Left[6];
Left[6] = Down[2];
Down[2] = Right[0];
Right[0] = Right[7];
Right[7] = Up[9];
Up[9] = Left[3];
Left[3] = Down[1];
Down[1] = Right[0];
Front[0] = Front[3];
Front[3] = Front[1];
Front[1] = Front[7];
Front[7]  = Front[9];
Front[9] = Front[0];
Front[0] = Front[6];
Front[6] = Front[2];
Front[2] = Front[4];
Front[4] = Front[8];
Front[8] = Front[0];
showCube();
}
}
function Fd(){
if(!lock){
Right[0] = Down[3];
Down[3] = Left[9];
Left[9] = Up[7];
Up[7] = Right[1];
Right[1] = Right[0];
Right[0] = Down[2];
Down[2] = Left[6];
Left[6] = Up[8];
Up[8] = Right[4];
Right[4] = Right[0];
Right[0] = Down[1];
Down[1] = Left[3];
Left[3] = Up[9];
Up[9] = Right[7];
Right[7] = Right[0];
Front[0] = Front[8];
Front[8] = Front[4];
Front[4] = Front[2];
Front[2]  = Front[6];
Front[6] = Front[0];
Front[0] = Front[9];
Front[9] = Front[7];
Front[7] = Front[1];
Front[1] = Front[3];
Front[3] = Front[0];
showCube();
}
}
function B(){
if(!lock){
Left[0] = Left[1];
Left[1] = Up[3];
Up[3] = Right[9];
Right[9] = Down[7];
Down[7] = Left[0];
Left[0] = Left[4];
Left[4] = Up[2];
Up[2] = Right[6];
Right[6] = Down[8];
Down[8] = Left[0];
Left[0] = Left[7];
Left[7] = Up[1];
Up[1] = Right[3];
Right[3] = Down[9];
Down[9] = Left[0];
Back[0] = Back[3];
Back[3] = Back[1];
Back[1] = Back[7];
Back[7]  = Back[9];
Back[9] = Back[0];
Back[0] = Back[6];
Back[6] = Back[2];
Back[2] = Back[4];
Back[4] = Back[8];
Back[8] = Back[0];
showCube();
}
}
function Bd(){
if(!lock){
Left[0] = Down[7];
Down[7] = Right[9];
Right[9] = Up[3] ;
Up[3] = Left[1];
Left[1] = Left[0];
Left[0] = Down[8];
Down[8] = Right[6];
Right[6] = Up[2] ;
Up[2] = Left[4];
Left[4] = Left[0];
Left[0] = Down[9];
Down[9] = Right[3];
Right[3] = Up[1] ;
Up[1] = Left[7];
Left[7] = Left[0];
Back[0] = Back[8];
Back[8] = Back[4];
Back[4] = Back[2];
Back[2]  = Back[6];
Back[6] = Back[0];
Back[0] = Back[9];
Back[9] = Back[7];
Back[7] = Back[1];
Back[1] = Back[3];
Back[3] = Back[0];
showCube();
}
}
function R(){
if(!lock){
Up[0] = Up[3];
Up[3] = Front[3];
Front[3] = Down[3];
Down[3] = Back[3];
Back[3] = Up[0];
Up[0] = Up[6];
Up[6] = Front[6];
Front[6] = Down[6];
Down[6] = Back[6];
Back[6] = Up[0];
Up[0] = Up[9];
Up[9] = Front[9];
Front[9] = Down[9];
Down[9] = Back[9];
Back[9] = Up[0];
Right[0] = Right[3];
Right[3] = Right[1];
Right[1] = Right[7];
Right[7]  = Right[9];
Right[9] = Right[0];
Right[0] = Right[6];
Right[6] = Right[2];
Right[2] = Right[4];
Right[4] = Right[8];
Right[8] = Right[0];
showCube();
}
}
function Rd(){
if(!lock){
Up[0] = Back[3];
Back[3] = Down[3];
Down[3] = Front[3];
Front[3] = Up[3];
Up[3] = Up[0];
Up[0] = Back[6];
Back[6] = Down[6];
Down[6] = Front[6];
Front[6] = Up[6];
Up[6] = Up[0];
Up[0] = Back[9];
Back[9] = Down[9];
Down[9] = Front[9];
Front[9] = Up[9];
Up[9] = Up[0];
Right[0] = Right[8];
Right[8] = Right[4];
Right[4] = Right[2];
Right[2]  = Right[6];
Right[6] = Right[0];
Right[0] = Right[9];
Right[9] = Right[7];
Right[7] = Right[1];
Right[1] = Right[3];
Right[3] = Right[0];
showCube();
}
}

function L(){
if(!lock){
Up[0] = Back[1];
Back[1] = Down[1];
Down[1] = Front[1];
Front[1] = Up[1];
Up[1] = Up[0];
Up[0] = Back[4];
Back[4] = Down[4];
Down[4] = Front[4];
Front[4] = Up[4];
Up[4] = Up[0];
Up[0] = Back[7];
Back[7] = Down[7];
Down[7] = Front[7];
Front[7] = Up[7];
Up[7] = Up[0];
Left[0] = Left[3];
Left[3] = Left[1];
Left[1] = Left[7];
Left[7]  = Left[9];
Left[9] = Left[0];
Left[0] = Left[6];
Left[6] = Left[2];
Left[2] = Left[4];
Left[4] = Left[8];
Left[8] = Left[0];
showCube();
}
}
function Ld(){
if(!lock){
Up[0] = Up[1];
Up[1] = Front[1];
Front[1] = Down[1];
Down[1] = Back[1];
Back[1] = Up[0];
Up[0] = Up[4];
Up[4] = Front[4];
Front[4] = Down[4];
Down[4] = Back[4];
Back[4] = Up[0];
Up[0] = Up[7];
Up[7] = Front[7];
Front[7] = Down[7];
Down[7] = Back[7];
Back[7] = Up[0];
Left[0] = Left[8];
Left[8] = Left[4];
Left[4] = Left[2];
Left[2]  = Left[6];
Left[6] = Left[0];
Left[0] = Left[9];
Left[9] = Left[7];
Left[7] = Left[1];
Left[1] = Left[3];
Left[3] = Left[0];
showCube();
}
}
function U(){
if(!lock){
Left[0] = Left[1];
Left[1] = Front[1];
Front[1] = Right[1];
Right[1] = Back[9];
Back[9] = Left[0];
Left[0] = Left[2];
Left[2] = Front[2];
Front[2] = Right[2];
Right[2] = Back[8];
Back[8] = Left[0];
Left[0] = Left[3];
Left[3] = Front[3];
Front[3] = Right[3];
Right[3] = Back[7];
Back[7] = Left[0];
Up[0] = Up[3];
Up[3] = Up[1];
Up[1] = Up[7];
Up[7]  = Up[9];
Up[9] = Up[0];
Up[0] = Up[6];
Up[6] = Up[2];
Up[2] = Up[4];
Up[4] = Up[8];
Up[8] = Up[0];
showCube();
}
}
function Ud(){
if(!lock){
Right[0] = Right[1];
Right[1] = Front[1];
Front[1] = Left[1];
Left[1] = Back[9];
Back[9] = Right[0];
Right[0] = Right[2];
Right[2] = Front[2];
Front[2] = Left[2];
Left[2] = Back[8];
Back[8] = Right[0];
Right[0] = Right[3];
Right[3] = Front[3];
Front[3] = Left[3];
Left[3] = Back[7];
Back[7] = Right[0];
Up[0] = Up[8];
Up[8] = Up[4];
Up[4] = Up[2];
Up[2]  = Up[6];
Up[6] = Up[0];
Up[0] = Up[9];
Up[9] = Up[7];
Up[7] = Up[1];
Up[1] = Up[3];
Up[3] = Up[0];
showCube();
}
}
function D(){
if(!lock){
Right[0] = Right[7];
Right[7] = Front[7];
Front[7] = Left[7];
Left[7] = Back[3];
Back[3] = Right[0];
Right[0] = Right[8];
Right[8] = Front[8];
Front[8] = Left[8];
Left[8] = Back[2];
Back[2] = Right[0];
Right[0] = Right[9];
Right[9] = Front[9];
Front[9] = Left[9];
Left[9] = Back[1];
Back[1] = Right[0];
Down[0] = Down[3];
Down[3] = Down[1];
Down[1] = Down[7];
Down[7]  = Down[9];
Down[9] = Down[0];
Down[0] = Down[6];
Down[6] = Down[2];
Down[2] = Down[4];
Down[4] = Down[8];
Down[8] = Down[0];
showCube();
}
}
function Dd(){
if(!lock){
Left[0] = Left[7];
Left[7] = Front[7];
Front[7] = Right[7];
Right[7] = Back[3];
Back[3] = Left[0];
Left[0] = Left[8];
Left[8] = Front[8];
Front[8] = Right[8];
Right[8] = Back[2];
Back[2] = Left[0];
Left[0] = Left[9];
Left[9] = Front[9];
Front[9] = Right[9];
Right[9] = Back[1];
Back[1] = Left[0];
Down[0] = Down[8];
Down[8] = Down[4];
Down[4] = Down[2];
Down[2]  = Down[6];
Down[6] = Down[0];
Down[0] = Down[9];
Down[9] = Down[7];
Down[7] = Down[1];
Down[1] = Down[3];
Down[3] = Down[0];
showCube();
}
}
function M(){
if(!lock){
Down[0] = Down[2];
Down[2] = Front[2];
Front[2] = Up[2];
Up[2] = Back[2];
Back[2] = Down[0];
Down[0] = Down[5];
Down[5] = Front[5];
Front[5] = Up[5];
Up[5] = Back[5];
Back[5] = Down[0];
Down[0] = Down[8];
Down[8] = Front[8];
Front[8] = Up[8];
Up[8] = Back[8];
Back[8] = Down[0];
showCube();
}
}
function Md(){
if(!lock){
Up[0] = Up[2];
Up[2] = Front[2];
Front[2] = Down[2];
Down[2] = Back[2];
Back[2] = Up[0];
Up[0] = Up[5];
Up[5] = Front[5];
Front[5] = Down[5];
Down[5] = Back[5];
Back[5] = Up[0];
Up[0] = Up[8];
Up[8] = Front[8];
Front[8] = Down[8];
Down[8] = Back[8];
Back[8] = Up[0];
showCube();
}
}
function E(){
if(!lock){
Right[0] = Right[4];
Right[4] = Front[4];
Front[4] = Left[4];
Left[4] = Back[6];
Back[6] = Right[0];
Right[0] = Right[5];
Right[5] = Front[5];
Front[5] = Left[5];
Left[5] = Back[5];
Back[5] = Right[0];
Right[0] = Right[6];
Right[6] = Front[6];
Front[6] = Left[6];
Left[6] = Back[4];
Back[4] = Right[0];
showCube();
}
}
function Ed(){
if(!lock){
Left[0] = Left[4];
Left[4] = Front[4];
Front[4] = Right[4];
Right[4] = Back[6];
Back[6] = Left[0];
Left[0] = Left[5];
Left[5] = Front[5];
Front[5] = Right[5];
Right[5] = Back[5];
Back[5] = Left[0];
Left[0] = Left[6];
Left[6] = Front[6];
Front[6] = Right[6];
Right[6] = Back[4];
Back[4] = Left[0];
showCube();
}
}
function S(){
if(!lock){
Right[0] = Right[2];
Right[2] = Up[4];
Up[4] = Left[8];
Left[8] = Down[6];
Down[6] = Right[0];
Right[0] = Right[5];
Right[5] = Up[5];
Up[5] = Left[5];
Left[5] = Down[5];
Down[5] = Right[0];
Right[0] = Right[8];
Right[8] = Up[6];
Up[6] = Left[2];
Left[2] = Down[4];
Down[4] = Right[0];
showCube();
}
}
function Sd(){
if(!lock){
Left[0] = Left[2];
Left[2] = Up[6];
Up[6] = Right[8];
Right[8] = Down[4];
Down[4] = Left[0];
Left[0] = Left[5];
Left[5] = Up[5];
Up[5] = Right[5];
Right[5] = Down[5];
Down[5] = Left[0];
Left[0] = Left[8];
Left[8] = Up[4];
Up[4] = Right[2];
Right[2] = Down[6];
Down[6] = Left[0];
showCube();
}
}
function x(){
xyz = true;
lock = false;
R();
Ld();
Md();
if(!start){
lock = true;
}
xyz = false;
}
function xd(){
xyz = true;
lock = false;
Rd();
L();
M();
if(!start){
lock = true;
}
xyz = false;
}
function y(){
xyz = true;
lock = false;
U();
Dd();
Ed();
if(!start){
lock = true;
}
xyz = false;
}
function yd(){
xyz = true;
lock = false;
Ud();
D();
E();
if(!start){
lock = true;
}
xyz = false;
}
function z(){
xyz = true;
lock = false;
F();
S();
Bd();
if(!start){
lock = true;
}
xyz = false;
}
function zd(){
xyz = true;
lock = false;
Fd();
Sd();
B();
if(!start){
lock = true;
}
xyz = false;
}
function shuffleArray(array){
array.sort(()=> Math.random() - 0.5);
}
var shti;
function shuffle(){
shufflebt.style.display="none";
x1.className="buttonXYZ";
x2.className="buttonXYZ";
y1.className="buttonXYZ";
y2.className="buttonXYZ";
z1.className="buttonXYZ";
z2.className="buttonXYZ";
shti = setInterval('shuffleInterval()',50);
}
function setTimer(){
t = 0;
startbt.style.display="none";
time.innerHTML="0:00.00";
lock = false;
start = true;
flag = true;
x1.className="button";
x2.className="button";
y1.className="button";
y2.className="button";
z1.className="button";
z2.className="button";
ti = setInterval('timer()',10);
}
function timer(){
t++;
second = Math.floor(t / 100) % 60;
minute = Math.floor((t /100) / 60);
ms = t % 100;
time.innerHTML = minute + ":" + String(second).padStart(2, '0') + "." + String(ms).padStart(2, '0');
}
function stopTimer(){
same = 0;
for(i = 2;i <= 9;i++){
if(Front[i] == Front[1] && Back[i] == Back[1] && Up[i] == Up[1] && Down[i] == Down[1] && Right[i] == Right[1] && Left[i] == Left[1]){
same++;
}
}
if(same==8){
clearInterval(ti);
pop(time.innerText);
shufflebt.style.display="block";
flag = false;
}
}
let i = 0;
function shuffleInterval(){
i++;
shuffleArray(rotate);
eval(rotate[0]);
if(i == 25){
clearInterval(shti);
startbt.style.display="block";
lock = true;
start = false;
}
}
function pop(message){
popMessage.innerText=message;
popup.style.display="block";
}
function closePop(){
popup.style.display="none";
}