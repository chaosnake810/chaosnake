window.addEventListener("DOMContentLoaded", init);
const LEFT = Math.PI * -0.5;
const RIGHT = Math.PI * 0.5;
const FRONT = Math.PI;
const BACK = 0;
let xOffset = 0;
let yOffset = -5;
let xCameraOffset = 0;
let yCameraOffset = 500;
let d = 450;
let r = d / 2;
let maxXY = r - 25;
let maxZ = d - 25;
let fixCameraXY = maxXY + 500;
let fixCameraZ = (d / 100) * 60;
let wall1;
let wall2;
let wall3;
let wall4;
let floorImg = "images/floor.png";
let ceilImg1 = "images/ceil.png";
let ceilImg2 = "images/ceil_back.png";
let levelSelectSe = new Audio("sounds/levelselect.mp3");
let ultraHardSelectSe = new Audio("sounds/select_ultra.mp3");
let selectErrorSe = new Audio("sounds/error.mp3");
let wallTouchSe = new Audio("sounds/wall.mp3");
let popUpSe = new Audio("sounds/popup.mp3");
let hiScoreSe = new Audio("sounds/highscore.mp3");
let startSe = new Audio("sounds/start.mp3");
let buttonSe = new Audio("sounds/button.mp3");
let gameOverSe = new Audio("sounds/gameover_se.mp3");
let moveSe = new Audio("sounds/move.mp3");
let upDownSe = new Audio("sounds/move.mp3");
let rotationSe = new Audio("sounds/rotation.mp3");
let levelSelectBgm = new Audio("sounds/levelselect_bgm.mp3");
let stageBgm = new Audio("sounds/stage.mp3");
let gameOverBgm = new Audio("sounds/gameover_bgm.mp3");
let ultraHardWaitBgm = new Audio("sounds/ultrahard_wait.mp3");
let ultraHardStageBgm = new Audio("sounds/ultrahard_stage.mp3");
let intervalMove;
let intervalUp;
let intervalDown;
let moving = false;
let upping = false;
let downing = false;
let camera;
let box;
let nowLevel = 0;
let playing = false;
let scene;
let enemy1;
let enemy1Material;
let moveEnemy1;
let enemy2;
let enemy2Material;
let moveEnemy2;
let enemy3;
let enemy3Material;
let moveEnemy3;
let clickLevelHard = 0;
let score = 0;
let gameOverFlag = false;
function loading(){
if(localStorage.hiScoreLevelEasy == undefined){
localStorage.hiScoreLevelEasy = 0;
}
if(localStorage.hiScoreLevelNormal == undefined){
localStorage.hiScoreLevelNormal = 0;
}
if(localStorage.hiScoreLevelHard == undefined){
localStorage.hiScoreLevelHard = 0;
}
if(localStorage.hiScoreLevelUltraHard == undefined){
localStorage.hiScoreLevelUltraHard = 0;
}
let images = [floorImg,ceilImg1,ceilImg2];
for (i = 0; i < images.length; i++){
var img = document.createElement('img');
img.src = images[i];
}
levelSelectSe.load();
ultraHardSelectSe.load();
selectErrorSe.load();
wallTouchSe.load();
popUpSe.load();
hiScoreSe.load();
startSe.load();
buttonSe.load();
gameOverSe.load();
moveSe.load();
upDownSe.load();
rotationSe.load();
levelSelectBgm.load();
levelSelectBgm.loop = true;
stageBgm.load();
stageBgm.loop = true;
stageBgm.volume = 0.4;
gameOverBgm.load();
gameOverBgm.loop = true;
gameOverBgm.volume = 0.4;
ultraHardWaitBgm.load();
ultraHardWaitBgm.loop = true;
ultraHardStageBgm.load();
ultraHardStageBgm.loop = true;
ultraHardStageBgm.volume = 0.7;
load.style.display = "none";
}
let hiScoreLevelEasy = Number(localStorage.hiScoreLevelEasy);
let hiScoreLevelNormal = Number(localStorage.hiScoreLevelNormal);
let hiScoreLevelHard = Number(localStorage.hiScoreLevelHard);
let hiScoreLevelUltraHard = Number(localStorage.hiScoreLevelUltraHard);

