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
switch(page){
  case "thread":
    xhr.send("type=getReses");
    break;
  default:
    xhr.send("type=getThreads");
}
} 
