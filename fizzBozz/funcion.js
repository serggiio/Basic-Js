
algoritmo(30,100);
console.log(algoritmo);
function algoritmo(x, y){
	for(var i = x; i <= y; i ++)
{
	if (i%5==0&&i%3==0) {
		document.write(i+ "BozzFizz , " + ("<br/>"));

	}

	else if(i%5==0)
	{
		document.write(i+ "Bozz , " + ("<br/>"));

	}
	else if(i%3==0)
	{
		document.write(i+ "Fizz , " + ("<br/>"));

	}
	else
	{
		document.write(i  + ("<br/>"));
	}
};
}
