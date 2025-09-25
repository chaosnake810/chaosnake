var tout;
let loadingPage = true;
var backrainbow;
let reverse = false;
let clicked = false;
let conum = 0;
let color = ["#ff0000","#ffa500","#ffff00","#008000","#00ffff","#0000ff","#800080"];
var feverend=0;
var fevervalue;
var fevermessage="";
let fever=0;
var feverstart = [0,1];
var fevercotinue = [0,1,0,1,1];
var kujise1 = new Audio("sounds/kujise1.mp3");
var kujise2 = new Audio("sounds/kujise2.mp3");
let today = new Date();
let year = String(today.getFullYear());
let month = String(today.getMonth());
let date = String(today.getDate());
let day = year + month + date;
let lottery_flag = 1;
let lottery_result = localStorage.result;
var lottery_list = ["大吉","吉","吉","中吉","中吉","中吉","小吉","小吉","小吉","小吉","末吉","末吉","末吉","末吉","末吉","凶","凶","凶","大凶","大凶"];
let nowPulldown = null;
if(localStorage.login != day){
lottery_flag = 0;
}
if(localStorage.csp == undefined){
localStorage.csp = 0;
}
let csp = Number(localStorage.csp);
function shuffleArray(array){
array.sort(()=> Math.random() - 0.5);
}
function lottery(){
if(lottery_flag == 1){
popup("カオスネークジは1日1回です<br>また明日お越しください<br>今日の結果:<span class=lottery_str>"+lottery_result+"</span>");
kujise2.currentTime=0;
kujise2.play();
}else{
shuffleArray(lottery_list);
lottery_result = lottery_list[0];
popup("本日のカオスネークジの結果は…<br><span class=lottery_str>"+lottery_result+"</span>！！！<br>＋" + getcsp() + "CSP");
nowcsp.innerHTML="所持CSP：" + csp + "CSP";
lottery_flag = 1;
localStorage.login = day;
localStorage.result = lottery_result;
kujise1.currentTime=0;
kujise1.play();
}
}
function popup(message){
pop.style.display = "block";
pop_message.innerHTML = message;
}
ti = setTimeout('time()',1000);
function time(){
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let dayIndex = today.getDay();
let dayArray = ["日","月","火","水","木","金","土"];
let date = today.getDate();
clockDate.innerHTML = "<span style='font-size:25px'>" + year + "</span><br>" + month +  "/"
+ date + "<span style='font-size:30px'>(" + dayArray[dayIndex] + ")</span>";
let second = today.getSeconds();
let minute = today.getMinutes();
let hour = today.getHours();
let rand = Math.round(Math.random() * 99) + 1;
if(rand == 100){
popCSP("CSP" + String(year) + String(month) + String(date) + String(hour) + String(minute) + String(second));
}
let hour2 = hour * 30;
let hour3 = minute * 0.5;
let hour4 = hour2 + hour3;
sn.style.transform = "rotate("+ second * 6 + "deg)";
mn.style.transform = "rotate("+ minute * 6 + "deg)";
hn.style.transform = "rotate("+ hour4 + "deg)";
ti = setTimeout('time()',1000);
}

function closead(){
adback.style.display="none";
ad.style.display="none";
}
function ok(){
pop.style.display="none";
if(se==1){
okse();
}
}

