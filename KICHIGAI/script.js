const SAFE_FACE = "😁";
const WARN_FACE = "😃";
const OUT_FACE = "🫪";
const SAFE_HANDS = ["👈","👆","👉","👇"];
const OUT_HAND = "🫵";
let rotateInterval;
let crazyInterval;
let deg = 0;
let status = 3;
let count = 0;
let hided = false;
let score = 0;
let pushed = false;
let buttonDisabled = false;

function loading(){
createDisplay();
}

function createDisplay(){
face.innerHTML = SAFE_FACE;
left_hand.innerHTML = SAFE_HANDS[0];
top_hand.innerHTML = SAFE_HANDS[1];
right_hand.innerHTML = SAFE_HANDS[2];
bottom_hand.innerHTML = SAFE_HANDS[3];
}
function start(){
status = 0;
score = 0;
score_area.innerText = "SCORE：" + score;
message.innerText = "";
createDisplay();
body.style.background = "#fff";
rotateInterval = setInterval((() => {
deg += 90;
hands.style.transform = "rotate(" + deg + "deg)";
}),500);
crazyInterval = setInterval((() => {
crazy();
}), 100);
button.innerText = "隠れる";
}
function crazy(){
if(hided === false){
score+=10;
score_area.innerText = "SCORE：" + score;
}
if(status === 0){
if(hided === false){
if ((Math.floor(Math.random() * 100) % 10) === 0) {
face.innerHTML = WARN_FACE;
status = 1;
}
}
} else if (status === 1) {
count++;
if (count === 3){
count = 0;
if(hided === false) {
face.innerHTML = OUT_FACE;
left_hand.innerHTML = OUT_HAND;
top_hand.innerHTML = OUT_HAND;
right_hand.innerHTML = OUT_HAND;
bottom_hand.innerHTML = OUT_HAND;
clearInterval(crazyInterval);
clearInterval(rotateInterval);
deg = 0;
hands.style.transform = "rotate(" + deg + "deg)";
body.style.background = "linear-gradient(#f00, #000)";
message.innerText = "まずい“認識”された逃げろ逃げろ逃げろ逃げ";
buttonDisabled = true;
button.style.background = "#777";
status = 3;
setTimeout(() => {
button.style.background = "linear-gradient(#33f, #33a)";
buttonDisabled = false;
button.innerText = "もう一度";
},1000);
} else {
status = 2;
}
}
} else if (status === 2){
status = 0;
face.innerHTML = SAFE_FACE;
left_hand.innerHTML = SAFE_HANDS[0];
top_hand.innerHTML = SAFE_HANDS[1];
right_hand.innerHTML = SAFE_HANDS[2];
bottom_hand.innerHTML = SAFE_HANDS[3];
}
}

function hide(isHide) {
if(buttonDisabled === false){
if(status !== 3){
hided = isHide;
if(isHide === true) {
message.innerText = "見つからないよう隠れている。";
body.style.background = "#bbb";
} else {
message.innerText = "";
body.style.background = "#fff";
}
}else{
if(isHide === true) {
pushed = true;
} else {
if(pushed === true) {
start();
pushed = false;
}
}
}
}
}
}
