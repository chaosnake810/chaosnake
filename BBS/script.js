function loading(){
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let bbsElement = document.getElementById("bbs");
let xhr = new XMLHttpRequest();
xhr.open("POST","https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec",true);
xhr.onload = function() {
bbsElement.innerHTML = "";
bbsElement.appendChild(createPage(page,xhr.responseText));
}
xhr.onerror = function(){
bbsElement.innerHTML = "エラー:" + xhr.responseText;
}
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
xhr.send(JSON.stringify(param));
} 

function createPage(page,res){
switch(page){
  case "thread":
    return createThreadPage(res);
  default:
    return createTopPage(res);
}
}

function createTopPage(res){
let threads = JSON.parse(res);
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

function createThreadPage(res){
let reses = JSON.parse(res);
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
responseHTML.appendChild(h3Element)
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
messageElement.innerHTML = response.MESSAGE;
divElement.appendChild(messageElement);
responseHTML.appendChild(divElement);
});
let hrElement = document.createElement('hr');
responseHTML.appendChild(hrElement);
return responseHTML;
}

function formatTime(time){
const beforeDate = (time !== undefined ? new Date(time) : new Date());
return beforeDate.toLocaleString();
}

function popUp(type){
let popContent = document.createElement('div');
switch(type){
  case "newThread":
  let title = document.createElement('h3');
  title.innerText = "スレッド作成";
  popContent.appendChild(title);
  let hrElement = document.createElement('hr');
  popContent.appendChild(hrElement);
  let nameArea = document.createElement('input');
  nameArea.type = "text";
  nameArea.placeholder = "名前";
  nameArea.id = "name";
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
  break;
  case "newRes":
  break;
}
pop.innerHTML = "";
pop.appendChild(popContent);
pop.style.display = "block";
}

function createNewThread(){
alert('ok');
}































