## Contexto geral

Este projeto tem por objetivo simular as operações que são possíveis de serem realizadas por um cliente cadastrado numa corretora.

# Principais desafios encontrados
 - Como montar as tabelas, de forma que ficassem enxutas e tivessem um bom relacionamento, 1:N, N:N;
 - Como realizar a validação, pela biblioteca do Joi ou dentro das regras de negócio (camada service);
 - Preparar o ambiente para os testes;
 - Dificuldade em simular as funções com o framework Sinon;
 - Decisão o framework Sinon/Mocha/Chai para o Jest;
 - Necessidade de rever e refatorar alguns códigos para viabilizar os testes;
 - Dificuldade em ler os erros de tipagem que ocorriam nos testes.

# Porque das escolhas tomadas
 - Optei por criar as queries sem usar ORM para treinar a lógica de como os relacionamentos acontecem dentro do mysql;
 - Escolhi typescript pois tem o benefício da tipagem dos retornos e acelerando a identificação dos erros;
 - Escolhi usar autenticação por jsonWebToken, pois já conhecia as tipagens necessárias para os parâmetros e retornos;
 - Optei por iniciar os testes com Mocha/Chai/Sinon pois era o framework que tive contato mais recente;
 - Alterei a realização dos testes para usar o framework Jest, pois tive muita dificuldade para entender os erros retornados;

# Para execução do projeto
  1. Clone o repositório

  - `git clone https://github.com/tryber/sd-018-a-project-trybesmith.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd stock-market-api`

  2. Instale as dependências

  - `npm install`

  3. Em seu terminal digite

  - `npm run dev`

# Linguagens e ferramentas usadas

1 - Para construção do projeto:
 - TypeScript;
 - Express;
 - Joi
 - JsonWebToken
 - EsLint
 - nodemon
 - mysql
 - dockerCompose
 - dotenv
 - http-status-codes

2 - Para os testes unitários:
 - ts-jest
 - jest-express
