/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//Miranda, Rodrigo
function Rectangulo () 
{
	var anchoTerreno;
	var largoTerreno;
	var perImetro;
	var ladoAncho;
	var ladoLongitud;
	var numeroVueltasAlamb;
	var metrosDeAlambre;

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);
	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);
	numeroVueltasAlamb=3;	

	ladoAncho=anchoTerreno*2;
	ladoLongitud=largoTerreno*2;
	perImetro=ladoAncho+ladoLongitud;
	metrosDeAlambre=numeroVueltasAlamb*perImetro;

	alert("Se necesitan "+metrosDeAlambre+" m de alambre para el perimetro");
	

	//txtIdLargo	txtIdAncho	txtIdRadio
}
function Circulo () 
{
	var perImetro;
	var radioArea;
	var diameTro;
	var numeroVueltasAlamb;
	var metrosDeAlambre;

	radioArea=txtIdRadio.value;
	radioArea=parseInt(radioArea);
	numeroVueltasAlamb=3;	

	diameTro=radioArea*2
	perImetro=3.14*diameTro
	metrosDeAlambre=numeroVueltasAlamb*perImetro;

alert("Se necesitan "+metrosDeAlambre+" m de alambre para el perimetro");

}
function Materiales () 
{
	var bolsaCemento;
	var bolsaCal;
	var anchoTerreno;
	var largoTerreno;
	var areaTerreno;

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);
	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	areaTerreno=anchoTerreno*largoTerreno;

	bolsaCemento=areaTerreno*2;
	bolsaCal=areaTerreno*3;

	alert("Se necesitan "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal para el contrapiso.");

}