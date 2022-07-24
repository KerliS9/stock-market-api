## Bem Vindo a este repositório

Abaixo contêm os desafios encontrados para realização do projeto, os motivos de certas escolhas, como você pode clonar o projeto, bem como as tecnologias que foram usadas.


## Contexto geral

Este projeto tem por objetivo simular as operações que são possíveis de serem realizadas por um cliente cadastrado numa corretora.

<div style="display: inline_block">
  <img alt="planningProject" height="250" width="400" src="./planning.png"/>
</div>

## Principais desafios encontrados
 - Montar as tabelas(1:N ou N:N), de forma que ficassem enxutas e tivessem um bom relacionamento;
 - Preparar o ambiente para os testes, pois era a primeira vez que fiz a instalação inicial em uma aplicação com testes;
 - Simular as funções com o framework Sinon, devido a dificuldade de interpretar os erros de tipagem que ocorriam nos testes;
 - Decisão de parar de usar os frameworks Sinon/Mocha/Chai e passar a usar o framework Jest.

## Porque das escolhas tomadas
 - Optei por criar as 'queries' sem usar ORM(Object-Relational Mapping) para treinar a lógica de como os relacionamentos acontecem dentro do mysql;
 - Escolhi typescript pois tem o benefício da tipagem dos retornos e assim acelera a identificação dos erros;
 - Escolhi usar autenticação por JsonWebToken, pois já conhecia as tipagens necessárias para os parâmetros e retornos;
 - Optei por iniciar os testes com Mocha/Chai/Sinon pois era o framework que da a opção de testar as chaves de um objeto em uma linha de código;
 - Alterei a realização dos testes para usar o framework Jest, pois tive muita dificuldade para entender os erros retornados com o Sinon;

<details>
<summary><strong>👨‍💻 Para executar o projeto</strong></summary><br />

  1. Clone o repositório, com o comando abaixo, no terminal:

  - `git clone git@github.com:KerliS9/stock-market-api.git`

  2. Entre na pasta do repositório que você acabou de clonar:

  - `cd stock-market-api`

  3. Instale as dependências

  - `npm install`

  4. Com docker instalado

  - `docker-compose up -d`

  5. Copie o arquivo o script 'StockMarketDB.sql' da pasta stock-market-api e cole na sua ferramenta visual de preferência, exemplo Mysql Workbench

  6. Execute o script no Workbench 

  5. Volte ao seu terminal e digite

  - `npm run dev`

  6. Acesse a sua ferramenta de API REST preferida, como insomnia e simule o uso das rotas conforme o arquivo .src/routes/
  Atenção: todas as rotas que solicitem informação específica de um cliente possuem validação por token.

  <details>
    <summary> Rodando sem uso do Docker</summary><br />
    > Passos 1 á 3, segue da mesma forma
    Em substituição ao passo 4, será obrigatória a instalação dos pacotes Node v16 e MySql

  </details>
</details>

## Linguagens e ferramentas usadas

Para construção do projeto:
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

Para os testes unitários:
 - ts-jest
 - jest-express

Para documentação
 - swaggerUi
