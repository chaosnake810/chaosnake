function shuffleArray(rand){
    rand.sort(()=> Math.random() - 0.5);
}

if(localStorage.hs==undefined){
localStorage.hs=0;
}
let bgm1 = new Audio('sounds/stage.mp3');
bgm1.volume=0.2;
let bgm2 = new Audio('sounds/gameover.mp3');
let se1 = new Audio("sounds/jump.mp3");
let se2 = new Audio("sounds/walk.mp3");
let se3 = new Audio("sounds/wall.mp3");
let se4 = new Audio("sounds/get.mp3");
let se4b = new Audio("sounds/get.mp3");
let se4c = new Audio("sounds/get.mp3");
let se4d = new Audio("sounds/get.mp3");
let se4e = new Audio("sounds/get.mp3");
let se5 = new Audio("sounds/gameover_se.mp3");
let se6 = new Audio("sounds/start.mp3");
let se7 = new Audio("sounds/highscore.mp3");
let se8 = new Audio("sounds/error.mp3");
let points = 0;
let s1=1;
let s2=1;
let s3=1;
let pointc=0;
let enemyc=0;
let m1c=0;
let m2c=0;
let m3c=0;
let t2=0;
let erandv1 = [0,30,60,90,120,150];
let erandv2 = [0,30,60,90,120,150];
let erandv3 = [0,30,60,90,120,150];
let erandh1 = [0,270];
let erandh2 = [0,270];
let erandh3 = [0,270];
let randv1 = [0,30,60,90,120,150];
let randv2 = [0,30,60,90,120,150];
let randv3 = [0,30,60,90,120,150];
let randv4 = [0,30,60,90,120,150];
let randv5 = [0,30,60,90,120,150];
let randh1 = [0,30,60,90,120,150,180,210,240,270];
let randh2 = [0,30,60,90,120,150,180,210,240,270];
let randh3 = [0,30,60,90,120,150,180,210,240,270];
let randh4 = [0,30,60,90,120,150,180,210,240,270];
let randh5 = [0,30,60,90,120,150,180,210,240,270];
let p1=0;
let p2=0;
let p3=0;
let p4=0;
let p5=0;
let t=0;
let j=150;
let walk=0;
let ing=0;
let beside=0;
function loading(){
var images = ['images/player.png','images/jump.png','images/floor.png','images/enemy.png','images/background.png','images/walk.png'];
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
bgm1.load();
bgm2.load();
se1.load();
se2.load();
se3.load();
se4.load();
se4b.load();
se4c.load();
se4d.load();
se4e.load();
se5.load();
se6.load();
se7.load();
se8.load();
load.style.display="none";
}
function leftb(){
if(beside != 0){
se2.currentTime=0;
se2.play();
beside=beside-30;
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(p1==1 && randh1[0]==beside && randv1[0]== j){
point1.remove();
points = points + 100;
se4.currentTime=0;
se4.play();
pcount.innerHTML="Point:"+points;
p1=0;
}
if(p2==1 && randh2[0]==beside && randv2[0]== j){
point2.remove();
points = points + 100;
se4b.currentTime=0;
se4b.play();
pcount.innerHTML="Point:"+points;
p2=0;
}
if(p3==1 && randh3[0]==beside && randv3[0]== j){
point3.remove();
points = points + 100;
se4c.currentTime=0;
se4c.play();
pcount.innerHTML="Point:"+points;
p3=0;
}
if(p4==1 && randh4[0]==beside && randv4[0]== j){
point4.remove();
points = points + 100;
se4d.currentTime=0;
se4d.play();
pcount.innerHTML="Point:"+points;
p4=0;
}
if(p5==1 && randh5[0]==beside && randv5[0]== j){
point5.remove();
points = points + 100;
se4e.currentTime=0;
se4e.play();
pcount.innerHTML="Point:"+points;
p5=0;
}
player.style.left=beside+"px";
player.style.transform="rotateY(180deg)";
if(ing==0){
if(walk==0){
walk=1;
player.setAttribute("src","images/walk.png");
}
else{
walk=0;
player.setAttribute("src","images/player.png");
}
}
}
else{
se3.currentTime=0;
se3.play();
}
}
function rightb(){
if(beside != 270){
se2.currentTime=0;
se2.play();
beside=beside+30;
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(p1==1 && randh1[0]==beside && randv1[0]== j){
point1.remove();
points = points + 100;
se4.currentTime=0;
se4.play();
pcount.innerHTML="Point:"+points;
p1=0;
}
if(p2==1 && randh2[0]==beside && randv2[0]== j){
point2.remove();
points = points + 100;
se4b.currentTime=0;
se4b.play();
pcount.innerHTML="Point:"+points;
p2=0;
}
if(p3==1 && randh3[0]==beside && randv3[0]== j){
point3.remove();
points = points + 100;
se4c.currentTime=0;
se4c.play();
pcount.innerHTML="Point:"+points;
p3=0;
}
if(p4==1 && randh4[0]==beside && randv4[0]== j){
point4.remove();
points = points + 100;
se4d.currentTime=0;
se4d.play();
pcount.innerHTML="Point:"+points;
p4=0;
}
if(p5==1 && randh5[0]==beside && randv5[0]== j){
point5.remove();
points = points + 100;
se4e.currentTime=0;
se4e.play();
pcount.innerHTML="Point:"+points;
p5=0;
}
player.style.left=beside+"px";
player.style.transform="rotateY(0deg)";
if(ing==0){
if(walk==0){
walk=1;
player.setAttribute("src","images/walk.png");
}
else{
walk=0;
player.setAttribute("src","images/player.png");
}
}
}
else{
se3.currentTime=0;
se3.play();
}
}
function jumpb(){
if(ing==0){
se1.currentTime=0;
se1.play();
j = 150;
jum = setInterval('jumping()',20);
player.setAttribute("src","images/jump.png");
ing=1
walk=0;
}
}
function jumping(){
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(p1==1 && randh1[0]==beside && randv1[0]== j){
point1.remove();
points = points + 100;
se4.currentTime=0;
se4.play();
pcount.innerHTML="Point:"+points;
p1=0;
}
if(p2==1 && randh2[0]==beside && randv2[0]== j){
point2.remove();
points = points + 100;
se4b.currentTime=0;
se4b.play();
pcount.innerHTML="Point:"+points;
p2=0;
}
if(p3==1 && randh3[0]==beside && randv3[0]== j){
point3.remove();
points = points + 100;
se4c.currentTime=0;
se4c.play();
pcount.innerHTML="Point:"+points;
p3=0;
}
if(p4==1 && randh4[0]==beside && randv4[0]== j){
point4.remove();
points = points + 100;
se4d.currentTime=0;
se4d.play();
pcount.innerHTML="Point:"+points;
p4=0;
}
if(p5==1 && randh5[0]==beside && randv5[0]== j){
point5.remove();
points = points + 100;
se4e.currentTime=0;
se4e.play();
pcount.innerHTML="Point:"+points;
p5=0;
}
if(j==0){
clearInterval(jum);
fall = setInterval('falling()',45);
}
else{
j=j-30;
player.style.top=j+"px";
}
}
function falling(){
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(p1==1 && randh1[0]==beside && randv1[0]== j){
point1.remove();
points = points + 100;
se4.currentTime=0;
se4.play();
pcount.innerHTML="Point:"+points;
p1=0;
}
if(p2==1 && randh2[0]==beside && randv2[0]== j){
point2.remove();
points = points + 100;
se4b.currentTime=0;
se4b.play();
pcount.innerHTML="Point:"+points;
p2=0;
}
if(p3==1 && randh3[0]==beside && randv3[0]== j){
point3.remove();
points = points + 100;
se4c.currentTime=0;
se4c.play();
pcount.innerHTML="Point:"+points;
p3=0;
}
if(p4==1 && randh4[0]==beside && randv4[0]== j){
point4.remove();
points = points + 100;
se4d.currentTime=0;
se4d.play();
pcount.innerHTML="Point:"+points;
p4=0;
}
if(p5==1 && randh5[0]==beside && randv5[0]== j){
point5.remove();
points = points + 100;
se4e.currentTime=0;
se4e.play();
pcount.innerHTML="Point:"+points;
p5=0;
}
if(j==150){
clearInterval(fall);
ing=0;
player.setAttribute("src","images/player.png");
}
else{
j=j+30;
player.style.top=j+"px";
}
}
function p(){
t++;
if(t%10==1 || t%10==6){
if(p1==0){
dis.insertAdjacentHTML('afterbegin','<span class="po" id="point1"></span>');
shuffleArray(randv1);
shuffleArray(randh1);
point1.style.top=randv1[0]+"px";
point1.style.left=randh1[0]+"px";
p1 = 1;
if(p1==1 && randh1[0]==beside && randv1[0]== j){
point1.remove();
points = points + 100;
se4.currentTime=0;
se4.play();
pcount.innerHTML="Point:"+points;
p1=0;
}
}
}
if(t%10==2 || t%10==7){
if(p2==0){
dis.insertAdjacentHTML('afterbegin','<span class="po" id="point2"></span>');
shuffleArray(randv2);
shuffleArray(randh2);
point2.style.top=randv2[0]+"px";
point2.style.left=randh2[0]+"px";
p2 = 1;
if(p2==1 && randh2[0]==beside && randv2[0]== j){
point2.remove();
points = points + 100;
se4b.currentTime=0;
se4b.play();
pcount.innerHTML="Point:"+points;
p2=0;
}
}
}
if(t%10==3 || t%10==8){
if(p3==0){
dis.insertAdjacentHTML('afterbegin','<span class="po" id="point3"></span>');
shuffleArray(randv3);
shuffleArray(randh3);
point3.style.top=randv3[0]+"px";
point3.style.left=randh3[0]+"px";
p3 = 1;
if(p3==1 && randh3[0]==beside && randv3[0]== j){
point3.remove();
points = points + 100;
se4c.currentTime=0;
se4c.play();
pcount.innerHTML="Point:"+points;
p3=0;
}
}
}
if(t%10==4 || t%10==9){
if(p4==0){
dis.insertAdjacentHTML('afterbegin','<span class="po" id="point4"></span>');
shuffleArray(randv4);
shuffleArray(randh4);
point4.style.top=randv4[0]+"px";
point4.style.left=randh4[0]+"px";
p4 = 1;
if(p4==1 && randh4[0]==beside && randv4[0]== j){
point4.remove();
points = points + 100;
se4d.currentTime=0;
se4d.play();
pcount.innerHTML="Point:"+points;
p4=0;
}
}
}
if(t%10==0 || t%10==5){
if(p5==0){
dis.insertAdjacentHTML('afterbegin','<span class="po" id="point5"></span>');
shuffleArray(randv5);
shuffleArray(randh5);
point5.style.top=randv5[0]+"px";
point5.style.left=randh5[0]+"px";
p5 = 1;
if(p5==1 && randh5[0]==beside && randv5[0]== j){
point5.remove();
points = points + 100;
se4e.currentTime=0;
se4e.play();
pcount.innerHTML="Point:"+points;
p5=0;
}
}
}
}
function e(){
t2++
if(t2==300 && m1c==0){
dis.insertAdjacentHTML('afterbegin','<img class="enemy" id="enemy1" src="images/enemy.png">');
shuffleArray(erandv1);
shuffleArray(erandh1);
enemy1.style.top=erandv1[0]+"px";
enemy1.style.left=erandh1[0]+"px";
s1=erandh1[0];
m1c=1;
move1 = setInterval('m1()',700);
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
}
else if(t2==600 && m2c==0){
dis.insertAdjacentHTML('afterbegin','<img class="enemy" id="enemy2" src="images/enemy.png">');
shuffleArray(erandv2);
shuffleArray(erandh2);
enemy2.style.top=erandv2[0]+"px";
enemy2.style.left=erandh2[0]+"px";
s2=erandh2[0];
m2c=1;
move2 = setInterval('m2()',700);
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
}
else if(t2==900 && m3c==0){
dis.insertAdjacentHTML('afterbegin','<img class="enemy" id="enemy3" src="images/enemy.png">');
shuffleArray(erandv3);
shuffleArray(erandh3);
enemy3.style.top=erandv3[0]+"px";
enemy3.style.left=erandh3[0]+"px";
s3=erandh3[0];
m3c=1;
move3 = setInterval('m3()',700);
t2=0;
clearInterval(ene);
enemyc=0;
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
}
}
function m1(){
if(erandh1[0]==0){
s1 = s1 + 30;
}
else{
s1 = s1 - 30;
}
enemy1.style.left=s1+"px";
if(s1==beside && erandv1[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(erandh1[0]==0){
if(s1==300){
enemy1.remove();
clearInterval(move1);
m1c=0;
ene = setInterval('e()',10);
enemyc=1;
}
}
else{
if(s1==-30){
enemy1.remove();
clearInterval(move1);
m1c=0;
ene = setInterval('e()',10);
enemyc=1;
}
}
}
function m2(){
if(erandh2[0]==0){
s2 = s2 + 30;
}
else{
s2 = s2 - 30;
}
enemy2.style.left=s2+"px";
if(s2==beside && erandv2[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(erandh2[0]==0){
if(s2==300){
enemy2.remove();
clearInterval(move2);
m2c=0;
}
}
else{
if(s2==-30){
enemy2.remove();
clearInterval(move2);
m2c=0;
}
}
}
function m3(){
if(erandh3[0]==0){
s3 = s3 + 30;
}
else{
s3 = s3 - 30;
}
enemy3.style.left=s3+"px";
if(s3==beside && erandv3[0]== j){
if(m1c==1){
clearInterval(move1);
}
if(m2c==1){
clearInterval(move2);
}
if(m3c==1){
clearInterval(move3);
}
if(pointc==1){
clearInterval(point);
}
if(enemyc==1){
clearInterval(ene);
}
go();
}
if(erandh3[0]==0){
if(s3==300){
enemy3.remove();
clearInterval(move3);
m3c=0;
}
}
else{
if(s3==-30){
enemy3.remove();
clearInterval(move3);
m3c=0;
}
}
}
function start(){
se6.currentTime=0;
se6.play();
bgm1.currentTime=0;
bgm1.play();
bgm1.loop = true;
highscore.innerHTML="High Score:"+localStorage.hs;
jump.setAttribute('onclick','jumpb()');
left.setAttribute('onclick','leftb()');
right.setAttribute('onclick','rightb()');
point=setInterval('p()',1000);
pointc=1;
ene = setInterval('e()',10);
enemyc=1;
cover.style.display="none";
}
function go(){
se5.currentTime=0;
se5.play();
bgm1.pause();
bgm2.currentTime=0;
bgm2.play();
bgm2.loop = true;
if(points > localStorage.hs){
se7.currentTime=0;
se7.play();
localStorage.hs=points;
pop.style.display="block";
pom.innerHTML="ハイスコア更新！！";
}
highscore.innerHTML="High Score:"+localStorage.hs;
player.style.display="none";
gameover.style.display="block";
jump.setAttribute("onclick","empty()");
left.setAttribute("onclick","empty()");
right.setAttribute("onclick","empty()");
}
function reset(){
se6.currentTime=0;
se6.play();
bgm2.pause();
if(m1c==1){
enemy1.remove();
}
if(m2c==1){
enemy2.remove();
}
if(m3c==1){
enemy3.remove();
}
if(p1==1){
point1.remove();
}
if(p2==1){
point2.remove();
}
if(p3==1){
point3.remove();
}
if(p4==1){
point4.remove();
}
if(p5==1){
point5.remove();
}
points = 0;
s1=1;
s2=1;
s3=1;
pointc=0;
enemyc=0;
m1c=0;
m2c=0;
m3c=0;
t2=0;
erandv1 = [0,30,60,90,120,150];
erandv2 = [0,30,60,90,120,150];
erandv3 = [0,30,60,90,120,150];
erandh1 = [0,270];
erandh2 = [0,270];
erandh3 = [0,270];
randv1 = [0,30,60,90,120,150];
randv2 = [0,30,60,90,120,150];
randv3 = [0,30,60,90,120,150];
randv4 = [0,30,60,90,120,150];
randv5 = [0,30,60,90,120,150];
randh1 = [0,30,60,90,120,150,180,210,240,270];
randh2 = [0,30,60,90,120,150,180,210,240,270];
randh3 = [0,30,60,90,120,150,180,210,240,270];
randh4 = [0,30,60,90,120,150,180,210,240,270];
randh5 = [0,30,60,90,120,150,180,210,240,270];
p1=0;
p2=0;
p3=0;
p4=0;
p5=0;
t=0;
j=150;
walk=0;
ing=0;
beside=0;
player.style.left=beside+"px";
player.style.display="inline";
player.style.top=j+"px";
pcount.innerHTML="Point:"+points;
gameover.style.display="none";
player.setAttribute("src","images/player.png");
cover.style.display="flex";
player.style.transform="rotateY(0deg)";
}
function ok(){
se6.currentTime=0;
se6.play();
pop.style.display="none";
}
function empty(){
se8.currentTime=0;
se8.play();
}