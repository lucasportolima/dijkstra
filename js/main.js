

var box = document.querySelector('#cliente1');
box.addEventListener('click', function() {
	box.classList.toggle('move');
	box.classList.toggle('move2');
});

//vou usar
//document.getElementsByClassName('move')[0].style.transform = 'translate(-100px, -250px)'

//Descobrir a largura
//(document.getElementById('C-4').offsetWidth + document.getElementById('C-4').offsetLeft) + 'px'


var x0y0X = (document.getElementById('C-1').offsetLeft - 10) + 'px';
var x0y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
document.getElementById('cliente').style.left = x0y0X;
document.getElementById('cliente').style.top = x0y0Y;

var x0y1X = (document.getElementById('C-1').offsetLeft - 10) + 'px';
var x0y1Y = (document.getElementById('C-1').offsetTop) + 'px';
document.getElementById('cliente1').style.left = x0y1X;
document.getElementById('cliente1').style.top = x0y1Y;

var x0y2X = (document.getElementById('C-1').offsetLeft - 10) + 'px';
var x0y2Y = document.getElementById('B-1').offsetTop + 'px';
document.getElementById('cliente2').style.left = x0y2X;
document.getElementById('cliente2').style.top = x0y2Y;

var x0y3X = (document.getElementById('C-1').offsetLeft - 10) + 'px';
var x0y3Y = document.getElementById('A-1').offsetTop + 'px';
document.getElementById('cliente3').style.left = x0y3X;
document.getElementById('cliente3').style.top = x0y3Y;

var x1y0X = (document.getElementById('C-2').offsetLeft - 10) + 'px';
var x1y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
document.getElementById('cliente4').style.left = x1y0X;
document.getElementById('cliente4').style.top = x1y0Y;

var x1y1X = (document.getElementById('C-2').offsetLeft - 10) + 'px';
var x1y1Y = (document.getElementById('C-1').offsetTop) + 'px';
document.getElementById('cliente5').style.left = x1y1X;
document.getElementById('cliente5').style.top = x1y1Y;

var x1y2X = (document.getElementById('C-2').offsetLeft - 10) + 'px';
var x1y2Y = document.getElementById('B-1').offsetTop + 'px';
document.getElementById('cliente6').style.left = x1y2X;
document.getElementById('cliente6').style.top = x1y2Y;

var x1y3X = (document.getElementById('C-2').offsetLeft - 10) + 'px';
var x1y3Y = document.getElementById('A-1').offsetTop + 'px';
document.getElementById('cliente7').style.left = x1y3X;
document.getElementById('cliente7').style.top = x1y3Y;

var x2y0X = (document.getElementById('C-3').offsetLeft - 10) + 'px';
var x2y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
document.getElementById('cliente8').style.left = x2y0X;
document.getElementById('cliente8').style.top = x2y0Y;

var x2y1X = (document.getElementById('C-3').offsetLeft - 10) + 'px';
var x2y1Y = (document.getElementById('C-1').offsetTop) + 'px';
document.getElementById('cliente9').style.left = x2y1X;
document.getElementById('cliente9').style.top = x2y1Y;

var x2y2X = (document.getElementById('C-3').offsetLeft - 10) + 'px';
var x2y2Y = document.getElementById('B-1').offsetTop + 'px';
document.getElementById('cliente10').style.left = x2y2X;
document.getElementById('cliente10').style.top = x2y2Y;

var x2y3X = (document.getElementById('C-3').offsetLeft - 10) + 'px';
var x2y3Y = document.getElementById('A-1').offsetTop + 'px';
document.getElementById('cliente11').style.left = x2y3X;
document.getElementById('cliente11').style.top = x2y3Y;

var x3y0X = (document.getElementById('C-4').offsetLeft - 10) + 'px';
var x3y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
document.getElementById('cliente12').style.left = x3y0X;
document.getElementById('cliente12').style.top = x3y0Y;

var x3y1X = (document.getElementById('C-4').offsetLeft - 10) + 'px';
var x3y1Y = (document.getElementById('C-1').offsetTop) + 'px';
document.getElementById('cliente13').style.left = x3y1X;
document.getElementById('cliente13').style.top = x3y1Y;

var x3y2X = (document.getElementById('C-4').offsetLeft - 10) + 'px';
var x3y2Y = document.getElementById('B-1').offsetTop + 'px';
document.getElementById('cliente14').style.left = x3y2X;
document.getElementById('cliente14').style.top = x3y2Y;

var x3y3X = (document.getElementById('C-4').offsetLeft - 10) + 'px';
var x3y3Y = document.getElementById('A-1').offsetTop + 'px';
document.getElementById('cliente15').style.left = x3y3X;
document.getElementById('cliente15').style.top = x3y3Y;

var x4y0X = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth ) + 'px';
var x4y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
document.getElementById('cliente16').style.left = x4y0X;
document.getElementById('cliente16').style.top = x4y0Y;

