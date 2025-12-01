let data;
let info;
function loading(){
cover.style.display = "flex";
fetch('https://ipinfo.io?callback').then((ipRes) => {
  return ipRes.json();
}).then((ipResponse) => {
cover.style.display = "none";
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let param = {};
switch(page){
  case "thread":
    param = {
      "type":"getReses",
      "num":params.get('num'),
      "ip":ipResponse.ip
    }
    break;
  default:
    param = {
      "type":"getThreads",
      "ip":ipResponse.ip
    }
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  createError(response.error);
}else{
data = response.data;
info = response.info;
if(page !== "thread"){
  data.map((thread,index) => {
    data[index]["INDEX"] = index + 1;
  });
}
bbs.innerHTML = "";
bbs.appendChild(createPage(page,data));
}
}).catch((error) => {
createError(error);
});
}).catch((error) => {
createError(error);
});
} 

window.addEventListener('hashchange', (() => {
if(cover.style.display === "none" && data !== undefined){
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
bbs.innerHTML = "";
bbs.appendChild(createPage(page,data));
}
}));

function createPage(page,res){
switch(page){
  case "thread":
    return createThreadPage(res);
  default:
    return createTopPage(res);
}
}

function createTopPage(allThreads){
let threads = hashFilter(allThreads);
let hrElement1 = document.createElement('hr');
let responseHTML = document.createElement('div');
let h3Element = document.createElement('h3');
let pageTitle = document.createTextNode('スレ一覧');
h3Element.appendChild(pageTitle);
responseHTML.appendChild(h3Element);
let newThreadButton = document.createElement('button');
newThreadButton.addEventListener("click", (() => {
  popUp('newThread');
}));
newThreadButton.innerText = "新スレ";
responseHTML.appendChild(newThreadButton);
let reloadButton = document.createElement('button');
reloadButton.addEventListener("click", (() => {
  loading();
}));
reloadButton.innerText = "更新";
responseHTML.appendChild(reloadButton);
let hr = document.createElement('hr');
responseHTML.appendChild(hr);
let firstButton = document.createElement('button');
if(threads.length === 0 || Number(threads[0].INDEX) === 1){
  firstButton.disabled = true;
}else{
firstButton.addEventListener("click", (() => {
  location.hash = "#1-20";
}));
}
firstButton.innerText = "<<";
responseHTML.appendChild(firstButton);
let prevButton = document.createElement('button');
if(threads.length === 0 || Number(threads[0].INDEX) === 1){
  prevButton.disabled = true;
}else{
prevButton.addEventListener("click", (() => {
    let startNum = Number(threads[0].INDEX) - 20;
    if(startNum < 1){
      startNum = 1;
    }
    let endNum = Number(threads[0].INDEX) - 1;
    if(endNum < 1){
      endNum = 1;
    }
    location.hash = "#" + startNum + "-" + endNum;
}));
}
prevButton.innerText = "<";
responseHTML.appendChild(prevButton);
let nextButton = document.createElement('button');
if(threads.length === 0 || Number(threads[threads.length - 1].INDEX) === Number(allThreads[allThreads.length - 1].INDEX)){
  nextButton.disabled = true;
}else{
nextButton.addEventListener("click", (() => {
    let startNum = Number(threads[threads.length - 1].INDEX) + 1;
    if(startNum > Number(allThreads[allThreads.length - 1].INDEX)){
      startNum = Number(allThreads[allThreads.length - 1].INDEX);
    }
    let endNum = Number(threads[threads.length - 1].INDEX) + 20;
    if(endNum > Number(allThreads[allThreads.length - 1].INDEX)){
      endNum = Number(allThreads[allThreads.length - 1].INDEX);
    }
    location.hash = "#" + startNum + "-" + endNum;
}));
}
nextButton.innerText = ">";
responseHTML.appendChild(nextButton);
let lastButton = document.createElement('button');
if(threads.length === 0 || Number(threads[threads.length -1].INDEX) === Number(allThreads[allThreads.length - 1].INDEX)){
  lastButton.disabled = true;
}else{
lastButton.addEventListener("click", (() => {
  let startNum = Number(allThreads[allThreads.length - 1].INDEX) - 19;
  if(startNum < 1){
    startNum = 1;
  }
  let endNum = allThreads[allThreads.length - 1].INDEX;
  location.hash = "#" + startNum + "-" + endNum;
}));
}
lastButton.innerText = ">>";
responseHTML.appendChild(lastButton);
responseHTML.appendChild(hrElement1);
threads.map((thread,index)=>{
let aElement = document.createElement('a');
aElement.href = './?page=thread&num=' + thread.NUM;
let aText = document.createTextNode(thread.INDEX + '.' + thread.TITLE + '(' + thread.COUNT + ')');
aElement.appendChild(aText);
responseHTML.appendChild(aElement);
let brElement = document.createElement('br');
responseHTML.appendChild(brElement);
});
let hrElement2 = document.createElement('hr');
responseHTML.appendChild(hrElement2);
return responseHTML;
}

