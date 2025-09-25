const logo = "images/logo.png";
const mc = "images/icon_monstercube.png;MonsterCube";
const mc3 = "images/icon_monstercube3d.png;MonsterCube3D";
const cp = "images/icon_cubepuzzle.png;CubePuzzle";
const bj = "images/icon_bigjump.png;BIGJUMP";
const bd = "images/icon_bigdrop.png;BIGDROP";
const ss = "images/icon_shinkeisuijaku.jpg;ShinkeiSuijaku";
const sl = "images/icon_slot.png;SLOT";
let games = [];
window.onload = function() {
var images=[logo,mc,mc3,bj,bd,sl,cp,ss];
for (i = 0; i < images.length; i++){
var img = document.createElement('img');
img.src = images[i].split(";")[0];
if(i > 0){
let iconElement = document.createElement('div');
iconElement.className = "icon";
iconElement.style.backgroundImage = "url('" + img.src + "')";
iconElement.style.backgroundSize = "100%";
iconElement.setAttribute("onClick","play('" + images[i].split(";")[1] + "'," + (i - 1) + ")");
games[i - 1] = iconElement;
}
}
for(i = 0; i < games.length;i++){
apps.replaceChild(games[i],apps.querySelectorAll("div.emptyBox")[0]);
}
}

function play(url,index){
let app = apps.querySelectorAll("div.icon")[index];
app.style.width = "90px";
app.style.height = "90px";
app.style.margin = "0";
setTimeout(redirect,500,url);
}
function redirect(url){
window.location.href = url;
}