if(localStorage.hisc == undefined){
localStorage.hisc = 0;
}
let se1 = new Audio('sounds/turn.mp3');
let se2 = new Audio('sounds/turn.mp3');
let st = 0;
let timer;
let count = 0;
let one = 0;
let two = 0;
let m = 0;
let p1 = "";
let pair1 = "";
let p2 = "";
let pair2 = "";
let heart = "<img width=15px src=images/mark_heart.gif>"
let dia ="<img width=15px src=images/mark_dia.gif>"
let  spade="<img width=15px src=images/mark_spade.gif>"
let club ="<img width=15px src=images/mark_club.gif>"
let ten = "<span class=numten>10</span>"
let joker ="<span class=jo>JOKER</span&gt;";
let cards = [heart+'Ａ',dia+'Ａ',spade+'Ａ',club+'Ａ',heart+'２',dia+'２',spade+'２',club+'２',heart+'３',dia+'３',spade+'３',club+'３',heart+'４',dia+'４',spade+'４',club+'４',heart+'５',dia+'５',spade+'５',club+'５',heart+'６',dia+'６',spade+'６',club+'６',heart+'７',dia+'７',spade+'７',club+'７',heart+'８',dia+'８',spade+'８',club+'８',heart+'９',dia+'９',spade+'９',club+'９',heart+ten,dia+ten,spade+ten,club+ten,heart+'Ｊ',dia+'Ｊ',spade+'Ｊ',club+'Ｊ',heart+'Ｑ',dia+'Ｑ',spade+'Ｑ',club+'Ｑ',heart+'Ｋ',dia+'Ｋ',spade+'Ｋ',club+'Ｋ',joker,joker];
function shuffleArray(cards){
    cards.sort(()=> Math.random() - 0.5);
}
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
function ca1(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[0];
oneif = cards[0].slice(-1);
document.getElementById("c1").innerHTML = one;
m = 1;
p1 = c1;
pair1 = document.getElementById("c1");
}
else if(m == 1){
if(p1 == c1){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[0];
twoif = cards[0].slice(-1);
document.getElementById("c1").innerHTML = two;
p2 = c1;
pair2 = document.getElementById("c1");
int();
}
}
}
function ca2(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[1];
oneif = cards[1].slice(-1);
document.getElementById("c2").innerHTML = one;
m = 1;
p1 = c2;
pair1 = document.getElementById("c2");
}
else if(m == 1){
if(p1 == c2){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[1];
twoif = cards[1].slice(-1);
document.getElementById("c2").innerHTML = two;
p2 = c2;
pair2 = document.getElementById("c2");
int();
}
}
}
function ca3(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[2];
oneif = cards[2].slice(-1);
document.getElementById("c3").innerHTML = one;
m = 1;
p1 = c3;
pair1 = document.getElementById("c3");
}
else if(m == 1){
if(p1 == c3){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[2];
twoif = cards[2].slice(-1);
document.getElementById("c3").innerHTML = two;
p2 = c3;
pair2 = document.getElementById("c3");
int();
}
}
}
function ca4(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[3];
oneif = cards[3].slice(-1);
document.getElementById("c4").innerHTML = one;
m = 1;
p1 = c4;
pair1 = document.getElementById("c4");
}
else if(m == 1){
if(p1 == c4){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[3];
twoif = cards[3].slice(-1);
document.getElementById("c4").innerHTML = two;
p2 = c4;
pair2 = document.getElementById("c4");
int();
}
}
}
function ca5(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[4];
oneif = cards[4].slice(-1);
document.getElementById("c5").innerHTML = one;
m = 1;
p1 = c5;
pair1 = document.getElementById("c5");
}
else if(m == 1){
if(p1 == c5){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[4];
twoif = cards[4].slice(-1);
document.getElementById("c5").innerHTML = two;
p2 = c5;
pair2 = document.getElementById("c5");
int();
}
}
}
function ca6(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[5];
oneif = cards[5].slice(-1);
document.getElementById("c6").innerHTML = one;
m = 1;
p1 = c6;
pair1 = document.getElementById("c6");
}
else if(m == 1){
if(p1 == c6){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[5];
twoif = cards[5].slice(-1);
document.getElementById("c6").innerHTML = two;
p2 = c6;
pair2 = document.getElementById("c6");
int();
}
}
}
function ca7(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[6];
oneif = cards[6].slice(-1);
document.getElementById("c7").innerHTML = one;
m = 1;
p1 = c7;
pair1 = document.getElementById("c7");
}
else if(m == 1){
if(p1 == c7){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[6];
twoif = cards[6].slice(-1);
document.getElementById("c7").innerHTML = two;
p2 = c7;
pair2 = document.getElementById("c7");
int();
}
}
}
function ca8(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[7];
oneif = cards[7].slice(-1);
document.getElementById("c8").innerHTML = one;
m = 1;
p1 = c8;
pair1 = document.getElementById("c8");
}
else if(m == 1){
if(p1 == c8){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[7];
twoif = cards[7].slice(-1);
document.getElementById("c8").innerHTML = two;
p2 = c8;
pair2 = document.getElementById("c8");
int();
}
}
}
function ca9(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[8];
oneif = cards[8].slice(-1);
document.getElementById("c9").innerHTML = one;
m = 1;
p1 = c9;
pair1 = document.getElementById("c9");
}
else if(m == 1){
if(p1 == c9){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[8];
twoif = cards[8].slice(-1);
document.getElementById("c9").innerHTML = two;
p2 = c9;
pair2 = document.getElementById("c9");
int();
}
}
}
function ca10(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[9];
oneif = cards[9].slice(-1);
document.getElementById("c10").innerHTML = one;
m = 1;
p1 = c10;
pair1 = document.getElementById("c10");
}
else if(m == 1){
if(p1 == c10){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[9];
twoif = cards[9].slice(-1);
document.getElementById("c10").innerHTML = two;
p2 = c10;
pair2 = document.getElementById("c10");
int();
}
}
}
function ca11(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[10];
oneif = cards[10].slice(-1);
document.getElementById("c11").innerHTML = one;
m = 1;
p1 = c11;
pair1 = document.getElementById("c11");
}
else if(m == 1){
if(p1 == c11){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[10];
twoif = cards[10].slice(-1);
document.getElementById("c11").innerHTML = two;
p2 = c11;
pair2 = document.getElementById("c11");
int();
}
}
}
function ca12(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[11];
oneif = cards[11].slice(-1);
document.getElementById("c12").innerHTML = one;
m = 1;
p1 = c12;
pair1 = document.getElementById("c12");
}
else if(m == 1){
if(p1 == c12){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[11];
twoif = cards[11].slice(-1);
document.getElementById("c12").innerHTML = two;
p2 = c12;
pair2 = document.getElementById("c12");
int();
}
}
}
function ca13(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[12];
oneif = cards[12].slice(-1);
document.getElementById("c13").innerHTML = one;
m = 1;
p1 = c13;
pair1 = document.getElementById("c13");
}
else if(m == 1){
if(p1 == c13){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[12];
twoif = cards[12].slice(-1);
document.getElementById("c13").innerHTML = two;
p2 = c13;
pair2 = document.getElementById("c13");
int();
}
}
}
function ca14(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[13];
oneif = cards[13].slice(-1);
document.getElementById("c14").innerHTML = one;
m = 1;
p1 = c14;
pair1 = document.getElementById("c14");
}
else if(m == 1){
if(p1 == c14){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[13];
twoif = cards[13].slice(-1);
document.getElementById("c14").innerHTML = two;
p2 = c14;
pair2 = document.getElementById("c14");
int();
}
}
}
function ca15(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[14];
oneif = cards[14].slice(-1);
document.getElementById("c15").innerHTML = one;
m = 1;
p1 = c15;
pair1 = document.getElementById("c15");
}
else if(m == 1){
if(p1 == c15){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[14];
twoif = cards[14].slice(-1);
document.getElementById("c15").innerHTML = two;
p2 = c15;
pair2 = document.getElementById("c15");
int();
}
}
}
function ca16(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[15];
oneif = cards[15].slice(-1);
document.getElementById("c16").innerHTML = one;
m = 1;
p1 = c16;
pair1 = document.getElementById("c16");
}
else if(m == 1){
if(p1 == c16){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[15];
twoif = cards[15].slice(-1);
document.getElementById("c16").innerHTML = two;
p2 = c16;
pair2 = document.getElementById("c16");
int();
}
}
}
function ca17(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[16];
oneif = cards[16].slice(-1);
document.getElementById("c17").innerHTML = one;
m = 1;
p1 = c17;
pair1 = document.getElementById("c17");
}
else if(m == 1){
if(p1 == c17){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[16];
twoif = cards[16].slice(-1);
document.getElementById("c17").innerHTML = two;
p2 = c17;
pair2 = document.getElementById("c17");
int();
}
}
}
function ca18(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[17];
oneif = cards[17].slice(-1);
document.getElementById("c18").innerHTML = one;
m = 1;
p1 = c18;
pair1 = document.getElementById("c18");
}
else if(m == 1){
if(p1 == c18){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[17];
twoif = cards[17].slice(-1);
document.getElementById("c18").innerHTML = two;
p2 = c18;
pair2 = document.getElementById("c18");
int();
}
}
}
function ca19(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[18];
oneif = cards[18].slice(-1);
document.getElementById("c19").innerHTML = one;
m = 1;
p1 = c19;
pair1 = document.getElementById("c19");
}
else if(m == 1){
if(p1 == c19){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[18];
twoif = cards[18].slice(-1);
document.getElementById("c19").innerHTML = two;
p2 = c19;
pair2 = document.getElementById("c19");
int();
}
}
}
function ca20(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[19];
oneif = cards[19].slice(-1);
document.getElementById("c20").innerHTML = one;
m = 1;
p1 = c20;
pair1 = document.getElementById("c20");
}
else if(m == 1){
if(p1 == c20){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[19];
twoif = cards[19].slice(-1);
document.getElementById("c20").innerHTML = two;
p2 = c20;
pair2 = document.getElementById("c20");
int();
}
}
}
function ca21(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[20];
oneif = cards[20].slice(-1);
document.getElementById("c21").innerHTML = one;
m = 1;
p1 = c21;
pair1 = document.getElementById("c21");
}
else if(m == 1){
if(p1 == c21){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[20];
twoif = cards[20].slice(-1);
document.getElementById("c21").innerHTML = two;
p2 = c21;
pair2 = document.getElementById("c21");
int();
}
}
}
function ca22(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[21];
oneif = cards[21].slice(-1);
document.getElementById("c22").innerHTML = one;
m = 1;
p1 = c22;
pair1 = document.getElementById("c22");
}
else if(m == 1){
if(p1 == c22){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[21];
twoif = cards[21].slice(-1);
document.getElementById("c22").innerHTML = two;
p2 = c22;
pair2 = document.getElementById("c22");
int();
}
}
}
function ca23(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[22];
oneif = cards[22].slice(-1);
document.getElementById("c23").innerHTML = one;
m = 1;
p1 = c23;
pair1 = document.getElementById("c23");
}
else if(m == 1){
if(p1 == c23){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[22];
twoif = cards[22].slice(-1);
document.getElementById("c23").innerHTML = two;
p2 = c23;
pair2 = document.getElementById("c23");
int();
}
}
}
function ca24(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[23];
oneif = cards[23].slice(-1);
document.getElementById("c24").innerHTML = one;
m = 1;
p1 = c24;
pair1 = document.getElementById("c24");
}
else if(m == 1){
if(p1 == c24){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[23];
twoif = cards[23].slice(-1);
document.getElementById("c24").innerHTML = two;
p2 = c24;
pair2 = document.getElementById("c24");
int();
}
}
}
function ca25(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[24];
oneif = cards[24].slice(-1);
document.getElementById("c25").innerHTML = one;
m = 1;
p1 = c25;
pair1 = document.getElementById("c25");
}
else if(m == 1){
if(p1 == c25){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[24];
twoif = cards[24].slice(-1);
document.getElementById("c25").innerHTML = two;
p2 = c25;
pair2 = document.getElementById("c25");
int();
}
}
}
function ca26(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[25];
oneif = cards[25].slice(-1);
document.getElementById("c26").innerHTML = one;
m = 1;
p1 = c26;
pair1 = document.getElementById("c26");
}
else if(m == 1){
if(p1 == c26){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[25];
twoif = cards[25].slice(-1);
document.getElementById("c26").innerHTML = two;
p2 = c26;
pair2 = document.getElementById("c26");
int();
}
}
}
function ca27(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[26];
oneif = cards[26].slice(-1);
document.getElementById("c27").innerHTML = one;
m = 1;
p1 = c27;
pair1 = document.getElementById("c27");
}
else if(m == 1){
if(p1 == c27){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[26];
twoif = cards[26].slice(-1);
document.getElementById("c27").innerHTML = two;
p2 = c27;
pair2 = document.getElementById("c27");
int();
}
}
}
function ca28(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[27];
oneif = cards[27].slice(-1);
document.getElementById("c28").innerHTML = one;
m = 1;
p1 = c28;
pair1 = document.getElementById("c28");
}
else if(m == 1){
if(p1 == c28){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[27];
twoif = cards[27].slice(-1);
document.getElementById("c28").innerHTML = two;
p2 = c28;
pair2 = document.getElementById("c28");
int();
}
}
}
function ca29(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[28];
oneif = cards[28].slice(-1);
document.getElementById("c29").innerHTML = one;
m = 1;
p1 = c29;
pair1 = document.getElementById("c29");
}
else if(m == 1){
if(p1 == c29){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[28];
twoif = cards[28].slice(-1);
document.getElementById("c29").innerHTML = two;
p2 = c29;
pair2 = document.getElementById("c29");
int();
}
}
}
function ca30(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[29];
oneif = cards[29].slice(-1);
document.getElementById("c30").innerHTML = one;
m = 1;
p1 = c30;
pair1 = document.getElementById("c30");
}
else if(m == 1){
if(p1 == c30){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[29];
twoif = cards[29].slice(-1);
document.getElementById("c30").innerHTML = two;
p2 = c30;
pair2 = document.getElementById("c30");
int();
}
}
}
function ca31(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[30];
oneif = cards[30].slice(-1);
document.getElementById("c31").innerHTML = one;
m = 1;
p1 = c31;
pair1 = document.getElementById("c31");
}
else if(m == 1){
if(p1 == c31){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[30];
twoif = cards[30].slice(-1);
document.getElementById("c31").innerHTML = two;
p2 = c31;
pair2 = document.getElementById("c31");
int();
}
}
}
function ca32(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[31];
oneif = cards[31].slice(-1);
document.getElementById("c32").innerHTML = one;
m = 1;
p1 = c32;
pair1 = document.getElementById("c32");
}
else if(m == 1){
if(p1 == c32){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[31];
twoif = cards[31].slice(-1);
document.getElementById("c32").innerHTML = two;
p2 = c32;
pair2 = document.getElementById("c32");
int();
}
}
}
function ca33(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[32];
oneif = cards[32].slice(-1);
document.getElementById("c33").innerHTML = one;
m = 1;
p1 = c33;
pair1 = document.getElementById("c33");
}
else if(m == 1){
if(p1 == c33){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[32];
twoif = cards[32].slice(-1);
document.getElementById("c33").innerHTML = two;
p2 = c33;
pair2 = document.getElementById("c33");
int();
}
}
}
function ca34(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[33];
oneif = cards[33].slice(-1);
document.getElementById("c34").innerHTML = one;
m = 1;
p1 = c34;
pair1 = document.getElementById("c34");
}
else if(m == 1){
if(p1 == c34){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[33];
twoif = cards[33].slice(-1);
document.getElementById("c34").innerHTML = two;
p2 = c34;
pair2 = document.getElementById("c34");
int();
}
}
}
function ca35(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[34];
oneif = cards[34].slice(-1);
document.getElementById("c35").innerHTML = one;
m = 1;
p1 = c35;
pair1 = document.getElementById("c35");
}
else if(m == 1){
if(p1 == c35){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[34];
twoif = cards[34].slice(-1);
document.getElementById("c35").innerHTML = two;
p2 = c35;
pair2 = document.getElementById("c35");
int();
}
}
}
function ca36(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[35];
oneif = cards[35].slice(-1);
document.getElementById("c36").innerHTML = one;
m = 1;
p1 = c36;
pair1 = document.getElementById("c36");
}
else if(m == 1){
if(p1 == c36){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[35];
twoif = cards[35].slice(-1);
document.getElementById("c36").innerHTML = two;
p2 = c36;
pair2 = document.getElementById("c36");
int();
}
}
}
function ca37(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[36];
oneif = cards[36].slice(-1);
document.getElementById("c37").innerHTML = one;
m = 1;
p1 = c37;
pair1 = document.getElementById("c37");
}
else if(m == 1){
if(p1 == c37){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[36];
twoif = cards[36].slice(-1);
document.getElementById("c37").innerHTML = two;
p2 = c37;
pair2 = document.getElementById("c37");
int();
}
}
}
function ca38(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[37];
oneif = cards[37].slice(-1);
document.getElementById("c38").innerHTML = one;
m = 1;
p1 = c38;
pair1 = document.getElementById("c38");
}
else if(m == 1){
if(p1 == c38){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[37];
twoif = cards[37].slice(-1);
document.getElementById("c38").innerHTML = two;
p2 = c38;
pair2 = document.getElementById("c38");
int();
}
}
}
function ca39(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[38];
oneif = cards[38].slice(-1);
document.getElementById("c39").innerHTML = one;
m = 1;
p1 = c39;
pair1 = document.getElementById("c39");
}
else if(m == 1){
if(p1 == c39){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[38];
twoif = cards[38].slice(-1);
document.getElementById("c39").innerHTML = two;
p2 = c39;
pair2 = document.getElementById("c39");
int();
}
}
}
function ca40(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[39];
oneif = cards[39].slice(-1);
document.getElementById("c40").innerHTML = one;
m = 1;
p1 = c40;
pair1 = document.getElementById("c40");
}
else if(m == 1){
if(p1 == c40){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[39];
twoif = cards[39].slice(-1);
document.getElementById("c40").innerHTML = two;
p2 = c40;
pair2 = document.getElementById("c40");
int();
}
}
}
function ca41(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[40];
oneif = cards[40].slice(-1);
document.getElementById("c41").innerHTML = one;
m = 1;
p1 = c41;
pair1 = document.getElementById("c41");
}
else if(m == 1){
if(p1 == c41){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[40];
twoif = cards[40].slice(-1);
document.getElementById("c41").innerHTML = two;
p2 = c41;
pair2 = document.getElementById("c41");
int();
}
}
}
function ca42(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[41];
oneif = cards[41].slice(-1);
document.getElementById("c42").innerHTML = one;
m = 1;
p1 = c42;
pair1 = document.getElementById("c42");
}
else if(m == 1){
if(p1 == c42){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[41];
twoif = cards[41].slice(-1);
document.getElementById("c42").innerHTML = two;
p2 = c42;
pair2 = document.getElementById("c42");
int();
}
}
}
function ca43(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[42];
oneif = cards[42].slice(-1);
document.getElementById("c43").innerHTML = one;
m = 1;
p1 = c43;
pair1 = document.getElementById("c43");
}
else if(m == 1){
if(p1 == c43){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[42];
twoif = cards[42].slice(-1);
document.getElementById("c43").innerHTML = two;
p2 = c43;
pair2 = document.getElementById("c43");
int();
}
}
}
function ca44(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[43];
oneif = cards[43].slice(-1);
document.getElementById("c44").innerHTML = one;
m = 1;
p1 = c44;
pair1 = document.getElementById("c44");
}
else if(m == 1){
if(p1 == c44){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[43];
twoif = cards[43].slice(-1);
document.getElementById("c44").innerHTML = two;
p2 = c44;
pair2 = document.getElementById("c44");
int();
}
}
}
function ca45(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[44];
oneif = cards[44].slice(-1);
document.getElementById("c45").innerHTML = one;
m = 1;
p1 = c45;
pair1 = document.getElementById("c45");
}
else if(m == 1){
if(p1 == c45){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[44];
twoif = cards[44].slice(-1);
document.getElementById("c45").innerHTML = two;
p2 = c45;
pair2 = document.getElementById("c45");
int();
}
}
}
function ca46(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[45];
oneif = cards[45].slice(-1);
document.getElementById("c46").innerHTML = one;
m = 1;
p1 = c46;
pair1 = document.getElementById("c46");
}
else if(m == 1){
if(p1 == c46){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[45];
twoif = cards[45].slice(-1);
document.getElementById("c46").innerHTML = two;
p2 = c46;
pair2 = document.getElementById("c46");
int();
}
}
}
function ca47(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[46];
oneif = cards[46].slice(-1);
document.getElementById("c47").innerHTML = one;
m = 1;
p1 = c47;
pair1 = document.getElementById("c47");
}
else if(m == 1){
if(p1 == c47){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[46];
twoif = cards[46].slice(-1);
document.getElementById("c47").innerHTML = two;
p2 = c47;
pair2 = document.getElementById("c47");
int();
}
}
}
function ca48(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[47];
oneif = cards[47].slice(-1);
document.getElementById("c48").innerHTML = one;
m = 1;
p1 = c48;
pair1 = document.getElementById("c48");
}
else if(m == 1){
if(p1 == c48){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[47];
twoif = cards[47].slice(-1);
document.getElementById("c48").innerHTML = two;
p2 = c48;
pair2 = document.getElementById("c48");
int();
}
}
}
function ca49(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[48];
oneif = cards[48].slice(-1);
document.getElementById("c49").innerHTML = one;
m = 1;
p1 = c49;
pair1 = document.getElementById("c49");
}
else if(m == 1){
if(p1 == c49){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[48];
twoif = cards[48].slice(-1);
document.getElementById("c49").innerHTML = two;
p2 = c49;
pair2 = document.getElementById("c49");
int();
}
}
}
function ca50(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[49];
oneif = cards[49].slice(-1);
document.getElementById("c50").innerHTML = one;
m = 1;
p1 = c50;
pair1 = document.getElementById("c50");
}
else if(m == 1){
if(p1 == c50){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[49];
twoif = cards[49].slice(-1);
document.getElementById("c50").innerHTML = two;
p2 = c50;
pair2 = document.getElementById("c50");
int();
}
}
}
function ca51(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[50];
oneif = cards[50].slice(-1);
document.getElementById("c51").innerHTML = one;
m = 1;
p1 = c51;
pair1 = document.getElementById("c51");
}
else if(m == 1){
if(p1 == c51){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[50];
twoif = cards[50].slice(-1);
document.getElementById("c51").innerHTML = two;
p2 = c51;
pair2 = document.getElementById("c51");
int();
}
}
}
function ca52(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[51];
oneif = cards[51].slice(-1);
document.getElementById("c52").innerHTML = one;
m = 1;
p1 = c52;
pair1 = document.getElementById("c52");
}
else if(m == 1){
if(p1 == c52){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[51];
twoif = cards[51].slice(-1);
document.getElementById("c52").innerHTML = two;
p2 = c52;
pair2 = document.getElementById("c52");
int();
}
}
}
function ca53(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[52];
oneif = cards[52].slice(-1);
document.getElementById("c53").innerHTML = one;
m = 1;
p1 = c53;
pair1 = document.getElementById("c53");
}
else if(m == 1){
if(p1 == c53){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[52];
twoif = cards[52].slice(-1);
document.getElementById("c53").innerHTML = two;
p2 = c53;
pair2 = document.getElementById("c53");
int();
}
}
}
function ca54(){
if(st == 0){
time();
st = 1;
}
if(m == 0){
se1.currentTime = 0;
se1.play();
one = cards[53];
oneif = cards[53].slice(-1);
document.getElementById("c54").innerHTML = one;
m = 1;
p1 = c54;
pair1 = document.getElementById("c54");
}
else if(m == 1){
if(p1 == c54){
}
else{
se1.currentTime = 0;
se1.play();
two = cards[53];
twoif = cards[53].slice(-1);
document.getElementById("c54").innerHTML = two;
p2 = c54;
pair2 = document.getElementById("c54");
int();
}
}
}
function retry(){
p1pair = 0;
p2pair = 0;
p3pair = 0;
p4pair = 0;
player = 1;
md = 0;
st = 0;
count = 0;
one = 0;
two = 0;
m = 0;
p1 = "";
pair1 = "";
p2 = "";
pair2 = "";
miss = 0;
timersave = 0;
sc = 0;
save = 0;
info.style.opacity ="0";
gard.style.display ="inline";
mode.style.display ="inline";
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
shuffleArray(cards);
tb.style.opacity ="0";
c1.style.display = "flex";
c2.style.display = "flex";
c3.style.display = "flex";
c4.style.display = "flex";
c5.style.display = "flex";
c6.style.display = "flex";
c7.style.display = "flex";
c8.style.display = "flex";
c9.style.display = "flex";
c10.style.display = "flex";
c11.style.display = "flex";
c12.style.display = "flex";
c13.style.display = "flex";
c14.style.display = "flex";
c15.style.display = "flex";
c16.style.display = "flex";
c17.style.display = "flex";
c18.style.display = "flex";
c19.style.display = "flex";
c20.style.display = "flex";
c21.style.display = "flex";
c22.style.display = "flex";
c23.style.display = "flex";
c24.style.display = "flex";
c25.style.display = "flex";
c26.style.display = "flex";
c27.style.display = "flex";
c28.style.display = "flex";
c29.style.display = "flex";
c30.style.display = "flex";
c31.style.display = "flex";
c32.style.display = "flex";
c33.style.display = "flex";
c34.style.display = "flex";
c35.style.display = "flex";
c36.style.display = "flex";
c37.style.display = "flex";
c38.style.display = "flex";
c39.style.display = "flex";
c40.style.display = "flex";
c41.style.display = "flex";
c42.style.display = "flex";
c43.style.display = "flex";
c44.style.display = "flex";
c45.style.display = "flex";
c46.style.display = "flex";
c47.style.display = "flex";
c48.style.display = "flex";
c49.style.display = "flex";
c50.style.display = "flex";
c51.style.display = "flex";
c52.style.display = "flex";
c53.style.display = "flex";
c54.style.display = "flex";
re.style.display = "none";
document.getElementById('tb').innerHTML ="<tr><td><div id=c1 class=card onclick=ca1()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c2 class=card onclick=ca2()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c3 class=card onclick=ca3()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c4 class=card onclick=ca4()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c13 class=card onclick=ca13()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c14 class=card onclick=ca14()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c5 class=card onclick=ca5()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c6 class=card onclick=ca6()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c7 class=card onclick=ca7()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c8 class=card onclick=ca8()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c15 class=card onclick=ca15()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c16 class=card onclick=ca16()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c9 class=card onclick=ca9()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c10 class=card onclick=ca10()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c11 class=card onclick=ca11()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c12 class=card onclick=ca12()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c17 class=card onclick=ca17()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c18 class=card onclick=ca18()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c19 class=card onclick=ca19()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c20 class=card onclick=ca20()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c21 class=card onclick=ca21()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c22 class=card onclick=ca22()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c23 class=card onclick=ca23()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c24 class=card onclick=ca24()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c25 class=card onclick=ca25()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c26 class=card onclick=ca26()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c27 class=card onclick=ca27()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c28 class=card onclick=ca28()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c29 class=card onclick=ca29()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c30 class=card onclick=ca30()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c31 class=card onclick=ca31()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c32 class=card onclick=ca32()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c33 class=card onclick=ca33()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c34 class=card onclick=ca34()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c35 class=card onclick=ca35()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c36 class=card onclick=ca36()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c37 class=card onclick=ca37()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c38 class=card onclick=ca38()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c39 class=card onclick=ca39()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c40 class=card onclick=ca40()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c41 class=card onclick=ca41()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c42 class=card onclick=ca42()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c43 class=card onclick=ca43()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c44 class=card onclick=ca44()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c45 class=card onclick=ca45()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c46 class=card onclick=ca46()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c47 class=card onclick=ca47()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c48 class=card onclick=ca48()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr><tr><td><div id=c49 class=card onclick=ca49()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c50 class=card onclick=ca50()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c51 class=card onclick=ca51()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c52 class=card onclick=ca52()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c53 class=card onclick=ca53()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td><td><div id=c54 class=card onclick=ca54()><img class=cardimg width=25px height=45px src=images/card_back.png></div></td></tr>";
document.getElementById('mode').innerHTML='<div class="title">神<span class="titred">経</span>衰<span class="titred">弱</span></div><div onclick="scmode()" class="button">スコアアタックモード</div><div class="button" onclick="btmode()">オフライン対戦モード</div></div>';
pl1.style.background ="#ffff55";
pl2.style.background ="none";
pl3.style.background ="none";
pl4.style.background ="none";
se3.currentTime = 0;
se3.play();
}
function scmode(){
info.style.opacity = "1";
tb.style.opacity = "1";
mode.style.display = "none";
gard.style.display = "none";
md = 1;
document.getElementById('info').innerHTML="<span id=tim>TIME:300</span>　　<span id=misses>MISS:0</span>　　<span id=hi>HI-SCORE:"+localStorage.hisc+"</span>";
se3.currentTime = 0;
se3.play();
se4.currentTime = 0;
se4.play();
}
let se3 = new Audio('sounds/button.mp3');
let se4 = new Audio('sounds/start.mp3');
let p1pair = 0;
let p2pair = 0;
let p3pair = 0;
let p4pair = 0;
let player = 1;
let md = 0;
let inter;
let miss = 0;
let timersave = 0;
let sc = 0;
let save = 0;
function turn() {
inter++;
if(inter == 1){
if(oneif == twoif){
p1.style.display = "none";
p2.style.display = "none";
m = 0;
count = count + 1;
if(md == 2){
if(player == 1){
p1pair = p1pair + 1;
document.getElementById('pl1').innerHTML = "1P:"+p1pair;
}
else{
p2pair = p2pair + 1;
document.getElementById('pl2').innerHTML = "2P:"+p2pair;
}
}
if(md == 3){
if(player == 1){
p1pair = p1pair + 1;
document.getElementById('pl1').innerHTML = "1P:"+p1pair;
}
else if(player == 2){
p2pair = p2pair + 1;
document.getElementById('pl2').innerHTML = "2P:"+p2pair;
}
else{
p3pair = p3pair + 1;
document.getElementById('pl3').innerHTML = "3P:"+p3pair;
}
}
if(md == 4){
if(player == 1){
p1pair = p1pair + 1;
document.getElementById('pl1').innerHTML = "1P:"+p1pair;
}
else if(player == 2){
p2pair = p2pair + 1;
document.getElementById('pl2').innerHTML = "2P:"+p2pair;
}
else if(player == 3){
p3pair = p3pair + 1;
document.getElementById('pl3').innerHTML = "3P:"+p3pair;
}
else{
p4pair = p4pair + 1;
document.getElementById('pl4').innerHTML = "4P:"+p4pair;
}
}
if(count == 27){
if(md == 1){
sc = timersave * 10 - miss * 5;
document.getElementById('message').innerHTML = "Finish!<br>SCORE:"+sc;
popup();
clearInterval(t);
if(sc > localStorage.hisc){
localStorage.hisc = sc;
document.getElementById('hi').innerHTML = "HI-SCORE:"+localStorage.hisc;
}
}
else if(md == 2){
if(p1pair > p2pair){
document.getElementById('message').innerHTML ="WINNER<br>1P";
popup();
}
else{
document.getElementById('message').innerHTML ="WINNER<br>2P";
popup();
}
}
else if(md == 3){
if(p1pair >= p2pair){
save = p1pair;
}
else{
save = p2pair;
}
if(p3pair > save){
save = p3pair;
}
if(p2pair == p1pair && p3pair == p2pair){
document.getElementById('message').innerHTML ="DRAW";
popup();
}
else if(save == p1pair && save == p2pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　2P";
popup();
}
else if(save == p1pair && save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　3P";
popup();
}
else if(save == p2pair && save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>2P　3P";
popup();
}
else if(save == p1pair){
document.getElementById('message').innerHTML ="WINNER<br>1P";
popup();
}
else if(save == p2pair){
document.getElementById('message').innerHTML ="WINNER<br>2P";
popup();
}
else{
document.getElementById('message').innerHTML ="WINNER<br>3P";
popup();
}
}
else if(md == 4){
if(p1pair >= p2pair){
save = p1pair;
}
else{
save = p2pair;
}
if(p3pair > save){
save = p3pair;
}
if(p4pair > save){
save = p4pair;
}
if(save == p1pair && save == p2pair && save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　2P　3P";
popup();
}
else if(save == p2pair && save == p1pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　2P　4P";
popup();
}
else if(save == p1pair && save == p3pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　3P　4P";
popup();
}
else if(save == p2pair && save == p3pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>2P　3P　4P";
popup();
}
else if(save == p1pair && save == p2pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　2P";
popup();
}
else if(save == p1pair && save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　3P";
popup();
}
else if(save == p1pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>1P　4P";
popup();
}
else if(save == p2pair && save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>2P　3P";
popup();
}
else if(save == p2pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>2P　4P";
popup();
}
else if(save == p3pair && save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>3P　4P";
popup();
}
else if(save == p1pair){
document.getElementById('message').innerHTML ="WINNER<br>1P";
popup();
}
else if(save == p2pair){
document.getElementById('message').innerHTML ="WINNER<br>2P";
popup();
}
else if(save == p3pair){
document.getElementById('message').innerHTML ="WINNER<br>3P";
popup();
}
else if(save == p4pair){
document.getElementById('message').innerHTML ="WINNER<br>4P";
popup();
}
}
re.style.display = "flex";
}
gard.style.display="none";
clearInterval( A );
}
else{
se2.currentTime = 0;
se2.play();
if(md == 1){
miss = miss + 1;
document.getElementById('misses').innerHTML = "MISS:"+miss;
}
else if(md == 2){
if(player == 1){
player = 2;
document.getElementById('message').innerHTML ="2Pのターン";
popup();
pl2.style.background ="#ffff55";
pl1.style.background ="none";
}
else{
player = 1;
document.getElementById('message').innerHTML ="1Pのターン";
popup();
pl1.style.background ="#ffff55";
pl2.style.background ="none";
}
}
else if(md == 3){
if(player == 1){
player = 2;
document.getElementById('message').innerHTML ="2Pのターン";
popup();
pl2.style.background ="#ffff55";
pl1.style.background ="none";
pl3.style.background ="none";
}
else if(player == 2){
player = 3;
document.getElementById('message').innerHTML ="3Pのターン";
popup();
pl3.style.background ="#ffff55";
pl1.style.background ="none";
pl2.style.background ="none";
}
else{
player = 1;
document.getElementById('message').innerHTML ="1Pのターン";
popup();
pl1.style.background ="#ffff55";
pl2.style.background ="none";
pl3.style.background ="none";
}
}
else if(md == 4){
if(player == 1){
player = 2;
document.getElementById('message').innerHTML ="2Pのターン";
popup();
pl2.style.background ="#ffff55";
pl1.style.background ="none";
pl3.style.background ="none";
pl4.style.background ="none";
}
else if(player == 2){
player = 3;
document.getElementById('message').innerHTML ="3Pのターン";
popup();
pl3.style.background ="#ffff55";
pl1.style.background ="none";
pl2.style.background ="none";
pl4.style.background ="none";
}
else if(player == 3){
player = 4;
document.getElementById('message').innerHTML ="4Pのターン";
popup();
pl4.style.background ="#ffff55";
pl1.style.background ="none";
pl3.style.background ="none";
pl2.style.background ="none";
}
else{
player = 1;
document.getElementById('message').innerHTML ="1Pのターン";
popup();
pl1.style.background ="#ffff55";
pl2.style.background ="none";
pl3.style.background ="none";
pl4.style.background ="none";
}
}
pair1.innerHTML = "<img class=cardimg width=25px height=45px src=images/card_back.png>";
pair2.innerHTML = "<img class=cardimg width=25px height=45px src=images/card_back.png>";
m = 0;
gard.style.display="none";
clearInterval( A );
}
}
}
function int() {
gard.style.display="inline";
inter = 0;
A = setInterval('turn()',500);
}
function ti(){
if(md == 1){
timer--;
document.getElementById('tim').innerHTML = "TIME:"+timer;
timersave = timer;
}
}
function time(){
if(md == 1){
timer = 300;
t = setInterval('ti()',1000);
}
}
function btmode(){
document.getElementById('mode').innerHTML='<div class=title>神<span class=titred>経</span>衰<span class="titred">弱</span></div><div onclick="twop()" class="button">2人対戦</div><div class="button" onclick="threep()">3人対戦</div><div class="button" onclick="fourp()">4人対戦</div></div>';
se3.currentTime = 0;
se3.play();
}
function twop(){
md = 2;
info.style.opacity = "1";
tb.style.opacity = "1";
mode.style.display = "none";
gard.style.display = "none";
document.getElementById('info').innerHTML="<span id=pl1>1P:"+p1pair+"</span>　　<span id=pl2>2P:"+p2pair+"</span>";
document.getElementById('message').innerHTML ="1Pのターン";
popup();
se3.currentTime = 0;
se3.play();
se4.currentTime = 0;
se4.play();
}
function threep(){
md = 3;
info.style.opacity = "1";
tb.style.opacity = "1";
mode.style.display = "none";
gard.style.display = "none";
document.getElementById('info').innerHTML="<span id=pl1>1P:"+p1pair+"</span>　　<span id=pl2>2P:"+p2pair+"</span>　　<span id=pl3>3P:"+p3pair+"</span>";
document.getElementById('message').innerHTML = "1Pのターン";
popup();
se3.currentTime = 0;
se3.play();
se4.currentTime = 0;
se4.play();
}
function fourp(){
md = 4;
info.style.opacity = "1";
tb.style.opacity = "1";
mode.style.display = "none";
gard.style.display = "none";
document.getElementById('info').innerHTML="<span id=pl1>1P:"+p1pair+"</span>　　<span id=pl2>2P:"+p2pair+"</span>　　<span id=pl3>3P:"+p3pair+"</span>　　<span id=pl4>4P:"+p4pair+"</span>";
document.getElementById('message').innerHTML = "1Pのターン";
popup();
se3.currentTime = 0;
se3.play();
se4.currentTime = 0;
se4.play();
}
function popup(){
pop.style.display ="flex";
}
function ok(){
pop.style.display ="none";
se3.currentTime = 0;
se3.play();
}
function loading(){
var images = ['images/mark_club.gif','images/mark_dia.gif','images/mark_heart','images/mark_spade.gif','images/card_back.png'];
for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
se1.load();
se2.load();
se3.load();
se4.load();
load.style.display="none";
}