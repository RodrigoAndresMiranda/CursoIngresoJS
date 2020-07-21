/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno=txtIdNumeroDividendo.value;
	numeroIngresadoUno=parseInt(numeroIngresadoUno);

	numeroIngresadoDos=txtIdNumeroDivisor.value;
	numeroIngresadoDos=parseInt(numeroIngresadoDos);

//txtIdNumeroDividendo  txtIdNumeroDivisor

	resultado=numeroIngresadoUno%numeroIngresadoDos;
	alert("El resto es "+resultado);
	

}