function createThreadPage(allReses){
let reses = hashFilter(allReses);
let responseHTML = document.createElement('div');
let topLink = document.createElement('a');
topLink.href = './';
let linkText = document.createTextNode('スレ一覧');
topLink.appendChild(linkText);
responseHTML.appendChild(topLink);
let brElement = document.createElement('br');
responseHTML.appendChild(brElement);
let h3Element = document.createElement('h3');
let url = new URL(window.location.href);
let params = url.searchParams;
let pageTitle = document.createTextNode(params.get('num') + '.' + allReses[0].T_NUM);
h3Element.appendChild(pageTitle);
responseHTML.appendChild(h3Element);
document.title = allReses[0].T_NUM;
let newResButton = document.createElement('button');
newResButton.addEventListener("click", (() => {
  popUp('newRes');
}));
newResButton.innerText = "新レス";
responseHTML.appendChild(newResButton);
let reloadButton = document.createElement('button');
reloadButton.addEventListener("click", (() => {
  loading();
}));
reloadButton.innerText = "更新";
responseHTML.appendChild(reloadButton);
let hr = document.createElement('hr');
responseHTML.appendChild(hr);
let firstButton = document.createElement('button');
if(reses.length === 0 || Number(reses[0].NUM) === 1){
  firstButton.disabled = true;
}else{
firstButton.addEventListener("click", (() => {
  location.hash = "#1-20";
}));
}
firstButton.innerText = "<<";
responseHTML.appendChild(firstButton);
let prevButton = document.createElement('button');
if(reses.length === 0 || Number(reses[0].NUM) === 1){
  prevButton.disabled = true;
}else{
prevButton.addEventListener("click", (() => {
    let startNum = Number(reses[0].NUM) - 20;
    if(startNum < 1){
      startNum = 1;
    }
    let endNum = Number(reses[0].NUM) - 1;
    if(endNum < 1){
      endNum = 1;
    }
    location.hash = "#" + startNum + "-" + endNum;
}));
}
prevButton.innerText = "<";
responseHTML.appendChild(prevButton);
let nextButton = document.createElement('button');
if(reses.length === 0 || Number(reses[reses.length -1].NUM) === Number(allReses[allReses.length - 1].NUM)){
  nextButton.disabled = true;
}else{
nextButton.addEventListener("click", (() => {
    let startNum = Number(reses[reses.length - 1].NUM) + 1;
    if(startNum > Number(allReses[allReses.length - 1].NUM)){
      startNum = Number(allReses[allReses.length - 1].NUM);
    }
    let endNum = Number(reses[reses.length - 1].NUM) + 20;
    if(endNum > Number(allReses[allReses.length - 1].NUM)){
      endNum = Number(allReses[allReses.length - 1].NUM);
    }
    location.hash = "#" + startNum + "-" + endNum;
}));
}
nextButton.innerText = ">";
responseHTML.appendChild(nextButton);
let lastButton = document.createElement('button');
if(reses.length === 0 || Number(reses[reses.length -1].NUM) === Number(allReses[allReses.length - 1].NUM)){
  lastButton.disabled = true;
}else{
lastButton.addEventListener("click", (() => {
  let startNum = Number(allReses[allReses.length - 1].NUM) - 19;
  if(startNum < 1){
    startNum = 1;
  }
  let endNum = allReses[allReses.length - 1].NUM;
  location.hash = "#" + startNum + "-" + endNum;
}));
}
lastButton.innerText = ">>";
responseHTML.appendChild(lastButton);
reses.map((response)=>{
let hrElement = document.createElement('hr');
responseHTML.appendChild(hrElement);
let divElement = document.createElement('div');
if(Number(response.DELETED) !== 1){
let nameElement = document.createElement('div');
let uname = response.NAME;
if(uname === ""){
  uname = "さすらいの名無し";
}
nameElement.innerText = response.NUM + '.' + uname;
divElement.appendChild(nameElement);
let timeElement = document.createElement('div');
timeElement.innerText = formatTime(response.TIME);
timeElement.className = "time";
divElement.appendChild(timeElement);
let messageElement = document.createElement('div');
messageElement.className = "message";
messageElement.innerHTML = (response.MESSAGE).replaceAll('\n','<br>').replace(/>>[0-9,-]+/g,(match) => {
  return convertAnchorLink(match);
});
divElement.appendChild(messageElement);
let resButton = document.createElement('button');
resButton.addEventListener("click", (() => {
  popUp('newRes',response.NUM);
}));
resButton.innerText = "返信";
divElement.appendChild(resButton);
let deleteButton = document.createElement('button');
deleteButton.addEventListener("click", (() => {
  popUp('deleteRes',response.NUM);
}));
deleteButton.innerText = "削除";
divElement.appendChild(deleteButton);
let editButton = document.createElement('button');
editButton.addEventListener("click", (() => {
  popUp('editRes',response.NUM);
}));
editButton.innerText = "編集";
divElement.appendChild(editButton);
}else{
  divElement.innerText = "削除済み";
}
responseHTML.appendChild(divElement);
});
let hrElement = document.createElement('hr');
responseHTML.appendChild(hrElement);
return responseHTML;
}

