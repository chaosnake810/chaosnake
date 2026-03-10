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
  let yearDiff = now.getFullYear() - baseTime.getFullYear();
  let monthDiff = (now.getMonth() + 1) - (baseTime.getMonth() + 1);
  if(monthDiff < 0){
    yearDiff -= 1;
    monthDiff += 12;
  }
  let dayBaseTime;
  let dayDiff = now.getDay() - baseTime.getDay();
  if(dayDiff < 0){
    if(now.getMonth() === 0){
      dayBaseTime = new Date((now.getFullYear() - 1) + "/12/" + baseTime.getDay());
    }else{
      dayBaseTime = new Date(now.getFullYear() + "/" + now.getMonth() + "/" + baseTime.getDay());
    }
  monthDiff -= 1;
  }else{
    dayBaseTime = new Date(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + baseTime.getDay());
  }
const nowDay = new Date(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDay());
dayDiff = (nowDay - dayBaseTime) / (1000 * 60 * 60 * 24);
  
  return yearDiff + "年" + monthDiff + "ヶ月" + dayDiff + "日経過";
}
