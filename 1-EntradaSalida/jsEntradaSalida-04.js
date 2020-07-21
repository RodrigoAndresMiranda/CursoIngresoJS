/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombreIngresado;
	//Definir variable
	
	nombreIngresado=prompt("Ingresa tu nombre", "Nombre y apellido");
	//Ingresar datos mediante ventana emergente

	txtIdNombre.value=nombreIngresado;
    //Valor ingresado en VE vinculado a variable

    
	//alert("ok");
}

