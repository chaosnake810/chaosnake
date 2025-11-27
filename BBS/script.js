function loading(){
bbs.innerHTML = "";
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let param = {};
switch(page){
  case "thread":
    param = {
      "type":"getReses",
      "num":params.get('num')
    }
    break;
  default:
    param = {
      "type":"getThreads"
    }
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
  createError(response.error);
}else{
bbs.innerHTML = "";
bbs.appendChild(createPage(page,response));
}
}).catch((error) => {
createError(error);
})
} 

function createPage(page,res){
switch(page){
  case "thread":
    return createThreadPage(res);
  default:
    return createTopPage(res);
}
}

function createTopPage(threads){
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
responseHTML.appendChild(hrElement1);
threads.map((thread)=>{
let aElement = document.createElement('a');
aElement.href = './?page=thread&num=' + thread.NUM;
let aText = document.createTextNode(thread.NUM + '.' + thread.TITLE + '(' + thread.COUNT + ')');
aElement.appendChild(aText);
responseHTML.appendChild(aElement);
let brElement = document.createElement('br');
responseHTML.appendChild(brElement);
});
let hrElement2 = document.createElement('hr');
responseHTML.appendChild(hrElement2);
return responseHTML;
}

function createThreadPage(reses){
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
let pageTitle = document.createTextNode(params.get('num') + '.' + reses[0].T_NUM);
h3Element.appendChild(pageTitle);
responseHTML.appendChild(h3Element);
document.title = reses[0].T_NUM;
let newResButton = document.createElement('button');
newResButton.addEventListener("click", (() => {
  popUp('newRes');
}));
newResButton.innerText = "新レス";
responseHTML.appendChild(newResButton);
reses.map((response)=>{
let hrElement = document.createElement('hr');
responseHTML.appendChild(hrElement);
let divElement = document.createElement('div');
let nameElement = document.createTextNode(response.NUM + '.' + response.NAME);
divElement.appendChild(nameElement);
let brElement = document.createElement('br');
divElement.appendChild(brElement);
let timeElement = document.createTextNode(formatTime(response.TIME));
divElement.appendChild(timeElement);
let messageElement = document.createElement('div');
messageElement.innerHTML = (response.MESSAGE).replaceAll('\n','<br>');
divElement.appendChild(messageElement);
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

function popUp(type){
let popContent = document.createElement('div');
switch(type){
  case "newThread":
  createNewThreadPop(popContent);
  break;
  case "newRes":
  createNewResPop(popContent);
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
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    createNewThread();
  }));
  buttonElement.innerText = "送信";
  popContent.appendChild(buttonElement);
}

function createNewResPop(popContent){
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
  popContent.appendChild(messageArea);
  let brElement2 = document.createElement('br');
  popContent.appendChild(brElement2);
  let buttonElement = document.createElement('button');
  buttonElement.addEventListener("click",(() => {
    createNewRes();
  }));
  buttonElement.innerText = "送信";
  popContent.appendChild(buttonElement);
}

function createNewThread(){
let param = {
  "type":"newThread",
  "name":nameArea.value,
  "title":title.value,
  "message":message.value,
  "time":new Date()
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
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
  "time":new Date()
}
requestGAS(param).then((response) => {
if(response.error !== undefined){
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
return fetch('https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec', {
method: 'POST',
body: JSON.stringify(param)
}).then((response) => {
  return response.json();
}
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



























































