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
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-1').offsetLeft - 10) + 'px';
	}else if (x > 0 && x < 15) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-1').offsetLeft + (parseInt(document.getElementById('C-1').offsetWidth/14) * x)) + 'px';
	}else if (x == 15) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-2').offsetLeft - 10) + 'px';
	}else if (x > 15 && x < 30) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-2').offsetLeft + (parseInt(document.getElementById('C-2').offsetWidth/14) * (x - 15))) + 'px';
	}else if (x == 30) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-3').offsetLeft - 10) + 'px';
	}else if (x > 30 && x < 45) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-3').offsetLeft + (parseInt(document.getElementById('C-3').offsetWidth/14) * (x - 30))) + 'px';
	}else if (x == 45) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-4').offsetLeft - 10) + 'px';
	}else if (x > 45 && x < 50) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-4').offsetLeft + (parseInt(document.getElementById('C-4').offsetWidth/4) * (x - 45))) + 'px';
	}else if (x == 50) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth ) + 'px';
	}else {
		alert("valor invalido");
	}

	if (y == 0) {
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight + 10) + 'px';
	}else if (y > 0 && y < 20) {
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop) + (parseInt(document.getElementById('C-1').offsetHeight/19) * y) + 'px';
	}else if (y == 20) {
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop) + 'px';
	}else if (y > 20 && y < 50) {
		document.getElementById('chegada').style.top = (document.getElementById('B-1').offsetTop) + (parseInt(document.getElementById('B-1').offsetHeight/29) * (50 - y)) + 'px';
	}else if (y == 50) {
		document.getElementById('chegada').style.top = document.getElementById('B-1').offsetTop + 'px';
	}else if (y > 50 && y < 80) {
		document.getElementById('chegada').style.top = (document.getElementById('A-1').offsetTop) + (parseInt(document.getElementById('A-1').offsetHeight/29) * (80 - y)) + 'px';
	}else if (y == 80) {
		document.getElementById('chegada').style.top = document.getElementById('A-1').offsetTop + 'px';
	}else {
		alert("valor invalido");
	}
}

//função bloqueio: vai ser add um pontinho no bloqueio, vai ser virificado se
//esse ponto está em cima de ponrto, vai excluir aquela aresta que ele está em cima.
function add_bloqueio() {

}

