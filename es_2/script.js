function inizia() {

	var btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9;
	btn_1 = document.getElementById("btn_1").value;
	btn_2 = document.getElementById("btn_2").value;
	btn_3 = document.getElementById("btn_3").value;
	btn_4 = document.getElementById("btn_4").value;
	btn_5 = document.getElementById("btn_5").value;
	btn_6 = document.getElementById("btn_6").value;
	btn_7 = document.getElementById("btn_7").value;
	btn_8 = document.getElementById("btn_8").value;
	btn_9 = document.getElementById("btn_9").value;

	var btn_1_btn, btn_2_btn, btn_3_btn, btn_4_btn, btn_5_btn,btn_6_btn, btn_7_btn, btn_8_btn, btn_9_btn;

	btn_1_btn = document.getElementById("btn_1");
	btn_2_btn = document.getElementById("btn_2");
	btn_3_btn = document.getElementById("btn_3");
	btn_4_btn = document.getElementById("btn_4");
	btn_5_btn = document.getElementById("btn_5");
	btn_6_btn = document.getElementById("btn_6");
	btn_7_btn = document.getElementById("btn_7");
	btn_8_btn = document.getElementById("btn_8");
	btn_9_btn = document.getElementById("btn_9");


	if ((btn_1 == 'x' || btn_1 == 'X') && (btn_2 == 'x' || btn_2 == 'X') && (btn_3 == 'x' || btn_3 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_2_btn.style.color = "red";
		btn_3_btn.style.color = "red";
	}
	else if ((btn_1 == 'x' || btn_1 == 'X') && (btn_4 == 'x' || btn_4 == 'X') && (btn_7 == 'x' || btn_7 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_4_btn.style.color = "red";
		btn_7_btn.style.color = "red";
	}
	else if ((btn_7 == 'x' || btn_7 == 'X') && (btn_8 == 'x' || btn_8 == 'X') && (btn_9 == 'x' || btn_9 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;

		btn_7_btn.style.color = "red";
		btn_8_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_3 == 'x' || btn_3 == 'X') && (btn_6 == 'x' || btn_6 == 'X') && (btn_9 == 'x' || btn_9 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;

		btn_3_btn.style.color = "red";
		btn_6_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_1 == 'x' || btn_1 == 'X') && (btn_5 == 'x' ||
		btn_5 == 'X') && (btn_9 == 'x' || btn_9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Giocatore X ha vinto";
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_3 == 'x' || btn_3 == 'X') && (btn_5 == 'x' || btn_5 == 'X') && (btn_7 == 'x' || btn_7 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_3_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_7_btn.style.color = "red";
	}
	else if ((btn_2 == 'x' || btn_2 == 'X') && (btn_5 == 'x' || btn_5 == 'X') && (btn_8 == 'x' || btn_8 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_2_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_8_btn.style.color = "red";
	}
	else if ((btn_4 == 'x' || btn_4 == 'X') && (btn_5 == 'x' || btn_5 == 'X') && (btn_6 == 'x' || btn_6 == 'X')) 
	{
		document.getElementById('print').innerHTML = "Giocatore X ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_4_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_6_btn.style.color = "red";
	}

	else if ((btn_1 == '0' || btn_1 == '0') && (btn_2 == '0' || btn_2 == '0') && (btn_3 == '0' || btn_3 == '0')) 
	{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_2_btn.style.color = "red";
		btn_3_btn.style.color = "red";
	}
	else if ((btn_1 == '0' || btn_1 == '0') && (btn_4 == '0' || btn_4 == '0') && (btn_7 == '0' || btn_7 == '0')) 
		{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_4_btn.style.color = "red";
		btn_7_btn.style.color = "red";
	}
	else if ((btn_7 == '0' || btn_7 == '0') && (btn_8 == '0' || btn_8 == '0') && (btn_9 == '0' || btn_9 == '0')) 
		{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_6_btn.disabled = true;

		btn_7_btn.style.color = "red";
		btn_8_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_3 == '0' || btn_3 == '0') && (btn_6 == '0' || btn_6 == '0') && (btn_9 == '0' || btn_9 == '0')) 
		{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_5_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_3_btn.style.color = "red";
		btn_6_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_1 == '0' || btn_1 == '0') && (btn_5 == '0' || btn_5 == '0') && (btn_9 == '0' || btn_9 == '0')) 
		{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;

		btn_1_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_9_btn.style.color = "red";
	}
	else if ((btn_3 == '0' || btn_3 == '0') && (btn_5 == '0' || btn_5 == '0') && (btn_7 == '0' || btn_7 == '0')) 
	{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_3_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_7_btn.style.color = "red";
	}
	else if ((btn_2 == '0' || btn_2 == '0') && (btn_5 == '0' || btn_5 == '0') && (btn_8 == '0' || btn_8 == '0')) 
	{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_1_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_4_btn.disabled = true;
		btn_6_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_2_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_8_btn.style.color = "red";
	}
	else if ((btn_4 == '0' || btn_4 == '0') && (btn_5 == '0' || btn_5 == '0') && (btn_6 == '0' || btn_6 == '0')) 
	{
		document.getElementById('print').innerHTML = "Giocatore 0 ha vinto";
		btn_1_btn.disabled = true;
		btn_2_btn.disabled = true;
		btn_3_btn.disabled = true;
		btn_7_btn.disabled = true;
		btn_8_btn.disabled = true;
		btn_9_btn.disabled = true;

		btn_4_btn.style.color = "red";
		btn_5_btn.style.color = "red";
		btn_6_btn.style.color = "red";
	}
	else 
	{

		if (flag == 1) {
			document.getElementById('print').innerHTML = "Turno Giocatore X";
		}
		else {
			document.getElementById('print').innerHTML = "Turno Giocatore 0";
		}
	}
}

function pulisci() {

	location.reload();
	btn_1.value = '';  
	btn_2.value = '';
	btn_3.value = '';
	btn_4.value = '';
	btn_5.value = '';
	btn_6.value = '';
	btn_7.value = '';
	btn_8.value = '';
	btn_9.value = '';

}

flag = 1;
function btn_1_1() {
	if (flag == 1) {
		document.getElementById("btn_1").value = "X";
		document.getElementById("btn_1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_1").value = "0";
		document.getElementById("btn_1").disabled = true;
		flag = 1;
	}
}

function btn_2_1() {
	if (flag == 1) {
		document.getElementById("btn_2").value = "X";
		document.getElementById("btn_2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_2").value = "0";
		document.getElementById("btn_2").disabled = true;
		flag = 1;
	}
}

function btn_3_1() {
	if (flag == 1) {
		document.getElementById("btn_3").value = "X";
		document.getElementById("btn_3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_3").value = "0";
		document.getElementById("btn_3").disabled = true;
		flag = 1;
	}
}

function btn_1_2() {
	if (flag == 1) {
		document.getElementById("btn_4").value = "X";
		document.getElementById("btn_4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_4").value = "0";
		document.getElementById("btn_4").disabled = true;
		flag = 1;
	}
}

function btn_2_2() {
	if (flag == 1) {
		document.getElementById("btn_5").value = "X";
		document.getElementById("btn_5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_5").value = "0";
		document.getElementById("btn_5").disabled = true;
		flag = 1;
	}
}

function btn_3_2() {
	if (flag == 1) {
		document.getElementById("btn_6").value = "X";
		document.getElementById("btn_6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_6").value = "0";
		document.getElementById("btn_6").disabled = true;
		flag = 1;
	}
}

function btn_1_3() {
	if (flag == 1) {
		document.getElementById("btn_7").value = "X";
		document.getElementById("btn_7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_7").value = "0";
		document.getElementById("btn_7").disabled = true;
		flag = 1;
	}
}

function btn_2_3() {
	if (flag == 1) {
		document.getElementById("btn_8").value = "X";
		document.getElementById("btn_8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_8").value = "0";
		document.getElementById("btn_8").disabled = true;
		flag = 1;
	}
}

function btn_3_3() {
	if (flag == 1) {
		document.getElementById("btn_9").value = "X";
		document.getElementById("btn_9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn_9").value = "0";
		document.getElementById("btn_9").disabled = true;
		flag = 1;
	}
}
