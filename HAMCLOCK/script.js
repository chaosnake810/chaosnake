const mibaNeoCreatedDay = new Date("2017/09/01 00:00:00");
const hamlanChangedDay = new Date("2018/05/24 00:00:00");
let intervalM;
let intervalH;
window.addEventListener("load", (event) => {
  createClock();
});
function createClock(){
  intervalM = setInterval('createClockM',1000);
  intervalH = setInterval('createClockH',1000);
}
function createClockM{
  const now = new Date();
  mibaNeo_clock.innerText = (now - mibaNeoCreatedDay);
}
function createClockH{
  const now = new Date();
  hamlan_clock.innerText = (now - hamlanChangedDay);
}
