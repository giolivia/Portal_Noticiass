module.exports=function(app){
//rota para a pg de formulario, mas retorna uma função passando como parametro app
	app.get('/formularioinclusaonoticia', (req,res)=>{
		res.render('admin/form_add_noticias.ejs');
	});
}