function init() {
const canvasElement = document.querySelector('#myCanvas');
const renderer = new THREE.WebGLRenderer({
antialias: true,
canvas: canvasElement,
alpha:true
});

const miniCanvas = document.querySelector('#fixCameraCanvas');
const miniRenderer = new THREE.WebGLRenderer({
antialias: true,
canvas: miniCanvas,
alpha:true
});
 
const width = window.outerWidth;
const height = window.outerHeight;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

miniRenderer.setPixelRatio(window.devicePixelRatio);
miniRenderer.setSize(width * 0.3, width * 0.3);
 
scene = new THREE.Scene();

let textureLoader = new THREE.TextureLoader();
let floorTexture= textureLoader.load(floorImg);
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping; 
floorTexture.repeat.set(15,15);
let floorGeometry = new THREE.PlaneGeometry(d, d);
let floorMaterial = new THREE.MeshBasicMaterial({
map: floorTexture
});
let floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

let ceilTexture1= textureLoader.load(ceilImg1);
ceilTexture1.wrapS = THREE.RepeatWrapping;
ceilTexture1.wrapT = THREE.RepeatWrapping; 
ceilTexture1.repeat.set(15,15);
let ceilGeometry1 = new THREE.PlaneGeometry(d, d);
let ceilMaterial1= new THREE.MeshBasicMaterial({
map: ceilTexture1,
transparent: true,
opacity: 0.2
});
let ceil1 = new THREE.Mesh(ceilGeometry1, ceilMaterial1);
ceil1.position.z = d;
scene.add(ceil1);

let ceilTexture2= textureLoader.load(ceilImg2);
ceilTexture2.wrapS = THREE.RepeatWrapping;
ceilTexture2.wrapT = THREE.RepeatWrapping; 
ceilTexture2.repeat.set(15,15);
let ceilGeometry2 = new THREE.PlaneGeometry(d, d);
let ceilMaterial2= new THREE.MeshBasicMaterial({
map: ceilTexture2,
transparent: true,
opacity: 0.2
});
let ceil2 = new THREE.Mesh(ceilGeometry2, ceilMaterial2);
ceil2.position.z = d;
ceil2.rotation.y = Math.PI;
scene.add(ceil2);

let wallGeometry = new THREE.PlaneGeometry(d, d);
let wallMaterial= new THREE.MeshBasicMaterial({
color: new THREE.Color(0xffff00),
transparent: true,
opacity: 0
});
let wallMaterial2 = new THREE.MeshBasicMaterial({
color: new THREE.Color(0xffff00),
transparent: true,
opacity: 0
});
let wallMaterial3 = new THREE.MeshBasicMaterial({
color: new THREE.Color(0xffff00),
transparent: true,
opacity: 0
});
let wallMaterial4 = new THREE.MeshBasicMaterial({
color: new THREE.Color(0xffff00),
transparent: true,
opacity: 0
});
wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
wall1.position.y = r;
wall1.position.z = r;
wall1.rotation.x = RIGHT;
scene.add(wall1);

wall2 = new THREE.Mesh(wallGeometry, wallMaterial2);
wall2.position.y = - r;
wall2.position.z = r;
wall2.rotation.x = LEFT;
scene.add(wall2);

wall3 = new THREE.Mesh(wallGeometry, wallMaterial3);
wall3.position.x = r;
wall3.position.z = r;
wall3.rotation.y = LEFT;
scene.add(wall3);

wall4 = new THREE.Mesh(wallGeometry, wallMaterial4);
wall4.position.x = - r;
wall4.position.z = r;
wall4.rotation.y = RIGHT;
scene.add(wall4);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.intensity = 15;
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff);
directionalLight2.intensity = 15;
directionalLight2.position.set(-1,-1,-1);
scene.add(directionalLight2);
 
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshStandardMaterial({color: 0xff0000});
box = new THREE.Mesh(geometry, material);
box.position.set(- maxXY,maxXY,25);
scene.add(box);

const enemy1Geometry = new THREE.BoxGeometry(50, 50, 50);
enemy1Material = new THREE.MeshStandardMaterial({color: 0x008000});
enemy1 = new THREE.Mesh(enemy1Geometry, enemy1Material);
enemy1.position.set(maxXY,-maxXY,25);

const enemy2Geometry = new THREE.BoxGeometry(50, 50, 50);
enemy2Material = new THREE.MeshStandardMaterial({color: 0x0000ff});
enemy2 = new THREE.Mesh(enemy2Geometry, enemy2Material);
enemy2.position.set(- maxXY,- maxXY,25);

