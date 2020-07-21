//Miranda, Rodrigo
function mostrarAumento()
{

	var sueldoIngresado;
	var sueldoAumentado;
	var sueldoFinal;
	var porcentajeConsiderado;
		

	sueldoIngresado=txtIdSueldo.value;
	sueldoIngresado=parseInt(sueldoIngresado);
	porcentajeConsiderado=10/100;

	sueldoAumentado=sueldoIngresado*porcentajeConsiderado;
	sueldoFinal=sueldoAumentado+sueldoIngresado;


	txtIdResultado.value=sueldoFinal;

}

