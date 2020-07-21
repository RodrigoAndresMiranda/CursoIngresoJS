/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaTotal;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	sumaTotal=precioUno+precioDos+precioTres;

	alert(+sumaTotal);

//txtIdPrecioUno	txtIdPrecioDos	txtIdPrecioTres


}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaTotal;
	var cantidadDePrecios;
	var promedioFinal;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	cantidadDePrecios=3;

	sumaTotal=precioUno+precioDos+precioTres;

	promedio=sumaTotal/cantidadDePrecios;

	alert(+promedio);	
}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaSinImpuestos;
	var impuestoIva;
	var aumentoImpuesto;
	var valorfinal

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	impuestoIva=21/100;
	sumaSinImpuestos=precioUno+precioDos+precioTres;
	aumentoImpuesto=sumaSinImpuestos*impuestoIva;
	valorfinal=sumaSinImpuestos+aumentoImpuesto;
	
	alert(+valorfinal);	
}