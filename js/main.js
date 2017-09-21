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
	$('#chegada').show();
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
				map.partida = {cliente4:xPartida - 15, cliente8:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente5:xPartida - 15, cliente9:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente6:xPartida - 15, cliente10:auxX}
			}else{
				map.partida = {cliente7:xPartida - 15, cliente11:auxX}
			}
		}else if (xPartida > 30 && xPartida < 45) {
			if (xPartida - 45 < 0) {
				auxX = (xPartida - 45) * - 1;
			}else{
				auxX = xPartida - 45;
			}
			if (yPartida == 0) {
				map.partida = {cliente8:xPartida - 30, cliente12:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente9:xPartida - 30, cliente13:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente10:xPartida - 30, cliente14:auxX}
			}else{
				map.partida = {cliente11:xPartida - 30, cliente15:auxX}
			}
		}else {
			if (xPartida - 50 < 0) {
				auxX = (xPartida - 50) * - 1;
			}else{
				auxX = xPartida - 50;
			}
			if (yPartida == 0) {
				map.partida = {cliente12:xPartida - 45, cliente16:auxX}
			}else if (yPartida == 20) {
				map.partida = {cliente13:xPartida - 45, cliente17:auxX}
			}else if (yPartida == 50){
				map.partida = {cliente14:xPartida - 45, cliente18:auxX}
			}else{
				map.partida = {cliente15:xPartida - 45, cliente19:auxX}
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
				map.partida = {cliente1:xPartida - 20, cliente2:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente5:xPartida - 20, cliente6:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente9:xPartida - 20, cliente10:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente13:xPartida - 20, cliente14:auxX}
			}else {
				map.partida = {cliente17:xPartida - 20, cliente18:auxX}
			}
		}else {
			if (yPartida - 80 < 0) {
				auxX = (yPartida - 80) * - 1;
			}else{
				auxX = yPartida - 80;
			}
			if (xPartida == 0) {
				map.partida = {cliente2:xPartida - 50, cliente3:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente6:xPartida - 50, cliente7:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente10:xPartida - 50, cliente11:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente14:xPartida - 50, cliente15:auxX}
			}else {
				map.partida = {cliente18:xPartida - 50, cliente19:auxX}
			}
		}
	}


	// Implementar a inserção da chegada no map

	xChegada = parseInt(document.getElementById('inputFinalX').value);
	yChegada = parseInt(document.getElementById('inputFinalY').value);

	if (arrayX.indexOf(xChegada) > -1 && arrayY.indexOf(yChegada) > -1) {
		if (xChegada == 0) {
			if (yChegada == 0) {
				map.cliente0 = {cliente4:cliente0_cliente4,cliente1:cliente0_cliente1,chegada:0}
			}
			if (yChegada == 20) {
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2,chegada:0}
			}
			if (yChegada == 50) {
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:cliente2_cliente6,cliente3:cliente2_cliente3,chegada:0}
			}
			if (yChegada == 80) {
				map.cliente3 = {cliente2:cliente3_cliente2,cliente7:cliente3_cliente7,chegada:0}
			}
		}
		if (xChegada == 15) {
			if (yChegada == 0) {
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5,chegada:0}
			}
			if (yChegada == 20) {
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:0}
			}
			if (yChegada == 50) {
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7,chegada:0}
			}
			if (yChegada == 80) {
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:cliente7_cliente3,cliente11:cliente7_cliente11,chegada:0}
			}
		}
		if (xChegada == 30) {
			if (yChegada == 0) {
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:cliente8_cliente12,cliente9:cliente8_cliente9,chegada:0}
			}
			if (yChegada == 20) {
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10,chegada:0}
			}
			if (yChegada == 50) {
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11,chegada:0}
			}
			if (yChegada == 80) {
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:cliente11_cliente7,cliente15:cliente11_cliente15,chegada:0}
			}
		}
		if (xChegada == 45) {
			if (yChegada == 0) {
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:cliente12_cliente16,cliente13:cliente12_cliente13,chegada:0}
			}
			if (yChegada == 20) {
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14,chegada:0}
			}
			if (yChegada == 50) {
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18,chegada:0}
			}
			if (yChegada == 80) {
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:cliente15_cliente11,cliente19:cliente15_cliente19,chegada:0}

			}
		}
		if (xChegada == 50) {
			if (yChegada == 0) {
				map.cliente16 = {cliente12:cliente16_cliente12,cliente17:cliente16_cliente17,chegada:0}
			}
			if (yChegada == 20) {
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:cliente17_cliente13,cliente18:cliente17_cliente18,chegada:0}
			}
			if (yChegada == 50) {
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:cliente18_cliente14,cliente19:cliente18_cliente19,chegada:0}
			}
			if (yChegada == 80) {
				map.cliente19 = {cliente18:cliente19_cliente18,cliente15:cliente19_cliente15,chegada:0}
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
				map.cliente0 = {cliente4:cliente0_cliente4,cliente1:cliente0_cliente1, chegada:xChegada}
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5,chegada:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente1:xChegada, cliente5:auxX}
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2,chegada:xChegada}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente2:xChegada, cliente6:auxX}
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:cliente2_cliente6,cliente3:cliente2_cliente3,chegada:xChegada}
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7,chegada:auxX}
			}else{
				map.chegada = {cliente3:xChegada, cliente7:auxX}
				map.cliente3 = {cliente2:cliente3_cliente2,cliente7:cliente3_cliente7,chegada:xChegada}
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:cliente7_cliente3,cliente11:cliente7_cliente11,chegada:auxX}
			}
		}else if (xChegada > 15 && xChegada < 30) {
			if (xChegada - 30 < 0) {
				auxX = (xChegada - 30) * - 1;
			}else{
				auxX = xChegada - 30;
			}
			if (yChegada == 0) {
				map.chegada = {cliente4:xChegada - 15, cliente8:auxX}
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5,chegada:xChegada - 15}
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:cliente8_cliente12,cliente9:cliente8_cliente9,chegada:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente5:xChegada - 15, cliente9:auxX}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:xChegada - 15}
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10,chegada:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente6:xChegada - 15, cliente10:auxX}
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7,chegada:xChegada - 15}
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11,chegada:auxX}
			}else{
				map.chegada = {cliente7:xChegada - 15, cliente11:auxX}
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:cliente7_cliente3,cliente11:cliente7_cliente11,chegada:xChegada - 15}
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:cliente11_cliente7,cliente15:cliente11_cliente15,chegada:auxX}
			}
		}else if (xChegada > 30 && xChegada < 45) {
			if (xChegada - 45 < 0) {
				auxX = (xChegada - 45) * - 1;
			}else{
				auxX = xChegada - 45;
			}
			if (yChegada == 0) {
				map.chegada = {cliente8:xChegada - 30, cliente12:auxX}
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:cliente8_cliente12,cliente9:cliente8_cliente9,chegada:xChegada - 30}
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:cliente12_cliente16,cliente13:cliente12_cliente13,chegada:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente9:xChegada - 30, cliente13:auxX}
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10,chegada:xChegada - 30}
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14,chegada:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente10:xChegada - 30, cliente14:auxX}
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11,chegada:xChegada - 30}
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18,chegada:auxX}
			}else{
				map.chegada = {cliente11:xChegada - 30, cliente15:auxX}
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:cliente11_cliente7,cliente15:cliente11_cliente15,chegada:xChegada - 30}
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:cliente15_cliente11,cliente19:cliente15_cliente19,chegada:auxX}
			}
		}else {
			if (xChegada - 50 < 0) {
				auxX = (xChegada - 50) * - 1;
			}else{
				auxX = xChegada - 50;
			}
			if (yChegada == 0) {
				map.chegada = {cliente12:xChegada - 45, cliente16:auxX}
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:cliente12_cliente16,cliente13:cliente12_cliente13,chegada:xChegada - 45}
				map.cliente16 = {cliente12:cliente16_cliente12,cliente17:cliente16_cliente17,chegada:auxX}
			}else if (yChegada == 20) {
				map.chegada = {cliente13:xChegada - 45, cliente17:auxX}
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14,chegada:xChegada - 45}
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:cliente17_cliente13,cliente18:cliente17_cliente18,chegada:auxX}
			}else if (yChegada == 50){
				map.chegada = {cliente14:xChegada - 45, cliente18:auxX}
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18,chegada:xChegada - 45}
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:cliente18_cliente14,cliente19:cliente18_cliente19,chegada:auxX}
			}else{
				map.chegada = {cliente15:xChegada - 45, cliente19:auxX}
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:cliente15_cliente11,cliente19:cliente15_cliente19,chegada:xChegada - 45}
				map.cliente19 = {cliente18:cliente19_cliente18,cliente15:cliente19_cliente15,chegada:auxX}
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
				map.cliente0 = {cliente4:cliente0_cliente4,cliente1:cliente0_cliente1,chegada:xChegada}
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2,chegada:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente4:xChegada, cliente5:auxX}
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5,chegada:xChegada}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:auxX}
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
				map.chegada = {cliente1:xChegada - 20, cliente2:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente5:xChegada - 20, cliente6:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente9:xChegada - 20, cliente10:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente13:xChegada - 20, cliente14:auxX}
			}else {
				map.chegada = {cliente17:xChegada - 20, cliente18:auxX}
			}
		}else {
			if (yChegada - 80 < 0) {
				auxX = (yChegada - 80) * - 1;
			}else{
				auxX = xChegada - 80;
			}
			if (xChegada == 0) {
				map.chegada = {cliente2:xChegada - 50, cliente3:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente6:xChegada - 50, cliente7:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente10:xChegada - 50, cliente11:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente14:xChegada - 50, cliente15:auxX}
			}else {
				map.chegada = {cliente18:xChegada - 50, cliente19:auxX}
			}
		}
	}

	// Implementar a inserção do bloqueio no map










	graph = new Graph(map);
  array = graph.findShortestPath('partida', 'chegada');

	for (var i = 0; i < 20; i++) {
		$('#cliente' + i).hide();
	}

	for (var i = 0; i < array.length; i++) {
		$('#'+array[i]).show();
	}
}
