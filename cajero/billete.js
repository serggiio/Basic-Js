class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}
	prueba()
	{
		alert("metodo de la clase");
	}
}

function entregarDinero()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for(bi of caja)
	{
		if(dinero>0)
		{
			div = Math.floor(dinero/bi.valor);
			if (div > bi.cantidad) 
			{
				papeles = bi.cantidad
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete(bi.valor, papeles));
			dinero = dinero-(bi.valor * papeles);
		}
	}

	if(dinero>0)
	{
		
		resultado.innerHTML = "Soy un miserable cajero no me alcanza el dinero ";

	}
	else
	{
		for(var e of entregado)	
		{
			if (e.cantidad>0) 
			{
			resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ "+ e.valor + "<br/>";
			}
		}
	}
	
}



var caja = [];
var entregado = [];
caja.push(new Billete(50,30) );
caja.push(new Billete(20,20) );
caja.push(new Billete(10,20) );
var dinero = 0;
var div = 0;
var papeles = 0;
//innet html atribujo del objeto resultado que traemos de la etiqueta p de html
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);