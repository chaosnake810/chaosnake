window.onload = function () => {
alert("onload");
try{
let xhr = new XMLHttpRequest();
xhr.open("POST","https://script.google.com/macros/s/AKfycbwCqQ9AVZEBsCsCr_WpfNwYmOrB_7mjzaA64rR7FrlS48PSJ86c_tN_IKTJVo1fYSa7MA/exec",false);
xhr.send();
alert(xhr.responseText);
}catch(e){
alert(e);
}
} 

