const mysql=require('mysql');//importação do modulo mysql, q ja baixei da internet

module.exports=function(){
return mysql.createConnection({//objeto jason(pq esta entre as {}) com 3 parametros(cada virgula); TEM Q ESTAR DENTRO DE UMA FUNÇÃO 
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});//cria conexão com o bd portal_noticias
}