function getcsp(){
if(lottery_result == "大吉"){
csp += 100;
localStorage.csp = csp;
return 100;
}
if(lottery_result == "吉"){
csp += 50;
localStorage.csp = csp;
return 50;
}
if(lottery_result == "中吉"){
csp += 40;
localStorage.csp = csp;
return 40;
}
if(lottery_result == "小吉"){
csp += 30;
localStorage.csp = csp;
return 30;
}
if(lottery_result == "末吉"){
csp += 20;
localStorage.csp = csp;
return 20;
}
if(lottery_result == "凶"){
csp += 10;
localStorage.csp = csp;
return 10;
}
if(lottery_result == "大凶"){
return 0;
}
}
function dice(){
if(fever ==1 && betcsp.value != fevervalue){
popup("フィーバー中はBETするCSPを変更できません<br>");
betcsp.value = fevervalue;
}else{
if(/^\d+$/.test(betcsp.value)){
if(betcsp.value <= csp && betcsp.value > 0){
fevermessage="";
csp -= betcsp.value;
var dnum = [1,2,3,4,5,6];
shuffleArray(dnum);
shuffleArray(dnum);
shuffleArray(dnum);
var dice1 = dnum[0];
if(fever == 1){
dice1 = Number(inputDice.value);
}
switch(dice1){
case 1:
var dice1Img = "<span class=one>&emsp;&emsp;&emsp;<br>&emsp;●&emsp;<br>&emsp;&emsp;&emsp;</span>";
break;
case 2:
var dice1Img = "●&emsp;&emsp;<br>&emsp;&emsp;&emsp;<br>&emsp;&emsp;●";
break;
case 3:
var dice1Img = "●&emsp;&emsp;<br>&emsp;●&emsp;<br>&emsp;&emsp;●";
break;
case 4:
var dice1Img = "●&emsp;●<br>&emsp;&emsp;&emsp;<br>●&emsp;●";
break;
case 5:
var dice1Img = "●&emsp;●<br>&emsp;●&emsp;<br>●&emsp;●";
break;
case 6:
var dice1Img = "●&emsp;●<br>●&emsp;●<br>●&emsp;●";
break;
}
shuffleArray(dnum);
shuffleArray(dnum);
shuffleArray(dnum);
var dice2 = dnum[0];
if(fever == 1){
shuffleArray(fevercotinue);
dice2 = dice1;
if(fevercotinue[0]==0){
fevermessage="<br>フィーバー終了！";
fever=0;
clearInterval(backrainbow);
document.getElementsByTagName('body')[0].style.background="#eee";
feverend=1;
}
}
switch(dice2){
case 1:
var dice2Img = "<span class=one>&emsp;&emsp;&emsp;<br>&emsp;●&emsp;<br>&emsp;&emsp;&emsp;</span>";
break;
case 2:
var dice2Img = "●&emsp;&emsp;<br>&emsp;&emsp;&emsp;<br>&emsp;&emsp;●";
break;
case 3:
var dice2Img = "●&emsp;&emsp;<br>&emsp;●&emsp;<br>&emsp;&emsp;●";
break;
case 4:
var dice2Img = "●&emsp;●<br>&emsp;&emsp;&emsp;<br>●&emsp;●";
break;
case 5:
var dice2Img = "●&emsp;●<br>&emsp;●&emsp;<br>●&emsp;●";
break;
case 6:
var dice2Img = "●&emsp;●<br>●&emsp;●<br>●&emsp;●";
break;
}
diceOne.innerHTML = dice1Img;
diceTwo.innerHTML = dice2Img;
if(dice1 == inputDice.value && dice2 == inputDice.value){
csp += betcsp.value * 4;
if(fever==0){
shuffleArray(feverstart);
if(feverend == 1){
feverend=0;
feverstart[0] = 0;
feverstart[1] = 1;
}
}
if(fever==0 && feverstart[0]==1){
tout = setTimeout('popup("＋" + (betcsp.value * 4) + "CSP！<br>フィーバー突入！")',0);
fever=1;
backrainbow = setInterval('brainbow()',200);
fevervalue=betcsp.value;
}else{
tout = setTimeout('popup("＋" + (betcsp.value * 4) + "CSP！"+fevermessage)',0);
}
}else if(dice1 == inputDice.value || dice2 == inputDice.value){
csp += betcsp.value * 2;
tout = setTimeout('popup("＋" + (betcsp.value * 2) + "CSP！")',0);
}else{
tout = setTimeout('popup("－" + (betcsp.value) + "CSP")',0);
}
localStorage.csp = csp;
nowcsp.innerHTML="所持CSP：" + csp + "CSP";
}else{
popup("CSPが足りません<br><br><br>");
}
}else{
popup("BetするCSPは数字で入力してください<br><br><br>");
}
}
}
function buy(){
for(i = 0;i < document.getElementsByName('item').length;i++){
if(document.getElementsByName('item')[i].checked){
document.getElementsByName('item')[i].checked = false;
buy2(document.getElementsByName('item')[i].value.split(',')[0],document.getElementsByName('item')[i].value.split(',')[1]);
return;
}
}
popup("商品を選択してください<br><br><br>");
}
function buy2(item,price){
if(csp >= price){
if(item != "medal50"){
localStorage.setItem(item,1);
eval(item).style.display="none";
eval(item + "_sold").style.display="block";
}else{
if(localStorage.md == undefined){
localStorage.md = 250;
}else{
localStorage.md = Number(localStorage.md) + 50;
}
}
csp -= price;
localStorage.csp = csp;
nowcsp.innerHTML="所持CSP：" + csp + "CSP";
popup("購入しました<br><br><br>");
}else{
popup("CSPが足りません<br><br><br>");
}
}
function brainbow(){
document.getElementsByTagName('body')[0].style.background=color[conum];
if(reverse){
conum--;
if(conum == -1){
reverse = false;
conum = 1;
}
}else {
conum ++;
if(conum == 7){
reverse = true;
conum = 5;
}
}
}
function pulldown(button,content){
if(content.style.maxHeight=="0px" || content.style.maxHeight == ""){
content.style.maxHeight = content.scrollHeight + "px";
button.style.transform="rotate(180deg)";
button.parentNode.style.left = "-100px";
let linkId = "#" + (button.id).replaceAll("pulldown","content");
setTimeout(linkScroll,500,linkId);
if(nowPulldown !== null){
nowPulldown.click();
}
nowPulldown = button;
document.getElementsByClassName("clock")[0].style.display = "none";
}else{
content.style.maxHeight = "0px";
button.style.transform="rotate(0deg)";
button.parentNode.style.left = "-200px";
nowPulldown = null;
}
setTimeout(() => {
if(nowPulldown == null){
document.getElementsByClassName("clock")[0].style.display = "block";
}
},500);
}
function popCSP(cspId){
let csp = document.createElement('div');
csp.className = "csp_pop";
csp.id = cspId;
csp.style.top = Math.floor(Math.random() * 100) + "%";
csp.style.left = Math.floor(Math.random() * 100) + "%";
document.body.appendChild(csp);
document.getElementById(cspId).setAttribute("onclick","getPopCSP('" + cspId + "')");
}

