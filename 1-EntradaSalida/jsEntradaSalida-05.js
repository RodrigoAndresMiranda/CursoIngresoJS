/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	//definicion de variables

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;
	//cargar las variables

	alert("Usted se llama " +nombreIngresado+ " y tiene " +edadIngresada+ " años");

/*

Concatenado en dos ventanas emergentes:
alert("Usted se llama " +nombreIngresado);
alert(" y tiene " +edadIngresada+ " años");

*/

//alert("Usted se llama José y tiene 66 años");

}

