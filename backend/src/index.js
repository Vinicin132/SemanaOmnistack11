const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


/**Métodos HTTP:
// GET: Buscar/listar uma informação do back-end
// POST: Criar uma informação/recurso no back-end
// Put: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end
*/ 

/** Tipos de parametros
 * Query Parms: Parametros nomeados enviados na rota apos o simbolo de "?"(Filtros, paginacao)
 * Route Parms: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos  
*/ 

/** Bancos de dados:
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
 * NoSQL: MongoDB, CouchDB.
 */ 

 /** Comunicação banco de dados
  * Baixar o driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()   
  * 
  * 
  */ 



app.listen(3333);       
                        // npm start (para executar o backend)