const enemy3Geometry = new THREE.BoxGeometry(50, 50, 50);
enemy3Material = new THREE.MeshStandardMaterial({color: 0xffff00});
enemy3 = new THREE.Mesh(enemy3Geometry, enemy3Material);
enemy3.position.set(maxXY,maxXY,25);

camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.up.set(0, 0, 1);
camera.rotation.order = "ZYX";


let fixCamera = new THREE.PerspectiveCamera(70,width / height, 1, 10000);
fixCamera.up.set(0, 0, 1);
fixCamera.position.set(- fixCameraXY,fixCameraXY,fixCameraZ);
fixCamera.lookAt(0,0,0);

const controls = new THREE.OrbitControls(camera, canvasElement);
controls.enableRotate = true;
controls.maxPolarAngle = Math.PI * 0.5;
controls.enablePan = false;
controls.enableZoom = false;

camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);

tick();
function tick() {
controls.target.copy(box.position);
if(playing){
moveController.style.background = "#aaa";
fixCamera.aspect = 1;
fixCamera.updateProjectionMatrix();
miniRenderer.render(scene, fixCamera);
renderer.render(scene, camera);
if((box.position.x - enemy1.position.x <= 50 && box.position.x - enemy1.position.x >= -50) && (box.position.y - enemy1.position.y <= 50 && box.position.y - enemy1.position.y >= -50) && (box.position.z - enemy1.position.z <= 50 && box.position.z - enemy1.position.z >= -50) && !gameOverFlag){
gameOver();
}
if((box.position.x - enemy2.position.x <= 50 && box.position.x - enemy2.position.x >= -50) && (box.position.y - enemy2.position.y <= 50 && box.position.y - enemy2.position.y >= -50) && (box.position.z - enemy2.position.z <= 50 && box.position.z - enemy2.position.z >= -50) && nowLevel >= 2 && !gameOverFlag){
gameOver();
}
if((box.position.x - enemy3.position.x <= 50 && box.position.x - enemy3.position.x >= -50) && (box.position.y - enemy3.position.y <= 50 && box.position.y - enemy3.position.y >= -50) && (box.position.z - enemy3.position.z <= 50 && box.position.z - enemy3.position.z >= -50) && nowLevel >= 3 && !gameOverFlag){
gameOver();
}
}else{
fixCamera.aspect = width / height;
fixCamera.updateProjectionMatrix();
renderer.render(scene, fixCamera);
}
requestAnimationFrame(tick);
}
}

function moveInterval(start){
if(start){
if(!moving){
intervalMove = setInterval(move,10);
moving = true;
moveSe.currentTime = 0;
moveSe.play();
}
}else if(!start && moving){
clearInterval(intervalMove);
moving = false;
wall1.material.opacity = 0;
wall2.material.opacity = 0;
wall3.material.opacity = 0;
wall4.material.opacity = 0;
moveSe.pause();
}
}

function move(){
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
let lookNow = camera.rotation.z;
if(box.position.x == maxXY && lookNow == LEFT){
xOffset = 0;
wall3.material.opacity = 0.4;
wallTouchSe.play();
}else if(box.position.x == -maxXY && lookNow == RIGHT){
xOffset = 0;
wall4.material.opacity = 0.4;
wallTouchSe.play();
}else if(box.position.y == maxXY && lookNow == BACK){
yOffset = 0;
wall1.material.opacity = 0.4;
wallTouchSe.play();
}else if(box.position.y == - maxXY && lookNow == FRONT){
yOffset = 0;
wall2.material.opacity = 0.4;
wallTouchSe.play();
}else {
score += 5;
setScore();
}
box.position.set(box.position.x + xOffset,box.position.y + yOffset,box.position.z);
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
}
function turn(direction){
rotationSe.currentTime =0;
rotationSe.play();
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
let lookNow = camera.rotation.z;
if(direction == 1){
if(lookNow == FRONT){
lookRight();
}else if(lookNow == RIGHT){
lookBack();
}else if(lookNow == BACK){
lookLeft();
}else if(lookNow == LEFT){
lookFront();
}
}else if(direction == 2){
if(lookNow == FRONT){
lookLeft();
}else if(lookNow == RIGHT){
lookFront();
}else if(lookNow == BACK){
lookRight();
}else if(lookNow == LEFT){
lookBack();
}
}else if(direction == 3){
if(lookNow == FRONT){
lookBack();
}else if(lookNow == RIGHT){
lookLeft();
}else if(lookNow == BACK){
lookFront();
}else if(lookNow == LEFT){
lookRight();
}
}
}