function formatTime(time){
const beforeDate = (time !== undefined ? new Date(time) : new Date());
return beforeDate.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
}

function popUp(type,num){
let popContent = document.createElement('div');
switch(type){
  case "newThread":
  createNewThreadPop(popContent);
  break;
  case "newRes":
  createNewResPop(popContent,num);
  break;
  case "deleteRes":
  createDeleteResPop(popContent,num);
  break;
  case "editRes":
  createEditResPop(popContent,num);
  break;
}
pop.innerHTML = "";
pop.appendChild(popContent);
pop.style.display = "block";
}

function createNewThreadPop(popContent){
  let title = document.createElement('h3');
  title.innerText = "スレッド作成";
  popContent.appendChild(title);
  let hrElement = document.createElement('hr');
  popContent.appendChild(hrElement);
  let nameArea = document.createElement('input');
  nameArea.type = "text";
  nameArea.placeholder = "名前";
  nameArea.id = "nameArea";
  popContent.appendChild(nameArea);
  let brElement1 = document.createElement('br');
  popContent.appendChild(brElement1);
  let titleArea = document.createElement('input');
  titleArea.type = "text";
  titleArea.placeholder = "スレタイ";
  titleArea.id = "title";
  popContent.appendChild(titleArea);
  let brElement2 = document.createElement('br');
  popContent.appendChild(brElement2);
  let messageArea = document.createElement('textarea');
  messageArea.placeholder = "本文";
  messageArea.id = "message";
  popContent.appendChild(messageArea);
  let brElement3 = document.createElement('br');
  popContent.appendChild(brElement3);
  let passwordArea = document.createElement('input');
  passwordArea.type = "password";
  passwordArea.placeholder = "パスワード";
  passwordArea.id = "passwordArea";
  popContent.appendChild(passwordArea);
  let brElement4 = document.createElement('br');
  popContent.appendChild(brElement4);
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    if(document.getElementById("title").value === ""){
      alert("エラー：スレタイ未入力");
    }else if(message.value === ""){
      alert("エラー：本文未入力");
    }else{
    createNewThread();
    }
  }));
  buttonElement.innerText = "送信";
  popContent.appendChild(buttonElement);
}

