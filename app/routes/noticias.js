const dbConnection = require('../../config/dbConnection');// ../passa para a pasta de tras,volta as pastas

module.exports=function(app){

	var connection=dbConnection();//executando a var dbConnection e armazenando na var connection

	app.get('/noticias', function(req,res){


		
		connection.query('select * from noticias', function (error,result){
			if (error){
				console.log(error);
			};
			//res.send(result): resposta do query para o cliente
			res.render('noticias/noticias.js',{noticias:result});
		});
	});
}