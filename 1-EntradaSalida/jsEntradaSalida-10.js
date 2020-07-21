//Miranda, Rodrigo

function mostrarAumento()
{
	var importeIngresado;
	var importeDescuento;
	var importeFinal;
	var porcentajeConsiderado;
	var	Porcentaje;

	importeIngresado=prompt("ingrese importe inicial: ");
	importeIngresado=parseInt(importeIngresado);

	porcentajeConsiderado=prompt("ingrese porcentaje a descontar: ");
	porcentajeConsiderado=parseInt(porcentajeConsiderado);
	Porcentaje=porcentajeConsiderado/100;

	importeDescuento=importeIngresado*Porcentaje;
	importeFinal=importeIngresado-importeDescuento;


	alert("El importe es $"+importeIngresado+" el descuento es $"+importeDescuento+" y el precio final es $"+importeFinal+", gracias por su compra");

}