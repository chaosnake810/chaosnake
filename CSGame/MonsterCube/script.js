if(localStorage.muteim == undefined){
localStorage.muteim = "images/mute_true.png";
}
if(localStorage.eashi == undefined){
localStorage.eashi = 0;
}
if(localStorage.norhi == undefined){
localStorage.norhi = 0;
}
if(localStorage.harhi == undefined){
localStorage.harhi = 0;
}
if(localStorage.uhahi == undefined){
localStorage.uhahi = 0;
}
let bgm1 = new Audio('sounds/main.mp3');
let bgm2 = new Audio('sounds/stage.mp3');
let bgm3 = new Audio('sounds/gameover.mp3');
let bgm4 = new Audio('sounds/ultra_wait.mp3');
let bgm5 = new Audio('sounds/ultra_stage.mp3');
let se1 = new Audio('sounds/walk.mp3');
let se2 = new Audio('sounds/start.mp3');
let se3 = new Audio('sounds/levelselect.mp3');
let se4 = new Audio('sounds/gameover_se.mp3');
let se5 = new Audio('sounds/ultra.mp3');
let se6 = new Audio('sounds/ok.mp3');
let se7 = new Audio('sounds/wall.mp3');
let se8 = new Audio('sounds/error.mp3');
let se9 = new Audio('sounds/button.mp3');
let se10 = new Audio('sounds/popup.mp3');
let se11 = new Audio('sounds/mute_off.mp3');
let se12 = new Audio('sounds/highscore.mp3');
function loading(){
bgm1.load();
bgm2.load();
bgm3.load();
bgm4.load();
bgm5.load();
se1.load();
se2.load();
se3.load();
se4.load();
se5.load();
se6.load();
se7.load();
se8.load();
se9.load();
se10.load();
se11.load();
se12.load();
load.style.display="none";
}
let n = 0;
let m = 0;
let sc = 0;
let lev = 0;
let scr = 0;
let sel = 0;
let lvre = 0;
let lvrn = 0;
let lvrh = 0;
function eas(){
document.getElementById('hisc').innerHTML ='HI-SCORE:' + localStorage.eashi;
if(lvre == 0){
se3.currentTime = 0;
se3.play();
lvre = 1;
lvrn = 0;
lvrh = 0;
}
else{
se8.currentTime = 0;
se8.play();
}
lev = 1;
document.getElementById('dis').innerHTML = "<div id=tes class=a></div><div id=test class=e1></div>";
easid.style.top = "2px";
norid.style.top = "0";
harid.style.top = "0";
easid.style.background="linear-gradient(#222299,#5555bb)";
norid.style.background="linear-gradient(#44bb44,#77dd77)";
harid.style.background="linear-gradient(#bb4444,#dd7777)";
easid.style.color = "#dddddd";
norid.style.color = "white";
harid.style.color = "white";
easid.style.border = "3px solid #88aadd";
norid.style.border = "3px solid #ccffaa";
harid.style.border = "3px solid #ffaacc";
body.style.background = "linear-gradient(#4444bb,#7777dd)";
scr = 0;
}
function nor(){
document.getElementById('hisc').innerHTML ='HI-SCORE:' + localStorage.norhi;
if(lvrn == 0){
se3.currentTime = 0;
se3.play();
lvrn = 1;
lvre = 0;
lvrh = 0;
}
else{
se8.currentTime = 0;
se8.play();
}
lev = 2;
document.getElementById('dis').innerHTML = "<div id=tes class=a></div><div id=test class=e1></div><div id=test2 class=e2></div>";
easid.style.top = "0";
norid.style.top = "2px";
harid.style.top = "0";
easid.style.background="linear-gradient(#4444bb,#7777dd)";
norid.style.background="linear-gradient(#229922,#55bb55)";
harid.style.background="linear-gradient(#bb4444,#dd7777)";
easid.style.color = "white";
norid.style.color = "#dddddd";
harid.style.color = "white";
easid.style.border = "3px solid #aaccff";
norid.style.border = "3px solid #aadd88";
harid.style.border = "3px solid #ffaacc";
body.style.background = "linear-gradient(#44bb44,#77dd77)";
scr = 0;
}
function har(){
if(scr == 4){
document.getElementById('hisc').innerHTML ='HI-SCORE:' + localStorage.uhahi;
se5.play();
bgm1.pause();
bgm4.play();
bgm4.loop = true;
lev = 4;
body.style.background = "linear-gradient(black,#dd77dd)";
document.getElementById('level').innerHTML = "<tr><td><div class=ultrahard>ULTRAHARD</div></td></tr>";
test.style.background ="linear-gradient(purple,#aa0000)";
test2.style.background ="linear-gradient(purple,#aa0000)";
test3.style.background ="linear-gradient(purple,#aa0000)";
}
else{
document.getElementById('hisc').innerHTML ='HI-SCORE:' + localStorage.harhi;
if(lvrh == 0){
se3.currentTime = 0;
se3.play();
lvrh = 1;
lvrn = 0;
lvre = 0;
}
else{
se8.currentTime = 0;
se8.play();
}
lev = 3;
document.getElementById('dis').innerHTML = "<div id=tes class=a></div><div id=test class=e1></div><div id=test2 class=e2></div><div id=test3 class=e3></div>";
easid.style.top = "0";
norid.style.top = "0";
harid.style.top = "2px";
easid.style.background="linear-gradient(#4444bb,#7777dd)";
norid.style.background="linear-gradient(#44bb44,#77dd77)";
harid.style.background="linear-gradient(#992222,#bb5555)";
easid.style.color = "white";
norid.style.color = "white";
harid.style.color = "#dddddd";
easid.style.border = "3px solid #aaccff";
norid.style.border = "3px solid #ccffaa";
harid.style.border = "3px solid #dd88aa";
body.style.background = "linear-gradient(#bb4444,#dd7777)";
scr = scr + 1;
}
}
function ok(){
document.getElementById('mut').innerHTML = "<img width=30 height=30 src="+localStorage.muteim+">";
pop.style.display = "none";
se6.play();
bgm1.play();
bgm1.loop = true;
}
function ok2(){
se6.currentTime = 0;
se6.play();
pop.style.display = "none";
}
function left(){
if(n == 11){
se7.currentTime = 0;
se7.play();
}
else{
se1.currentTime = 0;
se1.play();
n = n + 1;
sc = sc + 10;
document.getElementById('score').innerHTML = "SCORE:" + sc;
tes.style.left = n * 20 + 'px';
}
 }
