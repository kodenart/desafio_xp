# Desafio Técnico XP | Backend

## Descrição do projeto
API RESTful desenvolvida para o processo seletivo da XP.

## Objetivos do projeto
Construir uma API que simule um aplicativo de investimento em ações, com algumas
funcionalidades de conta digital.

## Rodando o projeto

### Pré-requisitos

É necessário ter as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://www.docker.com/).

  
  - Clone o repositório com `git clone git@github.com:kodenart/desafio_xp.git`
  
  - Entre no diretório criado `cd desafio_xp`
  
  - Execute o docker compose `docker-compose up -d`
  
  - Entre no container criado com a imagem node `docker exec -it desafio_xp bash`

  - Instale as dependências do projeto `npm install`

  - Execute o setup inicial para compilar o projeto e popular o banco de dados MySQL `npm run setup`

  - Inicie o servidor para começar a fazer as requisições `npm start`

  - Agora pode interagir com a API no endereço `localhost:5656`

## Funcionalidades

### Tentei manter os endpoints o mais próximo possível dos "Contratos dos Serviços"

* Documentação da API: https://documenter.getpostman.com/view/17551565/UzXKXetX



## Ferramentas utilizadas 

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://www.typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Docker](https://www.docker.com/)
