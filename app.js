var express=require('express'),http=require('http')
var app=express();
var server=http.createServer(app);
var espera='';

console.log("prueba");

app.use(express.static(__dirname+'/Home'));
app.use(express.static(__dirname+'/Perfil'));
app.use(express.static(__dirname+'/Public'));
app.use(express.static(__dirname+'/Registrate'));


app.get('/',function (req,res)
{
	res.sendfile(__dirname+'/Home/indexPortada.html','utf8');
});

app.get('/Home',function (req,res)
{
	res.sendfile(__dirname+'/Home/indexPortada.html','utf8');
});


app.get('/Perfil',function (req,res)
{
	res.sendfile(__dirname+'/Perfil/indexPerfil.html','utf8');
});

app.get('/Public',function (req,res)
{
	res.sendfile(__dirname+'/Public/indexPublic.html','utf8');
});

app.get('/Registro',function (req,res)
{
	res.sendfile(__dirname+'/Registrate/indexRegistro.html','utf8');
});

//socket
/*
var io=require('socket.io').listen(server);

var registro = io
  .of('/Registrate')
  .on('connection', function (socket) {
  	socket.on('envio',function(valor)
  	{
  		espera=valor;

  	});

	});

var public = io
  .of('/Public')
  .on('connection', function (socket){

  	socket.emit('argumento',espera);
   


	});


*/









var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Listening on " + port);
});

