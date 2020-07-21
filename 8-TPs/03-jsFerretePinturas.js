/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFahren;
	var gradosCelcius;
	var coeficienteResta;
	var coeficienteMultiplicador;
	var conversionParcial;

//txtIdTemperatura

	gradosFahren=txtIdTemperatura.value;
	gradosFahren=parseInt(gradosFahren);

	coeficienteResta=32;
	coeficienteMultiplicador=5/9;

	conversionParcial=gradosFahren-coeficienteResta;

	gradosCelcius=conversionParcial*coeficienteMultiplicador;

alert(+gradosFahren+" Fahrenheit son "+gradosCelcius+" centígrados");

}

function CentigradosFahrenheit () 
{
	
	var gradosFahren;
	var gradosCelcius;
	var coeficienteSuma;
	var coeficienteMultiplicador;
	var conversionParcial;

	gradosCelcius=txtIdTemperatura.value;
	gradosCelcius=parseInt(gradosCelcius);

	coeficienteSuma=32;
	coeficienteMultiplicador=9/5;

	conversionParcial=gradosCelcius*coeficienteMultiplicador;

	gradosFahren=conversionParcial+32;

	alert(+gradosCelcius+" centígrados son "+gradosFahren+" Fahrenheit ");
}
