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



    // mostrar la fecha
function mifecha(){
  fecha = new Date()
  mes = fecha.getMonth()
  diaMes = fecha.getDate()
  diaSemana = fecha.getDay()
  anio = fecha.getFullYear()
  dias = new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado')
  meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')

document.getElementById("fecha").innerHTML = dias[diaSemana] + ", " + diaMes + " de " + meses[mes] + " de " + anio;
// + ' mes:' + mes + ' semana:' + diaSemana
}
// mifecha();

//modal ajustes
var modal2 = document.getElementById('myModal2ok');
var btn2 = document.getElementById("myBtn2");
var diaMes = document.getElementById("solodia");
//boton modal compartir
var modalshare = document.getElementById('modalshare');
var btnshare = document.getElementById("botonshare");

var span2 = document.getElementsByClassName("closeok")[0];
var span3 = document.getElementsByClassName("close")[0];
btn2.onclick = function() { modal2.style.display = "block";diaMes.style.display = "block";}
span2.onclick = function() { modal2.style.display = "none";diaMes.style.display = "none";}

btnshare.onclick = function() { modalshare.style.display = "block";}
span3.onclick = function() { modalshare.style.display = "none";}

window.onclick = function(event) {
  if (event.target == modal2) { modal2.style.display = "none";diaMes.style.display = "none";}
  if (event.target == modalshare) { modalshare.style.display = "none";}
}


// compartir texto
function SelectContent(el) {    
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(el).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);

  navigator.clipboard.readText().then( cliptexto => ( 
    window.location='tg://msg_url?url='+encodeURIComponent(cliptexto)
                         ), err => console.log(err) );
}
function SelectWhats(el) {    
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(el).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);

  navigator.clipboard.readText().then( cliptexto => ( 
    window.location='https://api.whatsapp.com/send?text='+encodeURIComponent(cliptexto)
                         ), err => console.log(err) );
}

function shareNativo(el) {    
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(el).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);

  nativo();
}

function nativo(){
  navigator.clipboard.readText().then( cliptexto => ( 
    function nativeShare(){return navigator.share(cliptexto);}
                         ), err => console.log(err) );
}

var shareData={ url:'https://alfabetajuega.com/pokemon/pokemon-tipo-agua-mas-fuertes'};
function nativeShare(){
  return navigator.share(encodeURIComponent(shareData));
}

// function whatsappShare(){
//   var shareUrl="https://api.whatsapp.com/send?text="+titleDecoded+"%20"+linkEncoded;
//   openUrl(shareUrl);}
// function telegramShare(){
//   var shareUrl="tg://msg_url?text="+titleDecoded+"&url="+linkEncoded;
//   openUrl(shareUrl);
// }
// var shareData={title:decodeHtml("Los 16 Pok&#233;mon de tipo agua m&#225;s fuertes de la historia"),
//   url:'https://alfabetajuega.com/pokemon/pokemon-tipo-agua-mas-fuertes'
// };
// function nativeShare(){return navigator.share(shareData);}
// function openUrl(url){window.open(url);}


// const copyButton = document.getElementById('telegrambuton');
// copyButton.addEventListener('click', async (event) =>{
//     const data = document.getElementById('contentt').textContent;
//     await navigator.clipboard.writeText(data);
//     const copied = await navigator.clipboard.readText();
    
//     // copiar en ... whats, telegram, en documento...
//     //window.location='https://t.me/share/url?url='+encodeURIComponent(copied)
//     window.location='tg://share?text='+encodeURIComponent(copied);
//     //document.getElementById('clipboard-paste').textContent = copied
//     //console.log(copied);
// })


// const copiawhats = document.getElementById('copiarwhats');
// copiawhats.addEventListener('click', async (event) =>{
//     const data = document.getElementById('contentt').textContent;
//     await navigator.clipboard.writeText(data);
//     const copied = await navigator.clipboard.readText();
    
//     // copiar en ... whats, telegram, en documento...
//     window.location='whatsapp://send?text='+encodeURIComponent(copied)
//     //document.getElementById('clipboard-paste').textContent = copied
//     //console.log(copied);
// })

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