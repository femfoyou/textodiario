var tiempo = new Date();
var temadiario = tiempo.getDate();
var mmes = tiempo.getMonth();
var frase = temadiario+"/"+mmes;

$(document).ready(function() {

if (temadiario == 1){
		$("#contentt").load('textos/1102022211.html');
	}
	else {
		$("#contentt").load('textos/1102022211-split'+temadiario+'.html');
	}

});

if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  }
}
var theDate = Date.now();
var temadi = getTheDate(theDate)
  
document.getElementById('prev').addEventListener("click", function() {
	theDate -= 86400000;
	
	temadi = getTheDate(theDate)
	$("#contentt").load('textos/1102022211-split'+temadi+'.html');
})
document.getElementById('next').addEventListener("click", function() {
	theDate += 86400000;
	
	temadi = getTheDate(theDate) 
	$("#contentt").load('textos/1102022211-split'+temadi+'.html');
  
})
function getTheDate(getDate) {
  var theCDate = new Date(getDate);  
  return theCDate.getDate();
}

var selDia = {
"1":['textos/1102022211.html'],
"2":['textos/1102022211-split2.html'],
"3":['textos/1102022211-split3.html'],
"4":['textos/1102022211-split4.html'],
"5":['textos/1102022211-split5.html'],
"6":['textos/1102022211-split6.html'],
"7":['textos/1102022211-split7.html'],
"8":['textos/1102022211-split8.html'],
"9":['textos/1102022211-split9.html'],
"10":['textos/1102022211-split10.html'],
"11":['textos/1102022211-split11.html'],
"12":['textos/1102022211-split12.html'],
"13":['textos/1102022211-split13.html'],
"14":['textos/1102022211-split14.html'],
"15":['textos/1102022211-split15.html'],
"16":['textos/1102022211-split16.html'],
"17":['textos/1102022211-split17.html'],
"18":['textos/1102022211-split18.html'],
"19":['textos/1102022211-split19.html'],
"20":['textos/1102022211-split20.html'],
"21":['textos/1102022211-split21.html'],
"22":['textos/1102022211-split22.html'],
"23":['textos/1102022211-split23.html'],
"24":['textos/1102022211-split24.html'],
"25":['textos/1102022211-split25.html'],
"26":['textos/1102022211-split26.html'],
"27":['textos/1102022211-split27.html'],
"28":['textos/1102022211-split28.html'],
"29":['textos/1102022211-split29.html'],
"30":['textos/1102022211-split30.html'],
"31":['textos/1102022211-split31.html'],
};

var select12 = document.querySelector('.form-control12');

for (var miopcion in selDia) {
  document.querySelector('.form-control12')
  .options[document.querySelector('.form-control12').options.length] = new Option(miopcion);
}

select12.addEventListener("change", myFunction12);
function myFunction12() {
  var selecoption = select12.options[select12.selectedIndex].value;
	$("#contentt").load(selDia[selecoption]);
}