function createNewResPop(popContent,num){
  let title = document.createElement('h3');
  title.innerText = "レス";
  popContent.appendChild(title);
  let hrElement = document.createElement('hr');
  popContent.appendChild(hrElement);
  let nameArea = document.createElement('input');
  nameArea.type = "text";
  nameArea.placeholder = "名前";
  nameArea.id = "nameArea";
  popContent.appendChild(nameArea);
  let brElement1 = document.createElement('br');
  popContent.appendChild(brElement1);
  let messageArea = document.createElement('textarea');
  messageArea.placeholder = "本文";
  messageArea.id = "message";
  if(num !== undefined){
    messageArea.value = ">>" + num + "\n";
  }
  popContent.appendChild(messageArea);
  let brElement2 = document.createElement('br');
  popContent.appendChild(brElement2);
  let passwordArea = document.createElement('input');
  passwordArea.type = "password";
  passwordArea.placeholder = "パスワード";
  passwordArea.id = "passwordArea";
  popContent.appendChild(passwordArea);
  let brElement3 = document.createElement('br');
  popContent.appendChild(brElement3);
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    if(message.value === ""){
      alert("エラー：本文未入力");
    }else{
    createNewRes();
    }
  }));
  buttonElement.innerText = "送信";
  popContent.appendChild(buttonElement);
}

function createDeleteResPop(popContent,num){
  let title = document.createElement('h3');
  title.innerText = "削除";
  popContent.appendChild(title);
  let hrElement = document.createElement('hr');
  popContent.appendChild(hrElement);
  let passwordArea = document.createElement('input');
  passwordArea.type = "password";
  passwordArea.placeholder = "パスワード";
  passwordArea.id = "passwordArea";
  popContent.appendChild(passwordArea);
  let brElement = document.createElement('br');
  popContent.appendChild(brElement);
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    deleteRes(num);
  }));
  buttonElement.innerText = "削除";
  popContent.appendChild(buttonElement);
}

function createEditResPop(popContent,num){
  let title = document.createElement('h3');
  title.innerText = "編集";
  popContent.appendChild(title);
  let hrElement = document.createElement('hr');
  popContent.appendChild(hrElement);
  let nameArea = document.createElement('input');
  nameArea.type = "text";
  nameArea.placeholder = "名前";
  nameArea.id = "nameArea";
  nameArea.value = data[Number(num) - 1].NAME;
  popContent.appendChild(nameArea);
  if(Number(num) === 1){
  let brElement = document.createElement('br');
  popContent.appendChild(brElement);
  let titleArea = document.createElement('input');
  titleArea.type = "text";
  titleArea.placeholder = "スレタイ";
  titleArea.id = "title";
  titleArea.value = data[0].T_NUM;
  popContent.appendChild(titleArea);
  }
  let brElement1 = document.createElement('br');
  popContent.appendChild(brElement1);
  let messageArea = document.createElement('textarea');
  messageArea.placeholder = "本文";
  messageArea.id = "message";
  messageArea.value = data[Number(num) - 1].MESSAGE;
  popContent.appendChild(messageArea);
  let brElement2 = document.createElement('br');
  popContent.appendChild(brElement2);
  let passwordArea = document.createElement('input');
  passwordArea.type = "password";
  passwordArea.placeholder = "パスワード";
  passwordArea.id = "passwordArea";
  popContent.appendChild(passwordArea);
  let brElement3 = document.createElement('br');
  popContent.appendChild(brElement3);
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    if(Number(num) === 1 && title.value === ""){
      alert("エラー:タイトル未入力");
    }else if(message.value === ""){
      alert("エラー：本文未入力");
    }else{
    editRes(num);
    }
  }));
  buttonElement.innerText = "編集";
  popContent.appendChild(buttonElement);
}

function createNewThread(){
let param = {
  "type":"newThread",
  "name":nameArea.value,
  "title":title.value,
  "message":message.value,
  "password":passwordArea.value,
  "time":new Date()
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  pop.style.display = "none";
  createError(response.error);
}else{
pop.style.display = "none";
loading();
}
}).catch((error) => {
  pop.style.display = "none";
  createError(error);
});
}