function lookFront(){
camera.position.set(box.position.x,box.position.y + 500,box.position.z + 100);
xOffset = 0;
yOffset = -5;
xCameraOffset = 0;
yCameraOffset = 500;
camera.lookAt(box.position);
camera.rotation.z = FRONT;
}

function lookBack(){
camera.position.set(box.position.x,box.position.y - 500,box.position.z + 100);
xOffset = 0;
yOffset = 5;
xCameraOffset = 0;
yCameraOffset = -500;
camera.lookAt(box.position);
camera.rotation.z = BACK;
}

function lookRight(){
camera.position.set(box.position.x + 500,box.position.y,box.position.z + 100);
xOffset = -5;
yOffset = 0;
xCameraOffset = 500;
yCameraOffset = 0;
camera.lookAt(box.position);
camera.rotation.z = RIGHT;
}

function lookLeft(){
camera.position.set(box.position.x - 500,box.position.y,box.position.z + 100);
xOffset = 5;
yOffset = 0;
xCameraOffset = -500;
yCameraOffset = 0;
camera.lookAt(box.position);
camera.rotation.z = LEFT;
}

function upInterval(start){
if(start){
if(!upping && !downing){
intervalUp = setInterval(up,10);
upping = true;
upDownSe.currentTime = 0;
upDownSe.play();
}
}else if(!start && upping){
clearInterval(intervalUp);
upping = false;
upDownSe.pause();
}
}

function downInterval(start){
if(start){
if(!downing && !upping){
intervalDown = setInterval(down,10);
downing = true;
upDownSe.currentTime = 0;
upDownSe.play();
}
}else if(!start && downing){
clearInterval(intervalDown);
downing = false;
upDownSe.pause();
}
}

function up(){
if(box.position.z != maxZ){
box.position.set(box.position.x,box.position.y,box.position.z + 5);
score += 5;
setScore();
}else{
wallTouchSe.play();
}
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
}

function down(){
if(box.position.z != 25){
box.position.set(box.position.x,box.position.y,box.position.z - 5);
score += 5;
setScore();
}else{
wallTouchSe.play();
}
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
}

