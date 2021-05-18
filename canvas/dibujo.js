var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
//get context metodo de canvas para dimenciones
var ancho = d.width;

var lienzo = d.getContext("2d");
//console.log(lienzo);
//dibujarLinea("black", 10, 300, 220, 10);


/*dibujo1(30);*/
/*var lineas1 = 30;
var l1 = 0;
var xi2, yf2;

while(l1<lineas1)
{
	xi2 = 10 * l1;
	yf2 = 10 * (l1 + 1);
	dibujarLinea("grey",xi2,0,300,yf2);
	l1++;
}	*/

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	//dibujar la linea con nuestro estilo
	lienzo.stroke();
	//terminar el trazo
	lienzo.closePath();
}

/*function dibujo1(lineas)
{
	var lineas1 = lineas;
	var l1 = 0;
	var xi2, yf2;

	while(l1<lineas1)
	{
		xi2 = 10 * l1;
		yf2 = 10 * (l1 + 1);
		dibujarLinea("grey",xi2,0,300,yf2);
		l1++;
	}	

}*/

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, xf;

	var espacio = ancho / lineas;
	while(l < lineas)
	{
		yi = espacio*l;;
		xf = espacio*(l+1);
		dibujarLinea("grey", 0, yi, xf, 300);	
		//console.log("linea "+ l);
		l = l + 1;
	}

	dibujarLinea("grey", 0,0,0,300);
	dibujarLinea("grey", 0,0,300,0);
	dibujarLinea("grey", 0,300,300,300);
	dibujarLinea("grey", 300,0,300,300);

}
