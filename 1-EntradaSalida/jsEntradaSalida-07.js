/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{		
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno=txtIdNumeroUno.value;
	numeroIngresadoUno=parseInt(numeroIngresadoUno);

	numeroIngresadoDos=txtIdNumeroDos.value;
	numeroIngresadoDos=parseInt(numeroIngresadoDos);


	// txtIdNumeroUno		txtIdNumeroDos		

	resultado=numeroIngresadoUno+numeroIngresadoDos;
	alert("La suma es: "+resultado);


}

function restar()
{
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno=txtIdNumeroUno.value;
	numeroIngresadoUno=parseInt(numeroIngresadoUno);

	numeroIngresadoDos=txtIdNumeroDos.value;
	numeroIngresadoDos=parseInt(numeroIngresadoDos);


	// txtIdNumeroUno		txtIdNumeroDos		

	resultado=numeroIngresadoUno-numeroIngresadoDos;
	alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno=txtIdNumeroUno.value;
	numeroIngresadoUno=parseInt(numeroIngresadoUno);

	numeroIngresadoDos=txtIdNumeroDos.value;
	numeroIngresadoDos=parseInt(numeroIngresadoDos);


	// txtIdNumeroUno		txtIdNumeroDos		

	resultado=numeroIngresadoUno*numeroIngresadoDos;
	alert("El producto es: "+resultado);
}

function dividir()
{
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno=txtIdNumeroUno.value;
	numeroIngresadoUno=parseInt(numeroIngresadoUno);

	numeroIngresadoDos=txtIdNumeroDos.value;
	numeroIngresadoDos=parseInt(numeroIngresadoDos);


	// txtIdNumeroUno		txtIdNumeroDos		

	resultado=numeroIngresadoUno/numeroIngresadoDos;
	alert("La division es: "+resultado);

}

