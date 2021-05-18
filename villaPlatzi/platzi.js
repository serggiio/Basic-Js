
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var fondo = {
	url: "tile.png",
	cargaOK: false
};


//fondo.imagen se le agrega un atribujo imagen
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
/*
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);*/

//la funcion cargar fondo solo se dispara cuando es true, es invocada en load del fondo
function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function dibujar(/*evento*/)
{
	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen,0,0);
	}
	if(vaca.cargaOK){
		var cantidad = aleatorio(5,25);
		for(var v = 0 ; v<cantidad; v++){
			var x = aleatorio(0,6);
			var y = aleatorio(0,6);
			var x = x * 80;
			var y = y * 80;
			papel.drawImage(vaca.imagen,x,y);
		}
		
	}
}



function aleatorio( min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1))+min;
	return resultado;
}