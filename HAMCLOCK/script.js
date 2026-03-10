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
  const texts = formatTime(mibaNeoCreatedDay);
  mibaNeo_clock_diff.innerText = texts[0];
  mibaNeoAnniversary.innerText = texts[1];
  mibaNeo_clock_anniversary.innerText = texts[2];
}
function createClockH(){
  const texts = formatTime(hamlanChangedDay);
  hamlan_clock_diff.innerText = texts[0];
  hamlanAnniversary.innerText = texts[1];
  hamlan_clock_anniversary.innerText = texts[2];
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
  let dayDiff = now.getDate() - baseTime.getDate();
  if(dayDiff < 0){
    if(now.getMonth() === 0){
      dayBaseTime = new Date((now.getFullYear() - 1) + "/12/" + baseTime.getDate());
    }else{
      dayBaseTime = new Date(now.getFullYear() + "/" + now.getMonth() + "/" + baseTime.getDate());
    }
  monthDiff -= 1;
  }else{
    dayBaseTime = new Date(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + baseTime.getDate());
  }
const nowDay = new Date(now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate());
dayDiff = (nowDay - dayBaseTime) / (1000 * 60 * 60 * 24);
  const diffText = yearDiff + "年" + monthDiff + "ヶ月" + dayDiff + "日経過";
  const anniversary = yearDiff + 1;
  let anniversaryDay = new Date(now.getFullYear() + "/" + (baseTime.getMonth() + 1) + "/" + baseTime.getDate() + " 00:00:00");
  if(anniversaryDay < now){
    anniversaryDay = new Date((now.getFullYear() + 1) + "/" + (baseTime.getMonth() + 1) + "/" + baseTime.getDate() + " 00:00:00");
  }
  const diffAnniversary = anniversaryDay - now;
  const diffAnniversaryDay = Math.floor(diffAnniversary / (1000 * 60 * 60 * 24));
  let temp = (diffAnniversaryDay * (1000 * 60 * 60 * 24));
  const diffAnniversaryHour = Math.floor((diffAnniversary - temp) / (1000 * 60 * 60));
  temp += (diffAnniversaryHour * (1000 * 60 * 60));
  const diffAnniversaryMinute = Math.floor((diffAnniversary - temp) / (1000 * 60));
  temp += (diffAnniversaryMinute * (1000 * 60))
  const diffAnniversarySecond = Math.floor((diffAnniversary - temp) / 1000);
  const anniversaryText = diffAnniversaryDay + "日" + diffAnniversaryHour + "時間" + diffAnniversaryMinute + "分" + diffAnniversarySecond + "秒";
  return [diffText,anniversary,anniversaryText];
}
