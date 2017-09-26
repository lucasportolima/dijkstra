// função que add a partida
function add_partida() {

	for (var i = 0; i < 20; i++) {
		$('#cliente' + i).hide();
	}

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
		document.getElementById('partida').style.left = (document.getElementById('C-1').offsetLeft - 15) + 'px';
	}else if (x > 0 && x < 15) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-1').offsetLeft + (parseInt(document.getElementById('C-1').offsetWidth/14) * x)) + 'px';
	}else if (x == 15) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-2').offsetLeft - 15) + 'px';
	}else if (x > 15 && x < 30) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-2').offsetLeft + (parseInt(document.getElementById('C-2').offsetWidth/14) * (x - 15))) + 'px';
	}else if (x == 30) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-3').offsetLeft - 15) + 'px';
	}else if (x > 30 && x < 45) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-3').offsetLeft + (parseInt(document.getElementById('C-3').offsetWidth/14) * (x - 30))) + 'px';
	}else if (x == 45) {
		document.getElementById('partida').classList.add("cliente");
		document.getElementById('partida').style.left = (document.getElementById('C-4').offsetLeft - 15) + 'px';
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
		document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop + document.getElementById('C-1').offsetHeight - 12) + 'px';
	}else if (y > 0 && y < 20) {
		document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop - 12) + (parseInt(document.getElementById('C-1').offsetHeight/19) * y) + 'px';
	}else if (y == 20) {
		document.getElementById('partida').style.top = (document.getElementById('C-1').offsetTop - 12) + 'px';
	}else if (y > 20 && y < 50) {
		document.getElementById('partida').style.top = (document.getElementById('B-1').offsetTop - 12) + (parseInt(document.getElementById('B-1').offsetHeight/29) * (50 - y)) + 'px';
	}else if (y == 50) {
		document.getElementById('partida').style.top = document.getElementById('B-1').offsetTop - 12 + 'px';
	}else if (y > 50 && y < 80) {
		document.getElementById('partida').style.top = (document.getElementById('A-1').offsetTop - 12) + (parseInt(document.getElementById('A-1').offsetHeight/29) * (80 - y)) + 'px';
	}else if (y == 80) {
		document.getElementById('partida').style.top = document.getElementById('A-1').offsetTop - 12 + 'px';
	}else {
		alert("valor invalido");
	}
	$('#partida').show();
}

//função add chegada, função igual da add_partida, com a diferença que
//ela vai verificar se a chegada está em cima da partida.
function add_chegada() {

	for (var i = 0; i < 20; i++) {
		$('#cliente' + i).hide();
	}

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
		document.getElementById('chegada').style.left = (document.getElementById('C-1').offsetLeft - 15) + 'px';
	}else if (x > 0 && x < 15) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-1').offsetLeft + (parseInt(document.getElementById('C-1').offsetWidth/14) * x)) + 'px';
	}else if (x == 15) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-2').offsetLeft - 15) + 'px';
	}else if (x > 15 && x < 30) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-2').offsetLeft + (parseInt(document.getElementById('C-2').offsetWidth/14) * (x - 15))) + 'px';
	}else if (x == 30) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-3').offsetLeft - 15) + 'px';
	}else if (x > 30 && x < 45) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-3').offsetLeft + (parseInt(document.getElementById('C-3').offsetWidth/14) * (x - 30))) + 'px';
	}else if (x == 45) {
		document.getElementById('chegada').classList.add("cliente");
		document.getElementById('chegada').style.left = (document.getElementById('C-4').offsetLeft - 15) + 'px';
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
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop - 12 + document.getElementById('C-1').offsetHeight + 10) + 'px';
	}else if (y > 0 && y < 20) {
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop - 12) + (parseInt(document.getElementById('C-1').offsetHeight/19) * y) + 'px';
	}else if (y == 20) {
		document.getElementById('chegada').style.top = (document.getElementById('C-1').offsetTop - 12) + 'px';
	}else if (y > 20 && y < 50) {
		document.getElementById('chegada').style.top = (document.getElementById('B-1').offsetTop - 12) + (parseInt(document.getElementById('B-1').offsetHeight/29) * (50 - y)) + 'px';
	}else if (y == 50) {
		document.getElementById('chegada').style.top = document.getElementById('B-1').offsetTop - 12 + 'px';
	}else if (y > 50 && y < 80) {
		document.getElementById('chegada').style.top = (document.getElementById('A-1').offsetTop - 12) + (parseInt(document.getElementById('A-1').offsetHeight/29) * (80 - y)) + 'px';
	}else if (y == 80) {
		document.getElementById('chegada').style.top = document.getElementById('A-1').offsetTop - 12 + 'px';
	}else {
		alert("valor invalido");
	}
	$('#chegada').show();
}

