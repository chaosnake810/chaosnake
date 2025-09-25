function output(){
outputarea.innerHTML = "スペース込み文字数:" + text.value.replaceAll("\n","").length + "文字<br>スペース無し文字数:" + text.value.replaceAll(/\s+/g,"").replaceAll("\n","").length + "文字<br>スペース込み文字数(半角=0.5文字):" + half(text.value.replaceAll("\n","")) + "文字<br>スペース無し文字数(半角=0.5文字):" + half(text.value.replaceAll(/\s+/g,"").replaceAll("\n",""))  + "文字<br>改行回数:" + br(text.value);
}

function half(str) {
let len = 0;
for (i = 0; i < str.length; i++) {
if (str[i].match(/[ -~]/) || str[i].match(/^[ｦ-ﾟ]*$/)) {
len += 0.5;
}else {
len += 1;
}
}
return len;
}
function br(str){
let b = 0;
for(i = 0;i < str.length;i++){
if(str.substr(i,1) == "\n"){
b += 1;
}
}
return b;
}