function loading(){
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let bodyElement = document.getElementsByTagName("body")[0];
let xhr = new XMLHttpRequest();
xhr.open("POST","https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec",true);
xhr.onload = function() {
bodyElement.appendChild(createPage(page,xhr.responseText));
}
xhr.onerror = function(){
bodyElement.innerHTML = "エラー:" + xhr.responseText;
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
    return res;
  default:
    return createTopPage(res);
}
}

function createTopPage(res){
let threads = JSON.parse(res);
let hrElement = document.createElement('hr');
let brElement = document.createElement('br');
let responseHTML = document.createElement('div');
let h3Element = document.createElement('h3');
let pageTitle = document.createTextNode('スレ一覧');
h3Element.appendChild(pageTitle);
responseHTML.appendChild(h3Element)
responseHTML.appendChild(hrElement);
threads.map((thread)=>{
let aElement = document.createElement('a');
aElement.href = './?page=thread&num=' + thread.NUM;
let aText = document.createTextNode(thread.NUM + '.' + thread.TITLE + '(' + thread.COUNT + ')');
aElement.appendChild(aText);
responseHTML.appendChild(aElement);
responseHTML.appendChild(brElement);
});
responseHTML.appendChild(hrElement);
return responseHTML;
}
















