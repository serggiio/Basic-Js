var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

//dibujarLinea("blue", 100, 100, 200, 200, papel);
//funcion de evento no necesita parametro pero es opcional, si damos console.log a la variable evento de la funcion nos muestra la informacion de ese evento
function dibujarTeclado(evento)
{
	var colorcito = "blue";
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorcito, x , y, x, y-movimiento, papel);
			y= y-movimiento;
		break;
		case teclas.DOWN:
			dibujarLinea(colorcito, x , y, x, y+movimiento, papel);
			y= y+movimiento;
		break;
		case teclas.LEFT:
			dibujarLinea(colorcito, x , y, x-movimiento, y, papel);
			x= x-movimiento;
		break;
		case teclas.RIGHT:
			dibujarLinea(colorcito, x , y, x+movimiento, y, papel);
			x= x+movimiento;
		break;
	}
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
	lienzo.beginPath();
	lienzo.lineWidth= 3;
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	//dibujar la linea con nuestro estilo
	lienzo.stroke();
	//terminar el trazo
	lienzo.closePath();
}