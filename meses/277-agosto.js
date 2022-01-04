var tiempo = new Date();
var temadiario = tiempo.getDate();
var mmes = tiempo.getMonth();
var frase = temadiario+"/"+mmes;

$(document).ready(function() {

if (temadiario == 1){
		$("#contentt").load('textos/1102022207.html');
	}
	else {
		$("#contentt").load('textos/1102022207-split'+temadiario+'.html');
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
	$("#contentt").load('textos/1102022207-split'+temadi+'.html');
})
document.getElementById('next').addEventListener("click", function() {
	theDate += 86400000;
	
	temadi = getTheDate(theDate) 
	$("#contentt").load('textos/1102022207-split'+temadi+'.html');
  
})
function getTheDate(getDate) {
  var theCDate = new Date(getDate);  
  return theCDate.getDate();
}

var selDia = {
"1":['textos/1102022207.html'],
"2":['textos/1102022207-split2.html'],
"3":['textos/1102022207-split3.html'],
"4":['textos/1102022207-split4.html'],
"5":['textos/1102022207-split5.html'],
"6":['textos/1102022207-split6.html'],
"7":['textos/1102022207-split7.html'],
"8":['textos/1102022207-split8.html'],
"9":['textos/1102022207-split9.html'],
"10":['textos/1102022207-split10.html'],
"11":['textos/1102022207-split11.html'],
"12":['textos/1102022207-split12.html'],
"13":['textos/1102022207-split13.html'],
"14":['textos/1102022207-split14.html'],
"15":['textos/1102022207-split15.html'],
"16":['textos/1102022207-split16.html'],
"17":['textos/1102022207-split17.html'],
"18":['textos/1102022207-split18.html'],
"19":['textos/1102022207-split19.html'],
"20":['textos/1102022207-split20.html'],
"21":['textos/1102022207-split21.html'],
"22":['textos/1102022207-split22.html'],
"23":['textos/1102022207-split23.html'],
"24":['textos/1102022207-split24.html'],
"25":['textos/1102022207-split25.html'],
"26":['textos/1102022207-split26.html'],
"27":['textos/1102022207-split27.html'],
"28":['textos/1102022207-split28.html'],
"29":['textos/1102022207-split29.html'],
"30":['textos/1102022207-split30.html'],
"31":['textos/1102022207-split31.html'],
};

var select8 = document.querySelector('.form-control8');

for (var miopcion in selDia) {
  document.querySelector('.form-control8')
  .options[document.querySelector('.form-control8').options.length] = new Option(miopcion);
}

select8.addEventListener("change", myFunction8);
function myFunction8() {
  var selecoption = select8.options[select8.selectedIndex].value;
	$("#contentt").load(selDia[selecoption]);
}