function gerarCaminho(map){

	// map.partida = {cliente3:10, cliente1:23}

	arrayX = [0,15,30,45,50];
	arrayY = [0,20,50,80];

	var vertice;

	// Implementar a inserção da partida no map

	xPartida = parseInt(document.getElementById('inputInicioX').value);
	yPartida = parseInt(document.getElementById('inputInicioY').value);

	if (arrayX.indexOf(xPartida) > -1 && arrayY.indexOf(yPartida) > -1) {
		if (xPartida == 0) {
			if (yPartida == 0) {
				map.partida = map.cliente0
			}
			if (yPartida == 20) {
				map.partida = map.cliente1
			}
			if (yPartida == 50) {
				map.partida = map.cliente2
			}
			if (yPartida == 80) {
				map.partida = map.cliente3
			}
		}
		if (xPartida == 15) {
			if (yPartida == 0) {
				map.partida = map.cliente4
			}
			if (yPartida == 20) {
				map.partida = map.cliente5
			}
			if (yPartida == 50) {
				map.partida = map.cliente6
			}
			if (yPartida == 80) {
				map.partida = map.cliente7
			}
		}
		if (xPartida == 30) {
			if (yPartida == 0) {
				map.partida = map.cliente8
			}
			if (yPartida == 20) {
				map.partida = map.cliente9
			}
			if (yPartida == 50) {
				map.partida = map.cliente10
			}
			if (yPartida == 80) {
				map.partida = map.cliente11
			}
		}
		if (xPartida == 45) {
			if (yPartida == 0) {
				map.partida = map.cliente12
			}
			if (yPartida == 20) {
				map.partida = map.cliente13
			}
			if (yPartida == 50) {
				map.partida = map.cliente14
			}
			if (yPartida == 80) {
				map.partida = map.cliente15
			}
		}
		if (xPartida == 50) {
			if (yPartida == 0) {
				map.partida = map.cliente16
			}
			if (yPartida == 20) {
				map.partida = map.cliente17
			}
			if (yPartida == 50) {
				map.partida = map.cliente18
			}
			if (yPartida == 80) {
				map.partida = map.cliente19
			}
		}
	}

	if (arrayX.indexOf(xPartida) < 0) {
		// perpenticular ao y
		vertice = "y";
	}

	if (vertice == "y") {
		//vamos mexer no x
		if (xPartida > 0 && xPartida < 15) {
			if (xPartida - 15 < 0) {
				auxX = (xPartida - 15) * - 1;
			}else{
				auxX = xPartida - 15;
			}
			if (yPartida == 0) {
				map.partida = {cliente0:xPartida, cliente4:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente1:xPartida, cliente5:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente2:xPartida, cliente6:auxX}
			}else{
				map.partida = {cliente3:xPartida, cliente7:auxX}
			}
		}else if (xPartida > 15 && xPartida < 30) {
			if (xPartida - 30 < 0) {
				auxX = (xPartida - 30) * - 1;
			}else{
				auxX = xPartida - 30;
			}
			if (yPartida == 0) {
				map.partida = {cliente4:xPartida, cliente8:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente5:xPartida, cliente9:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente6:xPartida, cliente10:auxX}
			}else{
				map.partida = {cliente7:xPartida, cliente11:auxX}
			}
		}else if (xPartida > 30 && xPartida < 45) {
			if (xPartida - 45 < 0) {
				auxX = (xPartida - 45) * - 1;
			}else{
				auxX = xPartida - 45;
			}
			if (yPartida == 0) {
				map.partida = {cliente8:xPartida, cliente12:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente9:xPartida, cliente13:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente10:xPartida, cliente14:auxX}
			}else{
				map.partida = {cliente11:xPartida, cliente15:auxX}
			}
		}else {
			if (xPartida - 50 < 0) {
				auxX = (xPartida - 50) * - 1;
			}else{
				auxX = xPartida - 50;
			}
			if (yPartida == 0) {
				map.partida = {cliente12:xPartida, cliente16:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente13:xPartida, cliente17:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente14:xPartida, cliente18:auxX}
			}else{
				map.partida = {cliente15:xPartida, cliente19:auxX}
			}
		}
	}else{
		//vamos mexer no y
		if (yPartida > 0 && yPartida < 20) {
			if (yPartida - 20 < 0) {
				auxX = (yPartida - 20) * - 1;
			}else{
				auxX = yPartida - 20;
			}
			if (xPartida == 0) {
				map.partida = {cliente0:xPartida, cliente1:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente4:xPartida, cliente5:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente8:xPartida, cliente9:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente12:xPartida, cliente13:auxX}
			}else {
				map.partida = {cliente16:xPartida, cliente17:auxX}
			}
		}else if (yPartida > 20 && yPartida < 50) {
			if (yPartida - 50 < 0) {
				auxX = (yPartida - 50) * - 1;
			}else{
				auxX = yPartida - 50;
			}
			if (xPartida == 0) {
				map.partida = {cliente1:xPartida, cliente2:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente5:xPartida, cliente6:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente9:xPartida, cliente10:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente13:xPartida, cliente14:auxX}
			}else {
				map.partida = {cliente17:xPartida, cliente18:auxX}
			}
		}else {
			if (yPartida - 80 < 0) {
				auxX = (yPartida - 80) * - 1;
			}else{
				auxX = yPartida - 80;
			}
			if (xPartida == 0) {
				map.partida = {cliente2:xPartida, cliente3:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente6:xPartida, cliente7:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente10:xPartida, cliente11:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente14:xPartida, cliente15:auxX}
			}else {
				map.partida = {cliente18:xPartida, cliente19:auxX}
			}
		}
	}


	// Implementar a inserção da chegada no map

	xChegada = parseInt(document.getElementById('inputFinalX').value);
	yChegada = parseInt(document.getElementById('inputFinalY').value);

	if (arrayX.indexOf(xChegada) > -1 && arrayY.indexOf(yChegada) > -1) {
		if (xChegada == 0) {
			if (yChegada == 0) {
				map.chegada = map.cliente0
			}
			if (yChegada == 20) {
				map.chegada = map.cliente1
			}
			if (yChegada == 50) {
				map.chegada = map.cliente2
			}
			if (yChegada == 80) {
				map.chegada = map.cliente3
			}
		}
		if (xChegada == 15) {
			if (yChegada == 0) {
				map.chegada = map.cliente4
			}
			if (yChegada == 20) {
				map.chegada = map.cliente5
			}
			if (yChegada == 50) {
				map.chegada = map.cliente6
			}
			if (yChegada == 80) {
				map.chegada = map.cliente7
			}
		}
		if (xChegada == 30) {
			if (yChegada == 0) {
				map.chegada = map.cliente8
			}
			if (yChegada == 20) {
				map.chegada = map.cliente9
			}
			if (yChegada == 50) {
				map.chegada = map.cliente10
			}
			if (yChegada == 80) {
				map.chegada = map.cliente11
			}
		}
		if (xChegada == 45) {
			if (yChegada == 0) {
				map.chegada = map.cliente12
			}
			if (yChegada == 20) {
				map.chegada = map.cliente13
			}
			if (yChegada == 50) {
				map.chegada = map.cliente14
			}
			if (yChegada == 80) {
				map.chegada = map.cliente15
			}
		}
		if (xChegada == 50) {
			if (yChegada == 0) {
				map.chegada = map.cliente16
			}
			if (yChegada == 20) {
				map.chegada = map.cliente17
			}
			if (yChegada == 50) {
				map.chegada = map.cliente18
			}
			if (yChegada == 80) {
				map.chegada = map.cliente19
			}
		}
	}

	if (arrayX.indexOf(xChegada) < 0) {
		// perpenticular ao y
		vertice = "y";
	}

	if (vertice == "y") {
		//vamos mexer no x
		if (xChegada > 0 && xChegada < 15) {
			if (xChegada - 15 < 0) {
				auxX = (xChegada - 15) * - 1;
			}else{
				auxX = xChegada - 15;
			}
			if (yChegada == 0) {
				map.chegada = {cliente0:xChegada, cliente4:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente1:xChegada, cliente5:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente2:xChegada, cliente6:auxX}
			}else{
				map.chegada = {cliente3:xChegada, cliente7:auxX}
			}
		}else if (xChegada > 15 && xChegada < 30) {
			if (xChegada - 30 < 0) {
				auxX = (xChegada - 30) * - 1;
			}else{
				auxX = xChegada - 30;
			}
			if (yChegada == 0) {
				map.chegada = {cliente4:xChegada, cliente8:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente5:xChegada, cliente9:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente6:xChegada, cliente10:auxX}
			}else{
				map.chegada = {cliente7:xChegada, cliente11:auxX}
			}
		}else if (xChegada > 30 && xChegada < 45) {
			if (xChegada - 45 < 0) {
				auxX = (xChegada - 45) * - 1;
			}else{
				auxX = xChegada - 45;
			}
			if (yChegada == 0) {
				map.chegada = {cliente8:xChegada, cliente12:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente9:xChegada, cliente13:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente10:xChegada, cliente14:auxX}
			}else{
				map.chegada = {cliente11:xChegada, cliente15:auxX}
			}
		}else {
			if (xChegada - 50 < 0) {
				auxX = (xChegada - 50) * - 1;
			}else{
				auxX = xChegada - 50;
			}
			if (yChegada == 0) {
				map.chegada = {cliente12:xChegada, cliente16:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente13:xChegada, cliente17:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente14:xChegada, cliente18:auxX}
			}else{
				map.chegada = {cliente15:xChegada, cliente19:auxX}
			}
		}
	}else{
		//vamos mexer no y
		if (yChegada > 0 && yChegada < 20) {
			if (yChegada - 20 < 0) {
				auxX = (yChegada - 20) * - 1;
			}else{
				auxX = yChegada - 20;
			}
			if (xChegada == 0) {
				map.chegada = {cliente0:xChegada, cliente1:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente4:xChegada, cliente5:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente8:xChegada, cliente9:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente12:xChegada, cliente13:auxX}
			}else {
				map.chegada = {cliente16:xChegada, cliente17:auxX}
			}
		}else if (yChegada > 20 && yChegada < 50) {
			if (yChegada - 50 < 0) {
				auxX = (yChegada - 50) * - 1;
			}else{
				auxX = yChegada - 50;
			}
			if (xChegada == 0) {
				map.chegada = {cliente1:xChegada, cliente2:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente5:xChegada, cliente6:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente9:xChegada, cliente10:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente13:xChegada, cliente14:auxX}
			}else {
				map.chegada = {cliente17:xChegada, cliente18:auxX}
			}
		}else {
			if (yChegada - 80 < 0) {
				auxX = (yChegada - 80) * - 1;
			}else{
				auxX = xChegada - 80;
			}
			if (xChegada == 0) {
				map.chegada = {cliente2:xChegada, cliente3:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente6:xChegada, cliente7:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente10:xChegada, cliente11:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente14:xChegada, cliente15:auxX}
			}else {
				map.chegada = {cliente18:xChegada, cliente19:auxX}
			}
		}
	}

	// Implementar a inserção do bloqueio no map










	graph = new Graph(map);
  	array = graph.findShortestPath('partida', 'chegada');

	for (var i = 0; i < 19; i++) {
		$('#cliente' + i).hide();
	}

	for (var i = 0; i < array.length; i++) {
		$('#'+array[i]).show();
	}
}
