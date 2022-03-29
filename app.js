const app=require('./config/server');
const rotaHome=require('./app/routes/home')(app);//importação da rota passando o parametro app
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);



//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});