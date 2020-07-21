/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

//test
	numeroUno=2;
	numeroDos=3;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);
	//ParseInt NO CAMBIA LA VARIABLE, le devuelve su valor original



	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

//para que el + funcion apartir de un txt, hay que transformar a numero


	alert(resultado);
}

