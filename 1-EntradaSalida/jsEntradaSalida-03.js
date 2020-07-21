/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

//var=nombreIngresado; ERROR TIPICO (=) 
//Olvidarse el punto y coma ERROR TIPICO (=)

	nombreIngresado=txtIdNombre.value;
	//Guardar variable cargada mediante HTML
	
//Olvidarse el .value ERROR TIPICO (=)

	alert("Su nombre es: " +nombreIngresado);

}


