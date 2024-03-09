# Projeto Controle da Missão NASA

É importante frisar que recomendamos que você acompanhe a codificação junto conosco e use este guia somente se ficar preso ou se não quiser codificar junto.

## Introdução

1. Certifique-se de ter o Node.js instalado.
2. Crie um banco de dados gratuito no Mongo Atlas: [Mongo Atlas](https://www.mongodb.com/atlas/database) online ou inicie um banco de dados MongoDB local.
3. Crie um arquivo `.env` na pasta server com uma propriedade `MONGO_URL` definida para sua string de conexão do MongoDB.
4. No terminal, execute: npm install

## Executando o Projeto

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Certifique-se de ter a versão mais recente do Docker instalada
2. Execute `docker build -t nasa-project` .
3. Execute `docker run -it -p 8000:8000 nasa-project`

## Executando os Testes

Para executar qualquer teste automatizado, execute `npm test`. Isso irá:

Executar todos os testes do lado do cliente: `npm test --prefix client`
Executar todos os testes do lado do servidor: `npm test --prefix server`


 @passocurto
