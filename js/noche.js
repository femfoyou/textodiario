  //  font size
var p = document.getElementById("fader"),
res = document.getElementById("contenido"),
res2 = document.getElementById("fontsize");

var style = document.createElement('style');

p.addEventListener("input", function() {

var curFontSize = p.value;
localStorage.setItem('myFontSize', curFontSize);
var ls = localStorage.getItem('myFontSize');

res.style.fontSize = ls+"px";
res2.innerHTML = ls;

style.innerHTML = "input[type=range]::-webkit-slider-runnable-track { background: linear-gradient(90deg,#3fa2bf "
+ ls +"%,#cccccc 26%); }";

}, false);


document.getElementsByTagName('head')[0].appendChild(style);

function changeFontSize(target) {
var demo = document.getElementById("contenido");
var computedStyle = window.getComputedStyle
    ? getComputedStyle(demo) // Standards
    : demo.currentStyle;     // Old IE

var fontSize;

if (computedStyle) { // This will be true on nearly all browsers

fontSize = parseFloat(computedStyle && computedStyle.fontSize);

if (target == document.getElementById("button1")) { fontSize += 5; } 
else if (target == document.getElementById("button2")) { fontSize -= 5;}
  demo.style.fontSize = fontSize + "px";
  style.innerHTML = "input[type=range]::-webkit-slider-runnable-track { background: linear-gradient(90deg,#3fa2bf "
  + fontSize +"%,#cccccc 26%); }";
}

localStorage.setItem('myFontSize', fontSize);
p.value = localStorage.getItem('myFontSize');
res2.innerHTML = localStorage.getItem('myFontSize');
}

res.style.fontSize = localStorage.getItem('myFontSize')+"px";
res2.innerHTML = localStorage.getItem('myFontSize');
p.value = localStorage.getItem('myFontSize');

style.innerHTML = "input[type=range]::-webkit-slider-runnable-track { background: linear-gradient(90deg,#3fa2bf "
+ localStorage.getItem('myFontSize') +"%,#cccccc 26%); }";

///--- modo noche ---///
// window.onload = function(){
  var border = document.querySelector('.border');
  var button = document.querySelector('.button');
  var day = document.querySelector('.day');

  var clases = {
    "activeBorder" : "activeBorder",
    "active" : "active",
    "night" : "night",
  }
  

  var toggleButton = document.querySelector('.toggleButton').addEventListener('click',function(e){
    
    localStorage.setItem("click", 1);
       if (border.classList.contains("activeBorder")) {
        localStorage.setItem("click", 0); 
        localStorage.setItem("clases", JSON.stringify(clases));
       }
        
    border.classList.toggle("activeBorder");
    button.classList.toggle("active");
    day.classList.toggle("night");

  })

  if (localStorage.getItem("click") == "1") {
    if (localStorage.getItem("clases")) {
      var jsnClases = JSON.parse(localStorage.getItem("clases"));
      border.classList.add(jsnClases.activeBorder);
      button.classList.add(jsnClases.active);
      day.classList.add(jsnClases.night);

    }else{
      border.classList.remove(jsnClases.activeBorder);
      button.classList.remove(jsnClases.active);
      day.classList.remove(jsnClases.night);
    }
  }
// }