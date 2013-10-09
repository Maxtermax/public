$(document).on('ready',function()
{
var global=3;
$(".Estilo-Dibujos").hide()
$(".prueba").hide()

$("li").click(function()
{
	$("li").css({'color':'#000',})
	$(this).css({'color':'olive',});
});




$(".anime,.Vjuegos,.realista,.art-conceptual").click(function()
{
	

	$(".anime,.Vjuegos,.realista,.art-conceptual").css({'border-bottom':'0px solid black',})
	$(this).css({'border-bottom':'3px solid olive',});

});

$(".estilo-dibujo").click(function()
{	


	for(var i =0; i<global;i++)
	{

	$(".Estilo-Dibujos").append("<img src=http://th00.deviantart.net/fs11/PRE/i/2006/176/c/a/One_Piece_Fanart___Colored_by_arnistotle.jpg>");
	
	}

	$("article").fadeOut('slow');
	$("article").hide();
	$(".Estilo-Dibujos").fadeIn();
	$(".prueba").show()




});

$(".inicio").click(function()
{	
	$("article").fadeIn();
	$(".Estilo-Dibujos").fadeOut('slow');
	$(".Estilo-Dibujos").hide();
	$(".prueba").hide()
	
});





//aside ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



//sockets


});//termina documeto jquery 


