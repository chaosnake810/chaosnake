function loading(){
let url = new URL(window.location.href);
let params = url.searchParams;
let page = params.get('page');
let bodyElement = document.getElementsByTagName("body")[0];
let xhr = new XMLHttpRequest();
xhr.open("POST","https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec",true);
xhr.onload = function() {
bodyElement.innerHTML = createPage(page,xhr.responseText);
}
xhr.onerror = function(){
bodyElement.innerHTML = "エラー:" + xhr.responseText;
}
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
let responseHTML = '<hr>';
threads.map((thread)=>{
responseHTML += '<br>'
responseHTML += '<a href="./?page=thread&num=' + thread.NUM + '">';
responseHTML += thread.NUM + '.' + thread.TITLE + '(' + thread.COUNT + ')';
responseHTML += '</a>'
});
responseHTML += '<br>';
return responseHTML;
}







