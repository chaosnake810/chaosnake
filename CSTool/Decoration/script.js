var decoration;
function output(){
decoration="";
if(font_color.value != ""){
decoration += "color:" + font_color.value + ";";
}
if(font_size.value != ""){
decoration += "font-size:" + font_size.value + "px;";
}
if(shadow.value == "1"){
decoration += "text-shadow:" + shadow_x.value + "px " + shadow_y.value + "px " + shadow_blur.value + "px "  + shadow_color.value  + ";";
}
if(weight.value != "0"){
decoration += "font-weight:" + weight.value + ";";
}
if(font.value != "0"){
decoration += "font-family:" + font.value + ";";
}
if(stroke.value == "1"){
decoration += "-webkit-text-stroke:" + stroke_size.value + "px " + stroke_color.value + ";";
}
if(decoration != ""){
image.innerHTML = '<span style="' + decoration + '">' + text.value + '</span>';
outputarea.value = '<span style="' + decoration + '">' + text.value + '</span>';
}else{
image.innerHTML= text.value;
outputarea.value=text.value;
}
}