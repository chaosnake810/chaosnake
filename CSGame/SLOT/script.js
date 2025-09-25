let sto1=1;
let sto2=1;
let sto3=1;
let lst=1;
let ch=0;
let o=21;
let tw=21;
let th=21;
let spin=0;
let bs=0;
let se1 = new Audio('sounds/maxbet.mp3');
let se2 = new Audio('sounds/bet.mp3');
let se3 = new Audio('sounds/stop.mp3');
let se4 = new Audio('sounds/lever.mp3');
let se5 = new Audio('sounds/lever_empty.mp3');
let se6 = new Audio('sounds/button.mp3');
let se7 = new Audio('sounds/ok.mp3');
let se8 = new Audio('sounds/line.mp3');
let se9 = new Audio('sounds/reel.mp3');
let bell="<img width=50 src=images/bell.png>";
let seven ="<img width=50 src=images/seven.png>";
let replay="<img width=50 src=images/replay.png>";
let wame="<img width=50 src=images/wame.png>";
let bar="<img width=50 src=images/bar.png>";
let cherry="<img width=50 src=images/cherry.png>";
let logo ="<img width=50 src=images/logo.png>";
let stoped=0;
reel1=[wame,seven,replay,bell,replay,bell,bar,cherry,bell,replay,bell,seven,logo,bell,replay,bell,cherry,bar,bell,replay,bell];
reel2=[replay,seven,bell,cherry,replay,wame,bell,cherry,replay,bar,bell,cherry,replay,wame,bell,cherry,replay,bar,bell,cherry,logo];
reel3=[bell,seven,bar,cherry,replay,bell,logo,wame,replay,bell,logo,wame,replay,bell,logo,wame,replay,bell,logo,wame,replay];
function tes1(){
if(bs != 0 && ch==1){
bs=0;
ch=0;
}
if(bs==0){
se5.currentTime = 0;
se5.play();
}
else{
if(stoped==4){
stoped=0;
}
if(stoped==0){
sps = setInterval('spse()',2500);
se9.currentTime="0";
se9.play();
se4.currentTime = 0;
se4.play();
if(lst==0){
clearInterval(li);
bd.style.background="#00aaff";
}
bt1.style.background="radial-gradient(#ff7777,#ee0000)";
bt2.style.background="radial-gradient(#ff7777,#ee0000)";
bt3.style.background="radial-gradient(#ff7777,#ee0000)";
bets.innerHTML="BET:0";
localStorage.md = meds;
sto1=0;
sto2=0;
sto3=0;
spin=1;
stoped=1;
a = setInterval("reel1sp()",10);
c = setInterval("reel2sp()",10);
e = setInterval("reel3sp()",10);
}
else if(stoped != 4){
se5.currentTime = 0;
se5.play();
}
}
}
function reel1sp(){
if(o > 0){
o--;
if(o==20){
one.innerHTML=reel1[o]+"<br>"+reel1[0]+"<br>"+reel1[1];
left_top=o;
left_center=0;
left_bottom=1;
}
else if(o==19){
one.innerHTML=reel1[o]+"<br>"+reel1[20]+"<br>"+reel1[0];
left_top=o;
left_center=20;
left_bottom=0;
}
else{
one.innerHTML=reel1[o]+"<br>"+reel1[o+1]+"<br>"+reel1[o+2];
left_top=o;
left_center=o+1;
left_bottom=o+2;
}
}
else{
o=20;
one.innerHTML=reel1[o]+"<br>"+reel1[0]+"<br>"+reel1[1];
left_top=o;
left_center=0;
left_bottom=1;
}
}
function reel2sp(){
if(tw > 0){
tw--;
if(tw==20){
two.innerHTML=reel2[tw]+"<br>"+reel2[0]+"<br>"+reel2[1];
center_top=tw;
center_center=0;
center_bottom=1;
}
else if(tw==19){
two.innerHTML=reel2[tw]+"<br>"+reel2[20]+"<br>"+reel2[0];
center_top=tw;
center_center=20;
center_bottom=0;
}
else{
two.innerHTML=reel2[tw]+"<br>"+reel2[tw+1]+"<br>"+reel2[tw+2];
center_top=tw;
center_center=tw+1;
center_bottom=tw+2;
}
}
else{
tw=20;
two.innerHTML=reel2[tw]+"<br>"+reel2[0]+"<br>"+reel2[1];
center_top=tw;
center_center=0;
center_bottom=1;
}
}
function reel3sp(){
if(th > 0){
th--;
if(th==20){
three.innerHTML=reel3[th]+"<br>"+reel3[0]+"<br>"+reel3[1];
right_top=th;
right_center=0;
right_bottom=1;
}
else if(th==19){
three.innerHTML=reel3[th]+"<br>"+reel3[20]+"<br>"+reel3[0];
right_top=th;
right_center=20;
right_bottom=0;
}
else{
three.innerHTML=reel3[th]+"<br>"+reel3[th+1]+"<br>"+reel3[th+2];
right_top=th;
right_center=th+1;
right_bottom=th+2;
}
}
else{
th=20;
three.innerHTML=reel3[th]+"<br>"+reel3[0]+"<br>"+reel3[1];
right_top=th;
right_center=0;
right_bottom=1;
}
}
function stop1(){
if(sto1==1){
se6.currentTime = 0;
se6.play();
}
clearInterval(a);
if(sto1==0){
se3.currentTime = 0;
se3.play();
bt1.style.background="radial-gradient(#aa0000,#dd0000)";
if(stoped==3){
clearInterval(sps);
se9.pause();
spin=0;
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
ch=1;
if(bs >= 1){
if(reel1[left_center] == reel2[center_center] && reel1[left_center] == reel3[right_center]){
count=0;
image=reel1[left_center];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
ch=0;
spin=1;
}
}
}
if(bs == 2 || bs == 3 || bs == 4 || bs == 5){
if(reel1[left_top] == reel2[center_top] && reel1[left_top] == reel3[right_top]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
if(bs == 3 || bs == 4){
if(reel1[left_bottom] == reel2[center_bottom] && reel1[left_bottom] == reel3[right_bottom]){
count=0;
image=reel1[left_bottom];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_top] == reel2[center_center] && reel1[left_top] == reel3[right_bottom]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_bottom] == reel2[center_center] && reel1[left_bottom] == reel3[right_top]){
count=0;
image=reel1[left_bottom]
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
localStorage.md=meds;
}
stoped++;
}
sto1=1;
}
function stop2(){
if(sto2==1){
se6.currentTime = 0;
se6.play();
}
clearInterval(c);
if(sto2==0){
se3.currentTime = 0;
se3.play();
bt2.style.background="radial-gradient(#aa0000,#dd0000)";
if(stoped==3){
clearInterval(sps);
se9.pause();
spin=0;
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
ch=1;
if(bs >= 1){
if(reel1[left_center] == reel2[center_center] && reel1[left_center] == reel3[right_center]){
count=0;
image=reel1[left_center];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
ch=0;
spin=1;
}
}
}
if(bs == 2 || bs == 3 || bs == 4 || bs == 5){
if(reel1[left_top] == reel2[center_top] && reel1[left_top] == reel3[right_top]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
if(bs == 3 || bs == 4){
if(reel1[left_bottom] == reel2[center_bottom] && reel1[left_bottom] == reel3[right_bottom]){
count=0;
image=reel1[left_bottom];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_top] == reel2[center_center] && reel1[left_top] == reel3[right_bottom]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_bottom] == reel2[center_center] && reel1[left_bottom] == reel3[right_top]){
count=0;
image=reel1[left_bottom]
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
localStorage.md=meds;
}
stoped++;
}
sto2=1;
}
function stop3(){
if(sto3==1){
se6.currentTime = 0;
se6.play();
}
clearInterval(e);
if(sto3==0){
se3.currentTime = 0;
se3.play();
bt3.style.background="radial-gradient(#aa0000,#dd0000)";
if(stoped==3){
clearInterval(sps);
se9.pause();
spin=0;
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
ch=1;
if(bs >= 1){
if(reel1[left_center] == reel2[center_center] && reel1[left_center] == reel3[right_center]){
count=0;
image=reel1[left_center];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
ch=0;
spin=1;
}
}
}
if(bs == 2 || bs == 3 || bs == 4 || bs == 5){
if(reel1[left_top] == reel2[center_top] && reel1[left_top] == reel3[right_top]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
if(bs == 3 || bs == 4){
if(reel1[left_bottom] == reel2[center_bottom] && reel1[left_bottom] == reel3[right_bottom]){
count=0;
image=reel1[left_bottom];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_top] == reel2[center_center] && reel1[left_top] == reel3[right_bottom]){
count=0;
image=reel1[left_top];
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
if(reel1[left_bottom] == reel2[center_center] && reel1[left_bottom] == reel3[right_top]){
count=0;
image=reel1[left_bottom]
li = setInterval('line()',30);
if(image==bell){
meds = meds+5;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==seven){
meds = meds+200;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==wame){
meds = meds+15;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==bar){
meds = meds+350;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==logo){
meds = meds+100;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==cherry){
meds = meds+50;
medals.innerHTML="MEDAL:"+meds;
bs=0;
ch=0;
}
else if(image==replay){
if(bs==1 || bs==6){
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==2 || bs==5){
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
else if(bs==3 || bs==4){
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
spin=1;
ch=0;
}
}
}
localStorage.md=meds;
}
stoped++;
}
sto3=1;
}
function mb(){
if(bs != 0 && ch==1){
bs=0;
ch=0;
}
if(spin==1 || bs==3 || bs== 4){
se6.currentTime = 0;
se6.play();
}
if(meds > 2){
if(bs == 1){
if(spin==0){
se1.currentTime = 0;
se1.play();
meds = meds-2;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
bs=4;
}
}
else if(bs == 2){
if(spin==0){
se1.currentTime = 0;
se1.play();
meds = meds-1;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
bs=4;
}
}
else if(bs == 0){
if(spin==0){
se1.currentTime = 0;
se1.play();
meds = meds-3;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
bs=4;
}
}
}
}
function betone(){
if(bs != 0 && ch==1){
bs=0;
ch=0;
}
if(meds == 0){
if(bs==4){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=1
meds = meds+2;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else if(bs==3){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=0
meds = meds+3;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:0";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else if(bs==5){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=0
meds = meds+2;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:0";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else if(bs==6){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=0
meds = meds+1;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:0";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
}
else{
if(bs == 0){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=1
meds = meds-1;
if(meds==0){
bs=6
}
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else if(bs == 1){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=2
meds = meds-1;
if(meds==0){
bs=5
}
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:2";
leftt.style.color="#333333";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else if(bs == 2){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=3
meds = meds-1;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:3";
leftt.style.color="red";
leftt2.style.color="red";
leftc.style.color="red";
leftb.style.color="red";
leftb2.style.color="red";
rightt.style.color="red";
rightt2.style.color="red";
rightc.style.color="red";
rightb.style.color="red";
rightb2.style.color="red";
}
}
else if(bs==3){
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=0
meds = meds+3;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:0";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="#333333";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="#333333";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
else{
if(spin==0){
se2.currentTime = 0;
se2.play();
bs=1
meds = meds+2;
medals.innerHTML="MEDAL:"+meds;
bets.innerHTML="BET:1";
leftt.style.color="#333333";
leftt2.style.color="#333333";
leftc.style.color="red";
leftb.style.color="#333333";
leftb2.style.color="#333333";
rightt.style.color="#333333";
rightt2.style.color="#333333";
rightc.style.color="red";
rightb.style.color="#333333";
rightb2.style.color="#333333";
}
}
if(spin==1){
se6.currentTime = 0;
se6.play();
}
}
}
function line(){
if(count==0){
se8.currentTime="0";
se8.play();
}
lst=0;
count++;
if(count % 2==0){
bd.style.background="#00aaff";
}
else{
bd.style.background="yellow";
}
if(count==30){
lst=1;
clearInterval(li)
}
}
function med(){
se1.load();
se2.load();
se3.load();
se4.load();
se5.load();
se6.load();
se7.load();
se8.load();
se9.load();
var images = [
'images/seven.png','images/wame.png','images/bell.png','images/replay.png','images/cherry.png','images/logo.png','images/bar.png'
  ];

  for (i = 0; i < images.length; i++){
    var img = document.createElement('img');
    img.src = images[i];
  }
let today = new Date();
let year = String(today.getFullYear());
let month = String(today.getMonth());
let date = String(today.getDate());
let day = year + month + date;
if(localStorage.loginsl != day){
message.innerHTML="LOGIN BONUS!<br>50MEDAL GET!";
popup();
localStorage.loginsl = day;
meds = Number(meds) + 50;
localStorage.md = meds;
}
medals.innerHTML="MEDAL:"+localStorage.md;
load.style.display="none";
}
if(localStorage.md==undefined){
localStorage.md=200;
}
let meds=localStorage.md;
function popup(){
pop.style.display="flex";
}
function ok(){
pop.style.display="none";
se7.currentTime="0";
se7.play();
}
function spse(){
se9.currentTime="0";
se9.play();
}