function createNewRes(){
let url = new URL(window.location.href);
let params = url.searchParams;
let param = {
  "type":"newRes",
  "num":params.get('num'),
  "name":nameArea.value,
  "message":message.value,
  "password":passwordArea.value,
  "time":new Date()
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  pop.style.display = "none";
  createError(response.error);
}else{
pop.style.display = "none";
loading();
}
}).catch((error) => {
  pop.style.display = "none";
  createError(error);
});
}

function deleteRes(num){
let url = new URL(window.location.href);
let params = url.searchParams;
let param = {
  "type":"deleteRes",
  "tnum":params.get('num'),
  "num":num,
  "password":passwordArea.value
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  pop.style.display = "none";
  createError(response.error);
}else{
pop.style.display = "none";
if(Number(num) === 1){
window.location.href = './';
}else{
loading();
}
}
}).catch((error) => {
  pop.style.display = "none";
  createError(error);
});
}

function editRes(num){
let url = new URL(window.location.href);
let params = url.searchParams;
let editTitle = undefined;
if(Number(num) === 1 && data[0].T_NUM !== title.value){
  editTitle = title.value;
}
let editName = undefined;
if(data[Number(num) - 1].NAME !== nameArea.value){
  editName = nameArea.value;
}
let editMessage = undefined;
if(data[Number(num) - 1].MESSAGE !== message.value){
  editMessage = message.value;
}
let param = {
  "type":"editRes",
  "tnum":params.get('num'),
  "num":num,
  "title":editTitle,
  "name":editName,
  "message":editMessage,
  "password":passwordArea.value
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  pop.style.display = "none";
  createError(response.error);
}else{
pop.style.display = "none";
loading();
}
}).catch((error) => {
  pop.style.display = "none";
  createError(error);
});
}

function requestGAS(param){
cover.style.display = "flex";
let fetchUrl = 'https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec';
return fetch(fetchUrl, {
method: 'POST',
body: JSON.stringify(param)
}).then((response) => {
  cover.style.display = "none";
  return response.json();
})
}

function createError(error){
bbs.innerHTML = "";
let hrElement1 = document.createElement('hr');
bbs.appendChild(hrElement1);
let errorTextElement = document.createElement('p');
errorTextElement.innerText = "エラー:" + error;
bbs.appendChild(errorTextElement);
let hrElement2 = document.createElement('hr');
bbs.appendChild(hrElement2);
}

function hashFilter(json){
let numList = location.hash.substring(1).split(",");
let error = checkHash(numList);
return error ? defaultFilter(json) : json.filter((data,index) => {
  let flg =　false;
  numList.map((num) => {
    let splitMinus = num.split("-");
    if(splitMinus.length === 2){
      if(splitMinus[0] === ""){
        if(Number(splitMinus[1]) >= (index + 1)){
          flg = true;
        }
      }else if(splitMinus[1] === ""){
        if(Number(splitMinus[0]) <= (index + 1)){
          flg = true;
        }
      }else{
        if((Number(splitMinus[1]) >= (index + 1)) && (Number(splitMinus[0]) <= (index + 1))){
          flg = true;
        }
      }
    }else if(splitMinus.length === 1){
      if(Number(splitMinus[0]) === (index + 1)){
        flg = true;
      };
    }
  });
  return flg;
})
}

function defaultFilter(json){
  return json.filter((data,index) => {
  return ((index + 1) <= 20);
})
}

function checkHash(numList){
let error = false;
if(numList.length !== 0){
numList.map((num) => {
  let snum = String(num);
  error = !(/^-?\d+(-(\d+)?)?$/.test(snum) && snum.split("-").length <= 2 && !snum.startsWith("--"));
});
}else{
error = true;
}
return error;
}

function convertAnchorLink(str){
let strNumPart = str.split(">>")[1];
if(checkHash(strNumPart.split(",")) === false){
  return '<a href="#' + strNumPart + '">' + str + '</a>';
}else{
  return str;
}
}



































































































