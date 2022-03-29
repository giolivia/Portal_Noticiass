module.exports=function(app){
//rota para a pg inicial, mas retorna uma função passando como parametro app

	app.get('/', function(req,res){
		res.render('home/index.ejs');//tela q quero renderizar
	});
}
//req: requisição que o usuario enviou. EX:A URL/
//res: 