function loading(){
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let bodyElement = document.getElementsByTagName("body")[0];
let xhr = new XMLHttpRequest();
xhr.open("POST","https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec",true);
xhr.onload = function() {
bodyElement.innerHTML = xhr.responseText;
}
xhr.onerror = function(){
bodyElement.innerHTML = "エラー:" + xhr.responseText;
}
//xhr.setRequestHeader('Content-Type', 'application/json');
let param = {};
switch(page){
  case "thread":
    param = {
      "type":"getReses"
    }
    break;
  default:
    param = {
      "type":"getThreads"
    }
}
xhr.send(JSON.stringify(param));
} 