function moveEnemy(enemy,moveRange){
let randMove = Math.floor(Math.random() * 4);
if(randMove == 0){
if(enemy.position.x != maxXY){
enemy.position.set(enemy.position.x + moveRange,enemy.position.y,enemy.position.z);
}else {
randMove = Math.floor(Math.random() * 3);
if(randMove == 0){
if(enemy.position.x != - maxXY){
enemy.position.set(enemy.position.x - moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 1){
if(enemy.position.y != maxXY){
enemy.position.set(enemy.position.x,enemy.position.y + moveRange,enemy.position.z);
}
}else if(randMove == 2){
if(enemy.position.y != - maxXY){
enemy.position.set(enemy.position.x,enemy.position.y - moveRange,enemy.position.z);
}
}
}
}else if(randMove == 1){
if(enemy.position.x != - maxXY){
enemy.position.set(enemy.position.x - moveRange,enemy.position.y,enemy.position.z);
}else {
randMove = Math.floor(Math.random() * 3);
if(randMove == 0){
if(enemy.position.x != maxXY){
enemy.position.set(enemy.position.x + moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 1){
if(enemy.position.y != maxXY){
enemy.position.set(enemy.position.x,enemy.position.y + moveRange,enemy.position.z);
}
}else if(randMove == 2){
if(enemy.position.y != - maxXY){
enemy.position.set(enemy.position.x,enemy.position.y - moveRange,enemy.position.z);
}
}
}
}else if(randMove == 2){
if(enemy.position.y != maxXY){
enemy.position.set(enemy.position.x,enemy.position.y + moveRange,enemy.position.z);
}else {
randMove = Math.floor(Math.random() * 3);
if(randMove == 0){
if(enemy.position.x != maxXY){
enemy.position.set(enemy.position.x + moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 1){
if(enemy.position.x != -maxXY){
enemy.position.set(enemy.position.x - moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 2){
if(enemy.position.y != - maxXY){
enemy.position.set(enemy.position.x,enemy.position.y - moveRange,enemy.position.z);
}
}
}
}else if(randMove == 3){
if(enemy.position.y != - maxXY){
enemy.position.set(enemy.position.x,enemy.position.y - moveRange,enemy.position.z);
}else {
randMove = Math.floor(Math.random() * 3);
if(randMove == 0){
if(enemy.position.x != maxXY){
enemy.position.set(enemy.position.x + moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 1){
if(enemy.position.x != - maxXY){
enemy.position.set(enemy.position.x - moveRange,enemy.position.y,enemy.position.z);
}
}else if(randMove == 2){
if(enemy.position.y != maxXY){
enemy.position.set(enemy.position.x,enemy.position.y + moveRange,enemy.position.z);
}
}
}
}
randMove = Math.floor(Math.random() * 3);
if(randMove == 0){
if(enemy.position.z != maxZ){
enemy.position.set(enemy.position.x,enemy.position.y,enemy.position.z + moveRange);
}
}else if(randMove == 1){
if(enemy.position.z != 25){
enemy.position.set(enemy.position.x,enemy.position.y,enemy.position.z - moveRange);
}else if(randMove == 2){

}
}
}
function start(){
titlePage.style.display = "none";
myCanvas.style.display = "block";
selectLevel.style.display = "block";
scoreBoard.style.display = "block";
startSe.currentTime =0;
startSe.play();
levelSelectBgm.currentTime = 0;
levelSelectBgm.play();
}
function selectEasy(){
levelEasy.style.top ="4px";
levelNormal.style.top = "0";
levelHard.style.top = "0";
levelEasy.style.background="linear-gradient(#222299,#5555bb)";
levelNormal.style.background="linear-gradient(#44bb44,#77dd77)";
levelHard.style.background="linear-gradient(#bb4444,#dd7777)";
levelEasy.style.color = "#dddddd";
levelNormal.style.color = "#ffffff";
levelHard.style.color = "#ffffff";
levelEasy.style.border = "3px solid #88aadd";
levelNormal.style.border = "3px solid #ccffaa";
levelHard.style.border = "3px solid #ffaacc";
levelEasy.style.boxShadow = "0 0 20px 2px #5555ff";
levelNormal.style.boxShadow = "0 0 10px #00ff00";
levelHard.style.boxShadow = "0 0 10px #ff0000";
myCanvas.style.background = "radial-gradient(#9999ff,#6666dd)";
scene.remove(enemy1);
scene.remove(enemy2);
scene.remove(enemy3);
scene.add(enemy1);
clickLevelHard = 0;
if(nowLevel != 1){
levelSelectSe.currentTime =0;
levelSelectSe.play();
nowLevel = 1;
setHiScore();
}else {
selectErrorSe.currentTime =0;
selectErrorSe.play();
}
}

function selectNormal(){
levelEasy.style.top ="0";
levelNormal.style.top = "4px";
levelHard.style.top = "0";
levelEasy.style.background="linear-gradient(#4444bb,#7777dd)";
levelNormal.style.background="linear-gradient(#229922,#55bb55)";
levelHard.style.background="linear-gradient(#bb4444,#dd7777)";
levelEasy.style.color = "#ffffff";
levelNormal.style.color = "#dddddd";
levelHard.style.color = "#ffffff";
levelEasy.style.border = "3px solid #aaccff";
levelNormal.style.border = "3px solid #aadd88";
levelHard.style.border = "3px solid #ffaacc";
levelEasy.style.boxShadow = "0 0 10px #0000ff";
levelNormal.style.boxShadow = "0 0 20px 2px #55ff55";
levelHard.style.boxShadow = "0 0 10px #ff0000";
myCanvas.style.background = "radial-gradient(#88cc88,#66aa66)";
scene.remove(enemy1);
scene.remove(enemy2);
scene.remove(enemy3);
scene.add(enemy1);
scene.add(enemy2);
clickLevelHard = 0;
if(nowLevel != 2){
levelSelectSe.currentTime =0;
levelSelectSe.play();
nowLevel = 2;
setHiScore();
}else {
selectErrorSe.currentTime =0;
selectErrorSe.play();
}
}

function selectHard(){
levelEasy.style.top ="0";
levelNormal.style.top = "0";
levelHard.style.top = "4px";
levelEasy.style.background="linear-gradient(#4444bb,#7777dd)";
levelNormal.style.background="linear-gradient(#44bb44,#77dd77)";
levelHard.style.background="linear-gradient(#992222,#bb5555)";
levelEasy.style.color = "#ffffff";
levelNormal.style.color = "#ffffff";
levelHard.style.color = "#dddddd";
levelEasy.style.border = "3px solid #aaccff";
levelNormal.style.border = "3px solid #ccffaa";
levelHard.style.border = "3px solid #dd88aa";
levelEasy.style.boxShadow = "0 0 10px #0000ff";
levelNormal.style.boxShadow = "0 0 10px #00ff00";
levelHard.style.boxShadow = "0 0 20px 2px #ff5555";
myCanvas.style.background = "radial-gradient(#ff9999,#dd6666)";
scene.remove(enemy1);
scene.remove(enemy2);
scene.remove(enemy3);
scene.add(enemy1);
scene.add(enemy2);
scene.add(enemy3);
clickLevelHard++;
if(clickLevelHard == 5){
clickLevelHard = 0;
level.style.display = "none";
levelUltraHardTable.style.display = "table";
selectUltraHard();
}else{
if(nowLevel != 3){
levelSelectSe.currentTime =0;
levelSelectSe.play();
nowLevel = 3;
setHiScore();
}else {
selectErrorSe.currentTime =0;
selectErrorSe.play();
}
}
}

function selectUltraHard(){
ultraHardSelectSe.currentTime =0;
ultraHardSelectSe.play();
levelSelectBgm.pause();
ultraHardWaitBgm.currentTime = 0;
ultraHardWaitBgm.play();
nowLevel = 4;
myCanvas.style.background = "radial-gradient(#bb88bb,#555555)";
changeEnemyColor(true);
setHiScore();
}

function changeEnemyColor(change){
if(change){
const vertexShader = `
uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;
varying vec2 vUv;
void main() {
vUv.y = (position.z - boundingBoxMin.z) / (boundingBoxMax.z - boundingBoxMin.z);
gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`;

const fragmentShader = `
uniform vec3 color1;
uniform vec3 color2;
varying vec2 vUv;
void main() {
gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
}
`;

const boxGeometry = new THREE.BoxBufferGeometry(50, 50,50);
boxGeometry.computeBoundingBox();
const uniforms = {
color1: {
value: new THREE.Color(0xaa0000)
},
color2: {
value: new THREE.Color(0x800080)
},
boundingBoxMin: {
value: boxGeometry.boundingBox.min
},
boundingBoxMax: {
value: boxGeometry.boundingBox.max
}
}

const material = new THREE.ShaderMaterial({
uniforms:uniforms,
vertexShader:vertexShader,
fragmentShader:fragmentShader,
opacity:1
});
enemy1.material = material;
enemy2.material = material;
enemy3.material = material;
}else{
enemy1.material = enemy1Material;
enemy2.material = enemy2Material;
enemy3.material = enemy3Material;
}
}

function play(){
if(nowLevel != 0){
startSe.currentTime =0;
startSe.play();
if(nowLevel == 4){
ultraHardWaitBgm.pause();
ultraHardStageBgm.currentTime = 0;
ultraHardStageBgm.play();
}else{
levelSelectBgm.pause();
stageBgm.currentTime = 0;
stageBgm.play();
}
score = 0;
setScore();
nowScore.style.display = "block";
camera.position.set(box.position.x + xCameraOffset,box.position.y + yCameraOffset,box.position.z + 100);
camera.lookAt(box.position);
selectLevel.style.display = "none";
fixCameraCanvas.style.display = "block";
moveController.style.display = "block";
upAndDownController.style.display = "block";
playing = true;
if(nowLevel >= 1 && nowLevel != 4){
moveEnemy1 = setInterval(moveEnemy,6,enemy1,10);
}
if(nowLevel >= 2 && nowLevel != 4){
moveEnemy2 = setInterval(moveEnemy,6,enemy2,10);
}
if(nowLevel >= 3 && nowLevel != 4){
moveEnemy3 = setInterval(moveEnemy,6,enemy3,10);
}
if(nowLevel == 4){
moveEnemy1 = setInterval(moveEnemy,4,enemy1,25);
moveEnemy2 = setInterval(moveEnemy,4,enemy2,25);
moveEnemy3 = setInterval(moveEnemy,4,enemy3,25);
}
}else {
popUp("Please select a level!");
popUpSe.currentTime =0;
popUpSe.play();
}
}

function gameOver(){
gameOverSe.currentTime =0;
gameOverSe.play();
if(nowLevel == 4){
ultraHardStageBgm.pause();
}else {
stageBgm.pause();
}
gameOverBgm.currentTime = 0;
gameOverBgm.play();
clickLevelHard = 0;
clearInterval(moveEnemy1);
clearInterval(moveEnemy2);
clearInterval(moveEnemy3);
moveController.style.display = "none";
upAndDownController.style.display = "none";
moveInterval(false);
upInterval(false);
downInterval(false);
level.style.display = "table";
levelUltraHardTable.style.display = "none";
xOffset = 0;
yOffset = -5;
xCameraOffset = 0;
yCameraOffset = 500;
fixCameraCanvas.style.display = "none";
checkHiScore();
gameOverPage.style.display = "block";
gameOverFlag = true;
}
function selectLevelReset(){
nowLevel = 0;
levelEasy.style.top = "0";
levelEasy.style.background="linear-gradient(#4444bb,#7777dd)";
levelEasy.style.color = "#ffffff";
levelEasy.style.border = "3px solid #aaccff";
levelEasy.style.boxShadow = "0 0 10px #0000ff";
levelNormal.style.top = "0";
levelNormal.style.background="linear-gradient(#44bb44,#77dd77)";
levelNormal.style.color = "#ffffff";
levelNormal.style.border = "3px solid #ccffaa";
levelNormal.style.boxShadow = "0 0 10px #00ff00";
levelHard.style.top = "0";
levelHard.style.background="linear-gradient(#bb4444,#dd7777)";
levelHard.style.color = "#ffffff";
levelHard.style.border = "3px solid #ffaacc";
levelHard.style.boxShadow = "0 0 10px #ff0000";
}
function restart(){
buttonSe.currentTime =0;
buttonSe.play();
gameOverBgm.pause();
levelSelectBgm.currentTime = 0;
levelSelectBgm.play();
playing = false;
changeEnemyColor(false);
box.position.set(- maxXY,maxXY,25);
enemy1.position.set(maxXY,-maxXY,25);
scene.remove(enemy1);
enemy2.position.set(- maxXY,- maxXY,25);
scene.remove(enemy2);
enemy3.position.set(maxXY,maxXY,25);
scene.remove(enemy3);
myCanvas.style.background = "radial-gradient(#9999ff,#6666dd)";
selectLevel.style.display = "block";
gameOverPage.style.display = "none";
nowScore.style.display = "none";
selectLevelReset();
setHiScore();
gameOverFlag = false;
}
function setHiScore(){
let str = "HI-SCORE:";
if(nowLevel == 0){
hiScore.innerText = str + 0;
}else if(nowLevel == 1){
hiScore.innerText = str + localStorage.hiScoreLevelEasy;
}else if(nowLevel == 2){
hiScore.innerText = str + localStorage.hiScoreLevelNormal;
}else if(nowLevel == 3){
hiScore.innerText = str + localStorage.hiScoreLevelHard;
}else if(nowLevel == 4){
hiScore.innerText = str + localStorage.hiScoreLevelUltraHard;
}
}
function setScore(){
nowScore.innerText = "SCORE:" + score;
}
function checkHiScore(){
if(nowLevel == 1){
if(score > hiScoreLevelEasy){
hiScoreLevelEasy = score;
localStorage.hiScoreLevelEasy = score;
popUp("New record!");
hiScoreSe.currentTime =0;
hiScoreSe.play();
}
}else if(nowLevel == 2){
if(score > hiScoreLevelNormal){
hiScoreLevelNormal = score;
localStorage.hiScoreLevelNormal = score;
popUp("New record!");
hiScoreSe.currentTime =0;
hiScoreSe.play();
}
}else if(nowLevel == 3){
if(score > hiScoreLevelHard){
hiScoreLevelHard = score;
localStorage.hiScoreLevelHard = score;
popUp("New record!");
hiScoreSe.currentTime =0;
hiScoreSe.play();
}
}else if(nowLevel == 4){
if(score > hiScoreLevelUltraHard){
hiScoreLevelUltraHard = score;
localStorage.hiScoreLevelUltraHard = score;
popUp("New record!");
hiScoreSe.currentTime =0;
hiScoreSe.play();
}
}
}
function popUp(message){
popUpWindowBack.style.display = "block";
popUpWindowMessage.innerText = message;
}
function popUpClose(){
buttonSe.currentTime =0;
buttonSe.play();
popUpWindowBack.style.display = "none";
popUpWindowMessage.innerText = "";
}