function right(){
if(n == 0){
se7.currentTime = 0;
se7.play();
}
else{
se1.currentTime = 0;
se1.play();
n = n - 1;
sc = sc + 10;
document.getElementById('score').innerHTML = "SCORE:" + sc;
tes.style.left = n * 20 + 'px';
}
 }
function up(){
if(m == 0){
se7.currentTime = 0;
se7.play();
}
else{
se1.currentTime = 0;
se1.play();
m = m - 1;
sc = sc + 10;
document.getElementById('score').innerHTML = "SCORE:" + sc;
tes.style.top = m * 20 + 'px';
}
 }
function down(){
if(m == 19){
se7.currentTime = 0;
se7.play();
}
else{
se1.currentTime = 0;
se1.play();
m = m + 1;
sc = sc + 10;
document.getElementById('score').innerHTML = "SCORE:" + sc;
tes.style.top = m * 20 + 'px';
 }
}

var b;
var c;
var b2;
var c2;
var b3;
var c3;
var d3 = [1,2,3,4];
var d = [1,2,3,4];
var d2 = [1,2,3,4];
function shuffleArray(array){
    array.sort(()=> Math.random() - 0.5);
}
function a() {
if(lev == 0){
se10.currentTime = 0;
se10.play();
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>Please select a level!<div class=okbt onclick=ok2()>OK</div>";
clearInterval( P );
}
else{
if(sel == 0){
se2.play();
sel = 1;
}
if(lev == 4){
bgm4.pause();
bgm5.play();
bgm5.loop = true;
}
else if(lev == 1 || lev == 2 || lev == 3){
bgm1.pause();
bgm2.play();
bgm2.loop = true;
}
level.style.display ="none";
document.getElementById('key').innerHTML = "<table cellspacing=0><tr><td colspan=3 class=u><span onclick=up() class=ten>▲</span></td></tr><tr><td><span onclick=right() class=ten>&#9664;</span></td><td width=90px></td><td><span onclick=left() class=ten>&#9654;</span></td></tr><tr><td colspan=3 class=d><span onclick=down() class=ten>▼</span></td></tr></table>";
if(n == b && m-1 == c){
if(lev == 1){
if(localStorage.eashi < sc){
se12.play();
localStorage.eashi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.eashi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 2){
if(localStorage.norhi < sc){
se12.play();
localStorage.norhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.norhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 3){
if(localStorage.harhi < sc){
se12.play();
localStorage.harhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.harhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else{
if(localStorage.uhahi < sc){
se12.play();
localStorage.uhahi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.uhahi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
se4.play();
bgm2.pause();
bgm5.pause();
bgm3.play();
bgm3.loop = true;
document.getElementById('dis').innerHTML = "<div class=go>GAME OVER</div>";
clearInterval( P );
document.getElementById('key').innerHTML =
"<table cellspacing=0><tr><td colspan=3 class=u><span class=ten onclick=k()>▲</span></td></tr><tr><td><span class=ten onclick=k()>&#9664;</span></td><td width=90px><center><div class=st onclick=rese()>Retry</div></center></td><td><span class=ten onclick=k()>&#9654;</span></td></tr><tr><td colspan=3 class=d><span class=ten onclick=k()>▼</span></td></tr></table>";
}
shuffleArray(d);
shuffleArray(d2);
shuffleArray(d3);
if(b == 0 && c == -1){
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c++;
test.style.top = c * 20 + 'px';
}
}
else if(b == 11 && c==18){
if(d[0] == 1){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c--;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
else if(b == 0 && c == 18){
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c--;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
else if(b == 11 && c == -1){
if(d[0] == 1){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c++;
test.style.top = c * 20 + 'px';
}
}
else if(b == 0){
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
else if(b == 11){
if(d[0] == 1){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
else if(c == -1){
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c++;
test.style.top = c * 20 + 'px';
}
}
else if(c == 18){
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c--;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
else{
if(d[0] == 1){
b++;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 2){
b--;
test.style.left = b * 20 + 'px';
}
else if(d[0] == 3){
c++;
test.style.top = c * 20 + 'px';
}
else{
c--;
test.style.top = c * 20 + 'px';
}
}
if(lev == 2 || lev == 3 || lev == 4){
if(n == b2 && m-2 == c2){
if(lev == 1){
if(localStorage.eashi < sc){
se12.play();
localStorage.eashi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.eashi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 2){
if(localStorage.norhi < sc){
se12.play();
localStorage.norhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.norhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 3){
if(localStorage.harhi < sc){
se12.play();
localStorage.harhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.harhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else{
if(localStorage.uhahi < sc){
se12.play();
localStorage.uhahi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.uhahi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
se4.play();
bgm2.pause();
bgm5.pause();
bgm3.play();
bgm3.loop = true;
document.getElementById('dis').innerHTML = "<div class=go>GAME OVER</div>";
clearInterval( P );
document.getElementById('key').innerHTML =
"<table cellspacing=0><tr><td colspan=3 class=u><span class=ten onclick=k()>▲</span></td></tr><tr><td><span class=ten onclick=k()>&#9664;</span></td><td width=90px><center><div class=st onclick=rese()>Retry</div></center></td><td><span class=ten onclick=k()>&#9654;</span></td></tr><tr><td colspan=3 class=d><span class=ten onclick=k()>▼</span></td></tr></table>";
}
if(b2 == 0 && c2 == -2){
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2++;
test2.style.top = c2 * 20 + 'px';
}
}
else if(b2 == 11 && c2==17){
if(d2[0] == 1){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2--;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
else if(b2 == 0 && c2 == 17){
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2--;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
else if(b2 == 11 && c2 == -2){
if(d2[0] == 1){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2++;
test2.style.top = c2 * 20 + 'px';
}
}
else if(b2 == 0){
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
else if(b2 == 11){
if(d2[0] == 1){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
else if(c2 == -2){
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2++;
test2.style.top = c2 * 20 + 'px';
}
}
else if(c2 == 17){
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2--;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
else{
if(d2[0] == 1){
b2++;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 2){
b2--;
test2.style.left = b2 * 20 + 'px';
}
else if(d2[0] == 3){
c2++;
test2.style.top = c2 * 20 + 'px';
}
else{
c2--;
test2.style.top = c2 * 20 + 'px';
}
}
}
if(lev == 3 || lev == 4){
if(n == b3 && m-3 == c3){
if(lev == 1){
if(localStorage.eashi < sc){
se12.play();
localStorage.eashi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.eashi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 2){
if(localStorage.norhi < sc){
se12.play();
localStorage.norhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.norhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else if(lev == 3){
if(localStorage.harhi < sc){
se12.play();
localStorage.harhi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.harhi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
else{
if(localStorage.uhahi < sc){
se12.play();
localStorage.uhahi = sc;
document.getElementById('hisc').innerHTML = 'HI-SCORE:' + localStorage.uhahi;
pop.style.display ="flex";
document.getElementById('pop').innerHTML = "<div class=popup1>　　HI-SCORE!!!　　<div class=okbt onclick=ok2()>OK</div>";
}
}
se4.play();
bgm2.pause();
bgm5.pause();
bgm3.play();
bgm3.loop = true;
document.getElementById('dis').innerHTML = "<div class=go>GAME OVER</div>";
clearInterval( P );
document.getElementById('key').innerHTML =
"<table cellspacing=0><tr><td colspan=3 class=u><span class=ten onclick=k()>▲</span></td></tr><tr><td><span class=ten onclick=k()>&#9664;</span></td><td width=90px><center><div class=st onclick=rese()>Retry</div></center></td><td><span class=ten onclick=k()>&#9654;</span></td></tr><tr><td colspan=3 class=d><span class=ten onclick=k()>▼</span></td></tr></table>";
}
if(b3 == 0 && c3 == -3){
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3++;
test3.style.top = c3 * 20 + 'px';
}
}
else if(b3 == 11 && c3==16){
if(d3[0] == 1){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3--;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
else if(b3 == 0 && c3 == 16){
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3--;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
else if(b3 == 11 && c3 == -3){
if(d3[0] == 1){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3++;
test3.style.top = c3 * 20 + 'px';
}
}
else if(b3 == 0){
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
else if(b3 == 11){
if(d3[0] == 1){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
else if(c3 == -3){
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3++;
test3.style.top = c3 * 20 + 'px';
}
}
else if(c3 == 16){
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3--;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
else{
if(d3[0] == 1){
b3++;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 2){
b3--;
test3.style.left = b3 * 20 + 'px';
}
else if(d3[0] == 3){
c3++;
test3.style.top = c3 * 20 + 'px';
}
else{
c3--;
test3.style.top = c3 * 20 + 'px';
}
}
}
}
}
function startShowing() {
   b = 11;
   c = 18;
   b2 = 0;
   c2 = 17;
   b3 = 11;
   c3 = -3;
if(lev == 4){
P = setInterval('a()',1);
}
else{
P = setInterval('a()',50);
}
}
function rese(){
se6.play();
n = 0;
m = 0;
sc = 0;
lev = 0;
scr = 0;
sel = 0;
lvre = 0;
lvrn = 0;
lvrh = 0;
body.style.background = "linear-gradient(#4444bb,#7777dd)";
level.style.display = "inline";
document.getElementById('level').innerHTML = "<tr><td><div class=easy onclick=eas() id=easid>EASY</div></td><td><div class=normal onclick=nor() id=norid>NORMAL</div></td><td><div class=hard onclick=har() id=harid>HARD</div></td></tr>";
document.getElementById('hisc').innerHTML = "HI-SCORE:0";
document.getElementById('score').innerHTML = "SCORE:0";
document.getElementById('key').innerHTML = "<table cellspacing=0><tr><td colspan=3 class=u><span class=ten onclick=k()>▲</span></td></tr><tr><td><span class=ten onclick=k()>&#9664;</span></td><td width=90px><center><div id=startcount onclick=startShowing(); class=st>Play</div></center></td><td><span class=ten onclick=k()>&#9654;</span></td></tr><tr><td colspan=3 class=d><span class=ten onclick=k()>▼</span></td></tr></table>";
document.getElementById('dis').innerHTML = "<div class=go>LEVEL SELECT</div>";
bgm3.pause();
bgm1.currentTime = 0;
bgm1.play();
bgm2.currentTime = 0;
bgm3.currentTime = 0;
bgm4.currentTime = 0;
bgm5.currentTime = 0;
}
function k(){
se9.currentTime = 0;
se9.play();
}
function muted(){
if(localStorage.mute == 0 || localStorage.mute == undefined){
se11.play();
localStorage.mute = 1;
localStorage.muteim = "images/mute_false.png";
document.getElementById('mut').innerHTML = "<img width=30 height=30 src="+localStorage.muteim+">";
bgm1.muted = false;
bgm2.muted = false;
bgm3.muted = false;
bgm4.muted = false;
bgm5.muted = false;
se1.muted = false;
se2.muted = false;
se3.muted = false;
se4.muted = false;
se5.muted = false;
se6.muted = false;
se7.muted = false;
se8.muted = false;
se9.muted = false;
se10.muted = false;
se12.muted = false;
}
else{
localStorage.mute = 0;
localStorage.muteim = "images/mute_true.png";
document.getElementById('mut').innerHTML = "<img width=30 height=30 src="+localStorage.muteim+">";
bgm1.muted = true;
bgm2.muted = true;
bgm3.muted = true;
bgm4.muted = true;
bgm5.muted = true;
se1.muted = true;
se2.muted = true;
se3.muted = true;
se4.muted = true;
se5.muted = true;
se6.muted = true;
se7.muted = true;
se8.muted = true;
se9.muted = true;
se10.muted = true;
se12.muted = true;
}
}
if(localStorage.mute == 0 || localStorage.mute == undefined){
bgm1.muted = true;
bgm2.muted = true;
bgm3.muted = true;
bgm4.muted = true;
bgm5.muted = true;
se1.muted = true;
se2.muted = true;
se3.muted = true;
se4.muted = true;
se5.muted = true;
se6.muted = true;
se7.muted = true;
se8.muted = true;
se9.muted = true;
se10.muted = true;
se12.muted = true;
}
else{
bgm1.muted = false;
bgm2.muted = false;
bgm3.muted = false;
bgm4.muted = false;
bgm5.muted = false;
se1.muted = false;
se2.muted = false;
se3.muted = false;
se4.muted = false;
se5.muted = false;
se6.muted = false;
se7.muted = false;
se8.muted = false;
se9.muted = false;
se10.muted = false;
se12.muted = false;
}