var x4y1X = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth) + 'px';
var x4y1Y = (document.getElementById('C-1').offsetTop) + 'px';
document.getElementById('cliente17').style.left = x4y1X;
document.getElementById('cliente17').style.top = x4y1Y;

var x4y2X = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth) + 'px';
var x4y2Y = document.getElementById('B-1').offsetTop + 'px';
document.getElementById('cliente18').style.left = x4y2X;
document.getElementById('cliente18').style.top = x4y2Y;

var x4y3X = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth) + 'px';
var x4y3Y = document.getElementById('A-1').offsetTop + 'px';
document.getElementById('cliente19').style.left = x4y3X;
document.getElementById('cliente19').style.top = x4y3Y;



	function add_partida(x,y) {
		if (x == 0) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-1').offsetLeft - 10) + 'px';
		}else if (x > 0 && x < 15) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-1').offsetLeft + (parseInt(document.getElementById('C-1').offsetWidth/14) * x)) + 'px';
		}else if (x == 15) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-2').offsetLeft - 10) + 'px';
		}else if (x > 15 && x < 30) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-2').offsetLeft + (parseInt(document.getElementById('C-2').offsetWidth/14) * (x - 15))) + 'px';
		}else if (x == 30) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-3').offsetLeft - 10) + 'px';
		}else if (x > 30 && x < 45) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-3').offsetLeft + (parseInt(document.getElementById('C-3').offsetWidth/14) * (x - 30))) + 'px';
		}else if (x == 45) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-4').offsetLeft - 10) + 'px';
		}else if (x > 45 && x < 50) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-4').offsetLeft + (parseInt(document.getElementById('C-4').offsetWidth/4) * (x - 45))) + 'px';
		}else if (x == 50) {
			document.getElementById('partida').classList.add("cliente");
			document.getElementById('partida').style.left = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth ) + 'px';
		}else {
			alert("valor invalido");
		}

		if (y == 0) {
			document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
		}else if (y > 0 && y < 20) {
			document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop) + (parseInt(document.getElementById('C-1').offsetHeight/19) * y) + 'px';
		}else if (y == 20) {
			document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop) + 'px';
		}else if (y > 20 && y < 50) {
			document.getElementById('partida').style.top = (document.getElementById('B-1').offsetTop) + (parseInt(document.getElementById('B-1').offsetHeight/29) * (50 - y)) + 'px';
		}else if (y == 50) {
			document.getElementById('partida').style.top = document.getElementById('B-1').offsetTop + 'px';
		}else if (y > 50 && y < 80) {
			document.getElementById('partida').style.top = (document.getElementById('A-1').offsetTop) + (parseInt(document.getElementById('A-1').offsetHeight/29) * (80 - y)) + 'px';
		}else if (y == 80) {
			document.getElementById('partida').style.top = document.getElementById('A-1').offsetTop + 'px';
		}else {
			alert("valor invalido");
		}
	}

	function add_chegada() {

	}

	function add_bloqueio() {

	}


//mais rapido
var x0y0_x1y0 = parseInt((15/110) * 100);

var x0y0_x0y1 = parseInt((20/90) * 100);

var x1y0_x2y0 = parseInt((15/110) * 100);

var x1y0_x1y1 = parseInt((20/40) * 100);

var x2y0_x3y0 = parseInt((15/110) * 100);

var x2y0_x2y1 = parseInt((20/50) * 100);

var x3y0_x4y0 = parseInt((5/110) * 100);

var x3y0_x3y1 = parseInt((20/40) * 100);

var x4y0_x4y1 = parseInt((20/50) * 100);

var x0y1_x1y1 = parseInt((15/60) * 100);

var x0y1_x0y2 = parseInt((30/90) * 100);

var x1y1_x2y1 = parseInt((15/60) * 100);

var x1y1_x1y2 = parseInt((30/40) * 100);

var x2y1_x3y1 = parseInt((15/60) * 100);

var x2y1_x2y2 = parseInt((30/50) * 100);

var x3y1_x4y1 = parseInt((5/60) * 100);

var x3y1_x3y2 = parseInt((30/40) * 100);

var x4y1_x4y2 = parseInt((30/50) * 100);

var x0y2_x1y2 = parseInt((15/80) * 100);

var x0y2_x0y3 = parseInt((30/90) * 100);

var x1y2_x2y2 = parseInt((15/80) * 100);

var x1y2_x1y3 = parseInt((30/40) * 100);

var x2y2_x3y2 = parseInt((15/80) * 100);

var x2y2_x2y3 = parseInt((30/50) * 100);

var x3y2_x4y2 = parseInt((5/80) * 100);

var x3y2_x3y3 = parseInt((30/40) * 100);

var x4y2_x4y3 = parseInt((30/50) * 100);

var x0y3_x1y3 = parseInt((15/30) * 100);

var x1y3_x2y3 = parseInt((15/30) * 100);

var x2y3_x3y3 = parseInt((15/30) * 100);

var x3y3_x4y3 = parseInt((5/30) * 100);





//mais curto
