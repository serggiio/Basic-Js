//crear una clase en comun para todos
//para agregar un atributo a una clase es en el constructor
//parametros en el constructor
//dentro de una clase no hay necesitad de poner la palabra funtion para hacer una funcion
//arrays asociativos donde en vers de tener 0,1,2 etc como [1] posiciones estas tienen nombres
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
//imagenes["Cauchin1"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*var Cauchin = new Pakiman("Cauchin",80,20);
var Pokacho = new Pakiman("Pokacho",80,0);
var Tocinauro = new Pakiman("Tocinauro",480,120);*/

//llamar al objeto imagen de la clase pakiman Pokacho.imagen.src
//appendchild crear un hijo para mostrar en el body la imagen, que no se puede por document,write
var coleccion= [];
coleccion.push(new Pakiman("Cauchin",80,20));
coleccion.push(new Pakiman("Cauchin",80,20));
coleccion.push(new Pakiman("Pokacho",80,0));
coleccion.push(new Pakiman("Tocinauro",480,120));

//para cada p por cada elemento de la coleccion va a traer el indice del array
//for (var p in coleccion)
//in trae el indice de la coleccion por cada elemento
//of trae el objeto para iterar muestra directamente la instancia
//of no sirve para arrays asociativos como imagenes porque no hay un indice
for (var p of coleccion)
{
	p.mostrar();

}