function getPopCSP(cspId){
document.getElementById(cspId).remove();
let getCSP = Math.round(Math.random() * 49) + 1;
csp += getCSP;
localStorage.csp = csp;
nowcsp.innerHTML="所持CSP：" + csp + "CSP";
popup(getCSP + "CSPゲット！");
}
function linkScroll(linkId) {
location.replace(linkId);
}

window.onload = function(){
if(localStorage.logbo == 1){
logbo.style.display="none";
if(localStorage.logbo_sold_sold==1){
logbo_sold_sold_sold.style.display="block";
}else if(localStorage.logbo_sold==1){
logbo_sold_sold.style.display="block";
}else{
logbo_sold.style.display="block";
}
if(localStorage.loginbonus != day){
if(localStorage.logbo_sold_sold == 1){
csp += 100;
popup("ログインボーナス！<br>＋100CSP!<br>");
}else if(localStorage.logbo_sold == 1){
csp += 50;
popup("ログインボーナス！<br>＋50CSP!<br>");
}else{
csp += 25;
popup("ログインボーナス！<br>＋25CSP!<br>");
}
localStorage.csp = csp;
localStorage.loginbonus = day;
}
}
if(localStorage.addl != 1){
adback.style.display="block";
ad.style.display="block";
}else{
addl.style.display="none";
addl_sold.style.display="block";
}
nowcsp.innerHTML="所持CSP：" + csp + "CSP";
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let dayIndex = today.getDay();
let dayArray = ["日","月","火","水","木","金","土"];
let date = today.getDate();
clockDate.innerHTML = "<span style='font-size:25px'>" + year + "</span><br>" + month +  "/"
+ date + "<span style='font-size:30px'>(" + dayArray[dayIndex] + ")</span>";
clockDate.style.transition="10s";
clockDate.style.opacity=0.6;
}