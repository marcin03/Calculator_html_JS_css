function btn7() {document.Calculator.display.value +='7';}
function btn8() {document.Calculator.display.value +='8';}
function btn9() {document.Calculator.display.value +='9';}
function btnPlus() {
	document.Calculator.display.value +='+';
	document.getElementById("dot").disabled = false;
	}

function btn4() {document.Calculator.display.value +='4';}
function btn5() {document.Calculator.display.value +='5';}
function btn6() {document.Calculator.display.value +='6';}
function btnMinus() {
	document.Calculator.display.value +='-';
	document.getElementById("dot").disabled = false;
	}

function btn1() {document.Calculator.display.value +='1';}
function btn2() {document.Calculator.display.value +='2';}
function btn3() {document.Calculator.display.value +='3';}
function btnMultiply() {
	document.Calculator.display.value +='*';
	document.getElementById("dot").disabled = false;
	}

function btn0() {document.Calculator.display.value +='0';}
function btnC() {
	document.Calculator.display.value ='';
	document.getElementById("dot").disabled = false;
	}
function btnDot() {
	document.Calculator.display.value +='.';
	document.getElementById("dot").disabled = true;
	}
function btnDivide() {
	document.Calculator.display.value +='/';
	document.getElementById("dot").disabled = false;
	}

function btnEquals() {
	document.Calculator.display.value = eval(document.Calculator.display.value);
	document.getElementById("dot").disabled = false;
	}