//função bloqueio: vai ser add um pontinho no bloqueio, vai ser virificado se
//esse ponto está em cima de ponrto, vai excluir aquela aresta que ele está em cima.
function add_bloqueio() {

	for (var i = 0; i < 20; i++) {
		$('#cliente' + i).hide();
	}

	arrayX = [0,15,30,45,50]
	arrayY = [0,20,50,80]

	x = parseInt(document.getElementById('inputBloqueioX').value)
	y = parseInt(document.getElementById('inputBloqueioY').value)

	xPartida = parseInt(document.getElementById('inputInicioX').value)
	yPartida = parseInt(document.getElementById('inputInicioY').value)

	xChegada = parseInt(document.getElementById('inputFinalX').value)
	yChegada = parseInt(document.getElementById('inputFinalY').value)

	if (xPartida == x && yPartida == y) {
		alert("Valores de bloqueio são iguais aos valores de partida!")
		return 0;
	}

	if (xChegada == x && yChegada == y) {
		alert("Valores de bloqueio são iguais aos valores de chegada!")
		return 0;
	}

	if (arrayX.indexOf(x) < 0 && arrayY.indexOf(y) < 0) {
		alert("Valor de bloqueio invalido, digite outro valor!")
		return 0;
	}

	if (x == 0) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-1').offsetLeft - 15) + 'px';
	}else if (x > 0 && x < 15) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-1').offsetLeft + (parseInt(document.getElementById('C-1').offsetWidth/14) * x)) + 'px';
	}else if (x == 15) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-2').offsetLeft - 15) + 'px';
	}else if (x > 15 && x < 30) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-2').offsetLeft + (parseInt(document.getElementById('C-2').offsetWidth/14) * (x - 15))) + 'px';
	}else if (x == 30) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-3').offsetLeft - 15) + 'px';
	}else if (x > 30 && x < 45) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-3').offsetLeft + (parseInt(document.getElementById('C-3').offsetWidth/14) * (x - 30))) + 'px';
	}else if (x == 45) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-4').offsetLeft - 15) + 'px';
	}else if (x > 45 && x < 50) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-4').offsetLeft + (parseInt(document.getElementById('C-4').offsetWidth/4) * (x - 45))) + 'px';
	}else if (x == 50) {
		document.getElementById('bloqueio').classList.add("cliente");
		document.getElementById('bloqueio').style.left = (document.getElementById('C-4').offsetLeft + document.getElementById('C-4').offsetWidth ) + 'px';
	}else {
		alert("valor invalido");
	}

	if (y == 0) {
		document.getElementById('bloqueio').style.top = (document.getElementById('C-1').offsetTop - 12 + document.getElementById('C-1').offsetHeight + 10) + 'px';
	}else if (y > 0 && y < 20) {
		document.getElementById('bloqueio').style.top = (document.getElementById('C-1').offsetTop - 12) + (parseInt(document.getElementById('C-1').offsetHeight/19) * y) + 'px';
	}else if (y == 20) {
		document.getElementById('bloqueio').style.top = (document.getElementById('C-1').offsetTop - 12) + 'px';
	}else if (y > 20 && y < 50) {
		document.getElementById('bloqueio').style.top = (document.getElementById('B-1').offsetTop - 12) + (parseInt(document.getElementById('B-1').offsetHeight/29) * (50 - y)) + 'px';
	}else if (y == 50) {
		document.getElementById('bloqueio').style.top = document.getElementById('B-1').offsetTop - 12 + 'px';
	}else if (y > 50 && y < 80) {
		document.getElementById('bloqueio').style.top = (document.getElementById('A-1').offsetTop - 12) + (parseInt(document.getElementById('A-1').offsetHeight/29) * (80 - y)) + 'px';
	}else if (y == 80) {
		document.getElementById('bloqueio').style.top = document.getElementById('A-1').offsetTop - 12 + 'px';
	}else {
		alert("valor invalido");
	}
	$('#bloqueio').show();
}



