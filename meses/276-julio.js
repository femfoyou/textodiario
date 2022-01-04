var tiempo = new Date();
var temadiario = tiempo.getDate();
var mmes = tiempo.getMonth();
var frase = temadiario+"/"+mmes;

$(document).ready(function() {


if (temadiario == 1){
		$("#contentt").load('textos/1102022206.html');
	}
	else {
		$("#contentt").load('textos/1102022206-split'+temadiario+'.html');
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
	$("#contentt").load('textos/1102022206-split'+temadi+'.html');
})
document.getElementById('next').addEventListener("click", function() {
	theDate += 86400000;
	
	temadi = getTheDate(theDate) 
	$("#contentt").load('textos/1102022206-split'+temadi+'.html');
  
})
function getTheDate(getDate) {
  var theCDate = new Date(getDate);  
  return theCDate.getDate();
}

var selDia = {
"1":['textos/1102022206.html'],
"2":['textos/1102022206-split2.html'],
"3":['textos/1102022206-split3.html'],
"4":['textos/1102022206-split4.html'],
"5":['textos/1102022206-split5.html'],
"6":['textos/1102022206-split6.html'],
"7":['textos/1102022206-split7.html'],
"8":['textos/1102022206-split8.html'],
"9":['textos/1102022206-split9.html'],
"10":['textos/1102022206-split10.html'],
"11":['textos/1102022206-split11.html'],
"12":['textos/1102022206-split12.html'],
"13":['textos/1102022206-split13.html'],
"14":['textos/1102022206-split14.html'],
"15":['textos/1102022206-split15.html'],
"16":['textos/1102022206-split16.html'],
"17":['textos/1102022206-split17.html'],
"18":['textos/1102022206-split18.html'],
"19":['textos/1102022206-split19.html'],
"20":['textos/1102022206-split20.html'],
"21":['textos/1102022206-split21.html'],
"22":['textos/1102022206-split22.html'],
"23":['textos/1102022206-split23.html'],
"24":['textos/1102022206-split24.html'],
"25":['textos/1102022206-split25.html'],
"26":['textos/1102022206-split26.html'],
"27":['textos/1102022206-split27.html'],
"28":['textos/1102022206-split28.html'],
"29":['textos/1102022206-split29.html'],
"30":['textos/1102022206-split30.html'],
"31":['textos/1102022206-split31.html'],
};

var select7 = document.querySelector('.form-control7');

for (var miopcion in selDia) {
  document.querySelector('.form-control7').options[document.querySelector('.form-control7').options.length] = new Option(miopcion);
}

select7.addEventListener("change", myFunction7);
function myFunction7() {
  var selecoption = select7.options[select7.selectedIndex].value;
	$("#contentt").load(selDia[selecoption]);
}