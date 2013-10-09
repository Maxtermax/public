$(document).on('ready',function()
{


alert("ff");


$(".foto-perfil").draggable();


$(".configuracion,.estadisticas").click(function()
{
	$("body").append("<div class=confi > confirut </div>");
	$("header,article").css({'z-index':'-4','opacity':'0.5',},200);
	$(".confi").html("<b class=cerrar >X</b>");
	$(".confi").draggable();


$(".cerrar").click(function()
{

	$(".confi").css({'-webkit-transform':'scale(1.1)','opacity':'0',},500);

		$("header,article").css({'z-index':'1','opacity':'1',},500);
	setTimeout(function()
	{
		$(".confi").hide()

	},500);


});


});




});//termina jquey