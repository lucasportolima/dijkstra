function carregaVertices() {
	// Add todas as bolinhas nos vertices
	var x0y0X = (document.getElementById('C-1').offsetLeft - 10) + 'px';
	var x0y0Y = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
	document.getElementById('cliente0').style.left = x0y0X;
	document.getElementById('cliente0').style.top = x0y0Y;

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
}

$(window).resize(function(){
	carregaVertices();
	add_bloqueio();
	add_partida();
	add_chegada();
});

