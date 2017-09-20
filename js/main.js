// função que add a partida
function add_partida() {
	//falta verificar se os vertices são válidos
	arrayX = [0,15,30,45,50]
	arrayY = [0,20,50,80]
	x = parseInt(document.getElementById('inputInicioX').value)
	y = parseInt(document.getElementById('inputInicioY').value)

	if (arrayX.indexOf(x) < 0 && arrayY.indexOf(y) < 0) {
		alert("Valor de partida invalido, digite outro valor!")
		return 0;
	}

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
	$('#partida').show();
}

//função add chegada, função igual da add_partida, com a diferença que
//ela vai verificar se a chegada está em cima da partida.
function add_chegada() {
	arrayX = [0,15,30,45,50]
	arrayY = [0,20,50,80]
	xPartida = parseInt(document.getElementById('inputInicioX').value)
	yPartida = parseInt(document.getElementById('inputInicioY').value)

	x = parseInt(document.getElementById('inputFinalX').value)
	y = parseInt(document.getElementById('inputFinalY').value)

	if (xPartida == x && yPartida == y) {
		alert("Valores de chegadas são iguais aos valores de partida!")
		return 0;
	}

	if (arrayX.indexOf(x) < 0 && arrayY.indexOf(y) < 0) {
		alert("Valor de chegada invalido, digite outro valor!")
		return 0;
	}

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

//função bloqueio: vai ser add um pontinho no bloqueio, vai ser virificado se
//esse ponto está em cima de ponrto, vai excluir aquela aresta que ele está em cima.
function add_bloqueio() {

}

function gerarCaminho(map){

	//mapCurto.partida = {cliente3:10, cliente1:23}

	// arrayX = [0,15,30,45,50];
	// arrayY = [0,20,50,80];
	
	// var vertice;

	// // Implementar a inserção da partida no map

	// xPartida = parseInt(document.getElementById('inputInicioX').value);
	// yPartida = parseInt(document.getElementById('inputInicioY').value);

	// if (arrayX.indexOf(xPartida) > -1 && arrayY.indexOf(yPartida) > -1) {
	// 	// Em cima do vertice
	// }

	// if (arrayX.indexOf(xPartida) < 0) {
	// 	// perpenticular ao y
	// 	vertice = "y";
	// }

	// if (vertice == "y") {
	// 	//vamos mexer no x
	// 	if (xPartida > 0 && xPartida < 15) {

	// 	}else if (xPartida > 15 && xPartida < 30) {

	// 	}else if (xPartida > 30 && xPartida < 45) {

	// 	}else {

	// 	}

	// }else{
	// 	//vamos mexer no y
	// 	if (yPartida > 0 && yPartida < 20) {

	// 	}else if (yPartida > 20 && yPartida < 50) {

	// 	}else {

	// 	}

	// }



	// Implementar a inserção da chegada no map
	// Implementar a inserção do bloqueio no map










	graph = new Graph(map);
  	array = graph.findShortestPath('cliente0', 'cliente19');

	for (var i = 0; i < 19; i++) {
		$('#cliente' + i).hide();
	}

	for (var i = 0; i < array.length; i++) {
		$('#'+array[i]).show();
	}
}
