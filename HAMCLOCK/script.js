const mibaNeoCreatedDay = new Date("2017/09/01 00:00:00");
const hamlanChangedDay = new Date("2018/05/24 00:00:00");
let intervalM;
let intervalH;
window.addEventListener("load",() => {
  createClock();
});
function createClock(){
  intervalM = setInterval('createClockM()',1000);
  intervalH = setInterval('createClockH()',1000);
}
function createClockM(){
  mibaNeo_clock.innerText = formatTime(mibaNeoCreatedDay);
}
function createClockH(){
  hamlan_clock.innerText = formatTime(hamlanChangedDay);
}
function formatTime(baseTime){
  const now = new Date();
  const yearDiff = now.getFullYear() - baseTime.getFullYear();
  const monthDiff = Math.abs(now.getMonth() - baseTime.getMonth());
  const dayDiff = Math.abs(now.getDay() - baseTime.getDay());
  return yearDiff + "年" + monthDiff + "ヶ月" + dayDiff + "日経過";
}
