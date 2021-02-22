import express from "express";

const app = express();

//usando o express nós temos vários métodos, nesse caso, estamos usando o
//listen pra saber se o servidor (nesse caso 3333) está rodando, estamos
//"escutando" ele

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

app.get("/", (request, response) => {
  // return response.send("Hello World - NLW 04") // uma forma de resposta
  return response.json("Hello World - NLW 04"); // com JSON
});

//parametros do POST
// - Rota (recusro API)
// - request,response

app.post("/", (request, response) => {
  //supondo que ja recemos os dados para salvar
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

// por enquanto isso é um servidor bem basico construido, caso eu queria buscar
//no insomnia um get/POST do localHost 3333, eu vou ter esses responses.
