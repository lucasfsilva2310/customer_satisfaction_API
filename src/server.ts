import { app } from "./app";
//todos os codigos e comentarios estao 'apagados' pq todo o app foi passado para o 'app.ts' , para os testes serem efetuados
// import "reflect-metadata; // importante sempre ser o primeiro a ser importado
// import express from "express";
// import "./database"; // não é necessario especificar o arquivo, por ser um index
// para iniciar a aplicação é só dar um yarn dev
// import { router } from "./routes";

// const app = express();

//usando o express nós temos vários métodos, nesse caso, estamos usando o
//listen pra saber se o servidor (nesse caso 3333) está rodando, estamos
//"escutando" ele

// app.use(express.json()); // estamos informando ao server que queremos o formato JSON
// app.use(router); // importando e usando as rotas

app.listen(3333, () => console.log("Server is running."));

// Para rodar um typeScript no terminal, nós precisamos "traduzir" esse código para
//Javascript
//dentro do tsconfig, nós podemos configurar a forma que queremos que o TS
//seja traduzido
// com o ts-node-dev, ele ja vai converter o código automaticamente
// também foi adicionado um "dev" dentro de "scripts " no package.json
//esse "dev" é o nosso ts-node-dev que foi isntalado, para converter sozinho

//Métodos de requisição:
/*
    GET => Busca
    POST => Salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica ( só uma determinada informação )
*/

//parametros do Get:
// - Rota
// - Request,Response

// // como estamos usando express, nao precisamos passar o tipo do request, response, pq eles ja estao atribuidos ao express
// app.get("/", (request, response) => {
//   // return response.send("Hello World - NLW 04") // uma forma de resposta
//   return response.json("Hello World - NLW 04"); // com JSON
// });

//parametros do POST
// - Rota (recusro API)
// - request,response

// app.post("/", (request, response) => {
//   //supondo que ja recemos os dados para salvar
//   return response.json({ message: "Os dados foram salvos com sucesso!" });
// });

// por enquanto isso é um servidor bem basico construido, caso eu queria buscar
//no insomnia um get/POST do localHost 3333, eu vou ter esses responses.

//Agora nós vamos instalar uma ferramenta para trabalhar com o banco de dados.
// Nesse projeto, a ferramenta escolhida foi o typeORM

//Instalação:
// yarn add typeorm --save
// reflect-metadata
// import "reflect-metadata"

//Nesse projeto, para o banco de dados, nós vamos usar o SQlite3

//O próximo passo é criar um ormconfig.json , pois é necessário passar as configurações pro typeORM

//Pŕoximo passo: criar a migration de usuário (olhar database/migration)