function gerarCaminho(map){

	// map.partida = {cliente3:10, cliente1:23}

	arrayX = [0,15,30,45,50]
	arrayY = [0,20,50,80]

	xBloqueio = parseInt(document.getElementById('inputBloqueioX').value)
	yBloqueio = parseInt(document.getElementById('inputBloqueioY').value)

	if (arrayX.indexOf(xBloqueio) < 0 && arrayY.indexOf(yBloqueio) < 0) {
		alert("Valor de bloqueio invalido, digite outro valor!")
		return 0;
	}

	xPartida = parseInt(document.getElementById('inputInicioX').value)
	yPartida = parseInt(document.getElementById('inputInicioY').value)

	if (arrayX.indexOf(xPartida) < 0 && arrayY.indexOf(yPartida) < 0) {
		alert("Valor de partida invalido, digite outro valor!")
		return 0;
	}

	xChegada = parseInt(document.getElementById('inputFinalX').value)
	yChegada = parseInt(document.getElementById('inputFinalY').value)

	if (arrayX.indexOf(xChegada) < 0 && arrayY.indexOf(yChegada) < 0) {
		alert("Valor de chegada invalido, digite outro valor!")
		return 0;
	}

	limparDados();

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
		}if (xPartida > 15 && xPartida < 30) {
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
		}if (xPartida > 30 && xPartida < 45) {
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
		}if (xPartida > 45 && xPartida < 50) {
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
				map.partida = {cliente0:yPartida, cliente1:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente4:yPartida, cliente5:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente8:yPartida, cliente9:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente12:yPartida, cliente13:auxX}
			}else {
				map.partida = {cliente16:yPartida, cliente17:auxX}
			}
		}if (yPartida > 20 && yPartida < 50) {
			if (yPartida - 50 < 0) {
				auxX = (yPartida - 50) * - 1;
			}else{
				auxX = yPartida - 50;
			}
			if (xPartida == 0) {
				map.partida = {cliente1:yPartida - 20, cliente2:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente5:yPartida - 20, cliente6:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente9:yPartida - 20, cliente10:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente13:yPartida - 20, cliente14:auxX}
			}else {
				map.partida = {cliente17:yPartida - 20, cliente18:auxX}
			}
		}if (yPartida > 50 && yPartida < 80){
			if (yPartida - 80 < 0) {
				auxX = (yPartida - 80) * - 1;
			}else{
				auxX = yPartida - 80;
			}
			if (xPartida == 0) {
				map.partida = {cliente2:yPartida - 50, cliente3:auxX}
			}else if (xPartida == 15) {
				map.partida = {cliente6:yPartida - 50, cliente7:auxX}
			}else if (xPartida == 30) {
				map.partida = {cliente10:yPartida - 50, cliente11:auxX}
			}else if (xPartida == 45) {
				map.partida = {cliente14:yPartida - 50, cliente15:auxX}
			}else {
				map.partida = {cliente18:yPartida - 50, cliente19:auxX}
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
		}if (xChegada > 15 && xChegada < 30) {
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
		}if (xChegada > 30 && xChegada < 45) {
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
		}if (xChegada > 45 && xChegada < 50) {
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
				map.chegada = {cliente0:yChegada, cliente1:auxX}
				map.cliente0 = {cliente4:cliente0_cliente4,cliente1:cliente0_cliente1,chegada:yChegada}
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2,chegada:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente4:yChegada, cliente5:auxX}
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5,chegada:yChegada}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente8:yChegada, cliente9:auxX}
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:cliente8_cliente12,cliente9:cliente8_cliente9,chegada:yChegada}
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10,chegada:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente12:yChegada, cliente13:auxX}
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:cliente12_cliente16,cliente13:cliente12_cliente13,chegada:yChegada}
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14,chegada:auxX}
			}else {
				map.chegada = {cliente16:yChegada, cliente17:auxX}
				map.cliente16 = {cliente12:cliente16_cliente12,cliente17:cliente16_cliente17,chegada:yChegada}
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:cliente17_cliente13,cliente18:cliente17_cliente18,chegada:auxX}
			}
		}if (yChegada > 20 && yChegada < 50) {
			if (yChegada - 50 < 0) {
				auxX = (yChegada - 50) * - 1;
			}else{
				auxX = yChegada - 50;
			}
			if (xChegada == 0) {
				map.chegada = {cliente1:yChegada - 20, cliente2:auxX}
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2,chegada:yChegada - 20}
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:cliente2_cliente6,cliente3:cliente2_cliente3,chegada:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente5:yChegada - 20, cliente6:auxX}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6,chegada:yChegada - 20}
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7,chegada:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente9:yChegada - 20, cliente10:auxX}
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10,chegada:yChegada - 20}
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11,chegada:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente13:yChegada - 20, cliente14:auxX}
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14,chegada:yChegada - 20}
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18,chegada:auxX}
			}else {
				map.chegada = {cliente17:yChegada - 20, cliente18:auxX}
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:cliente17_cliente13,cliente18:cliente17_cliente18,chegada:yChegada - 20}
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:cliente18_cliente14,cliente19:cliente18_cliente19,chegada:auxX}
			}
		}if (yChegada > 50 && yChegada < 80) {
			if (yChegada - 80 < 0) {
				auxX = (yChegada - 80) * - 1;
			}else{
				auxX = yChegada - 80;
			}
			if (xChegada == 0) {
				map.chegada = {cliente2:yChegada - 50, cliente3:auxX}
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:cliente2_cliente6,cliente3:cliente2_cliente3,chegada:yChegada - 50}
				map.cliente3 = {cliente2:cliente3_cliente2,cliente7:cliente3_cliente7,chegada:auxX}
			}else if (xChegada == 15) {
				map.chegada = {cliente6:yChegada - 50, cliente7:auxX}
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7,chegada:yChegada - 50}
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:cliente7_cliente3,cliente11:cliente7_cliente11,chegada:auxX}
			}else if (xChegada == 30) {
				map.chegada = {cliente10:yChegada - 50, cliente11:auxX}
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11,chegada:yChegada - 50}
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:cliente11_cliente7,cliente15:cliente11_cliente15,chegada:auxX}
			}else if (xChegada == 45) {
				map.chegada = {cliente14:yChegada - 50, cliente15:auxX}
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18,chegada:yChegada - 50}
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:cliente15_cliente11,cliente19:cliente15_cliente19,chegada:auxX}
			}else {
				map.chegada = {cliente18:yChegada - 50, cliente19:auxX}
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:cliente18_cliente14,cliente19:cliente18_cliente19,chegada:yChegada - 50}
				map.cliente19 = {cliente18:cliente19_cliente18,cliente15:cliente19_cliente15,chegada:auxX}
			}
		}
	}

	// Implementar a inserção do bloqueio no map


	xBloqueio = parseInt(document.getElementById('inputBloqueioX').value);
	yBloqueio = parseInt(document.getElementById('inputBloqueioY').value);

	if (arrayX.indexOf(xBloqueio) > -1 && arrayY.indexOf(yBloqueio) > -1) {
		if (xBloqueio == 0) {
			if (yBloqueio == 0) {
				map.cliente0 = {}
			}
			if (yBloqueio == 20) {
				map.cliente1 = {}
			}
			if (yBloqueio == 50) {
				map.cliente2 = {}
			}
			if (yBloqueio == 80) {
				map.cliente3 = {}
			}
		}
		if (xBloqueio == 15) {
			if (yBloqueio == 0) {
				map.cliente4 = {}
			}
			if (yBloqueio == 20) {
				map.cliente5 = {}
			}
			if (yBloqueio == 50) {
				map.cliente6 = {}
			}
			if (yBloqueio == 80) {
				map.cliente7 = {}
			}
		}
		if (xBloqueio == 30) {
			if (yBloqueio == 0) {
				map.cliente8 = {}
			}
			if (yBloqueio == 20) {
				map.cliente9 = {}
			}
			if (yBloqueio == 50) {
				map.cliente10 = {}
			}
			if (yBloqueio == 80) {
				map.cliente11 = {}
			}
		}
		if (xBloqueio == 45) {
			if (yBloqueio == 0) {
				map.cliente12 = {}
			}
			if (yBloqueio == 20) {
				map.cliente13 = {}
			}
			if (yBloqueio == 50) {
				map.cliente14 = {}
			}
			if (yBloqueio == 80) {
				map.cliente15 = {}

			}
		}
		if (xBloqueio == 50) {
			if (yBloqueio == 0) {
				map.cliente16 = {}
			}
			if (yBloqueio == 20) {
				map.cliente17 = {}
			}
			if (yBloqueio == 50) {
				map.cliente18 = {}
			}
			if (yBloqueio == 80) {
				map.cliente19 = {}
			}
		}
	}

	if (arrayX.indexOf(xBloqueio) < 0) {
		// perpenticular ao y
		vertice = "y";
	}

	if (vertice == "y") {
		//vamos mexer no x
		if (xBloqueio > 0 && xBloqueio < 15) {
			if (yBloqueio == 0) {
				map.cliente0 = {cliente4:100,cliente1:cliente0_cliente1}
				map.cliente4 = {cliente0:100,cliente8:cliente4_cliente8,cliente5:cliente4_cliente5}
			}else if (yBloqueio == 20) {
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:100,cliente2:cliente1_cliente2}
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:100,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6}
			}else if (yBloqueio == 50){
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:100,cliente3:cliente2_cliente3}
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:100,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7}
			}else{
				map.cliente3 = {cliente2:cliente3_cliente2,cliente7:100}
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:100,cliente11:cliente7_cliente11}
			}
		}if (xBloqueio > 15 && xBloqueio < 30) {
			if (yBloqueio == 0) {
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:100,cliente5:cliente4_cliente5}
				map.cliente8 = {cliente4:100,cliente12:cliente8_cliente12,cliente9:cliente8_cliente9}
			}else if (yBloqueio == 20) {
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:100,cliente6:cliente5_cliente6}
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:100,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10}
			}else if (yBloqueio == 50){
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:100,cliente7:cliente6_cliente7}
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:100,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11}
			}else{
				map.cliente7 = {cliente6:cliente7_cliente6,cliente3:cliente7_cliente3,cliente11:100}
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:100,cliente15:cliente11_cliente15}
			}
		}if (xBloqueio > 30 && xBloqueio < 45) {
			if (yBloqueio == 0) {
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:100,cliente9:cliente8_cliente9}
				map.cliente12 = {cliente8:100,cliente16:cliente12_cliente16,cliente13:cliente12_cliente13}
			}else if (yBloqueio == 20) {
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:100,cliente10:cliente9_cliente10}
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:100,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14}
			}else if (yBloqueio == 50){
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:100,cliente11:cliente10_cliente11}
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:100,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18}
			}else{
				map.cliente11 = {cliente10:cliente11_cliente10,cliente7:cliente11_cliente7,cliente15:100}
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:100,cliente19:cliente15_cliente19}
			}
		}if (xBloqueio > 45 && xBloqueio < 50) {
			if (yBloqueio == 0) {
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:100,cliente13:cliente12_cliente13}
				map.cliente16 = {cliente12:100,cliente17:cliente16_cliente17}
			}else if (yBloqueio == 20) {
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:100,cliente14:cliente13_cliente14}
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:100,cliente18:cliente17_cliente18}
			}else if (yBloqueio == 50){
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:100}
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:100,cliente19:cliente18_cliente19}
			}else{
				map.cliente15 = {cliente14:cliente15_cliente14,cliente11:cliente15_cliente11,cliente19:100}
				map.cliente19 = {cliente18:cliente19_cliente18,cliente15:100}
			}
		}
	}else{
		//vamos mexer no y
		if (yBloqueio > 0 && yBloqueio < 20) {
			if (xBloqueio == 0) {
				map.cliente0 = {cliente4:cliente0_cliente4,cliente1:100}
				map.cliente1 = {cliente0:100,cliente5:cliente1_cliente5,cliente2:cliente1_cliente2}
			}else if (xBloqueio == 15) {
				map.cliente4 = {cliente0:cliente4_cliente0,cliente8:cliente4_cliente8,cliente5:100}
				map.cliente5 = {cliente4:100,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:cliente5_cliente6}
			}else if (xBloqueio == 30) {
				map.cliente8 = {cliente4:cliente8_cliente4,cliente12:cliente8_cliente12,cliente9:100}
				map.cliente9 = {cliente8:100,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:cliente9_cliente10}
			}else if (xBloqueio == 45) {
				map.cliente12 = {cliente8:cliente12_cliente8,cliente16:cliente12_cliente16,cliente13:100}
				map.cliente13 = {cliente12:100,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:cliente13_cliente14}
			}else {
				map.cliente16 = {cliente12:cliente16_cliente12,cliente17:100}
				map.cliente17 = {cliente16:100,cliente13:cliente17_cliente13,cliente18:cliente17_cliente18}
			}
		}if (yBloqueio > 20 && yBloqueio < 50) {
			if (xBloqueio == 0) {
				map.cliente1 = {cliente0:cliente1_cliente0,cliente5:cliente1_cliente5,cliente2:100}
				map.cliente2 = {cliente1:100,cliente6:cliente2_cliente6,cliente3:cliente2_cliente3}
			}else if (xBloqueio == 15) {
				map.cliente5 = {cliente4:cliente5_cliente4,cliente1:cliente5_cliente1,cliente9:cliente5_cliente9,cliente6:100}
				map.cliente6 = {cliente5:100,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:cliente6_cliente7}
			}else if (xBloqueio == 30) {
				map.cliente9 = {cliente8:cliente9_cliente8,cliente5:cliente9_cliente5,cliente13:cliente9_cliente13,cliente10:100}
				map.cliente10 = {cliente9:100,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:cliente10_cliente11}
			}else if (xBloqueio == 45) {
				map.cliente13 = {cliente12:cliente13_cliente12,cliente9:cliente13_cliente9,cliente17:cliente13_cliente17,cliente14:100}
				map.cliente14 = {cliente13:100,cliente10:cliente14_cliente10,cliente15:cliente14_cliente15,cliente18:cliente14_cliente18}
			}else {
				map.cliente17 = {cliente16:cliente17_cliente16,cliente13:cliente17_cliente13,cliente18:100}
				map.cliente18 = {cliente17:100,cliente14:cliente18_cliente14,cliente19:cliente18_cliente19}
			}
		}if (yBloqueio > 50 && yBloqueio < 80) {
			if (xBloqueio == 0) {
				map.cliente2 = {cliente1:cliente2_cliente1,cliente6:cliente2_cliente6,cliente3:100}
				map.cliente3 = {cliente2:100,cliente7:cliente3_cliente7}
			}else if (xBloqueio == 15) {
				map.cliente6 = {cliente5:cliente6_cliente5,cliente2:cliente6_cliente2,cliente10:cliente6_cliente10,cliente7:100}
				map.cliente7 = {cliente6:100,cliente3:cliente7_cliente3,cliente11:cliente7_cliente11}
			}else if (xBloqueio == 30) {
				map.cliente10 = {cliente9:cliente10_cliente9,cliente6:cliente10_cliente6,cliente14:cliente10_cliente14,cliente11:100}
				map.cliente11 = {cliente10:100,cliente7:cliente11_cliente7,cliente15:cliente11_cliente15}
			}else if (xBloqueio == 45) {
				map.cliente14 = {cliente13:cliente14_cliente13,cliente10:cliente14_cliente10,cliente15:100,cliente18:cliente14_cliente18}
				map.cliente15 = {cliente14:100,cliente11:cliente15_cliente11,cliente19:cliente15_cliente19}
			}else {
				map.cliente18 = {cliente17:cliente18_cliente17,cliente14:cliente18_cliente14,cliente19:100}
				map.cliente19 = {cliente18:100,cliente15:cliente19_cliente15}
			}
		}
	}


	graph = new Graph(map);
  	array = graph.findShortestPath('partida', 'chegada');

	for (var i = 0; i < 20; i++) {
		$('#cliente' + i).hide();
	}

	for (var i = 0; i < array.length; i++) {
		$('#'+array[i]).show();
	}
}
