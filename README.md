# Desafio Desenvolvedor Back-end Pleno<br/>Onyma By Bencorp

O objetivo deste projeto é avaliar o desenvolvimento de uma aplicação com API Rest e persistência de dados.

> **IMPORTANTE:** Os projetos que estiverem fora da ideia principal da estrutura, não estiverem em Typescript ou não executarem no Docker serão desconsiderados.

Fique atento as instruções a seguir.

## Cadastro de funcionários

## Set up

Para iniciar o projeto é necessário realizar o clone do repositório a seguir:

```bash
    $ git clone https://github.com/Health-Inn/teste-backend-2.git
```

Este repositório contém um projeto base, com algumas dependências previamente adicionadas. Sinta-se a vontade para alterá-lo.
<br/><br/>Você deverá compartilhar no seu repositório do github as alterações solicitadas para o projeto. 
O endereço deste repositório deverá ser enviado para a gente após a conclusão do desenvolvimento.

## Especificação do projeto

Neste cenário proposto, a área de RH de empresas clientes utilizam de nossa interface para cadastrar funcionários que poderão ou não realizar exames ocupacionais.

A API deve permitir que o usuário envie em qual das empresas o novo funcionário será inserido, sendo que um funcionário não pode estar ativo em duas empresas ao mesmo tempo.

Você desenvolverá uma API que permita a gestão de cada empresa separadamente, permitindo que os dados sejam alterados ou excluídos. É preciso pensar que podem existir várias empresas e o cadastro de um usuário precisa estar isolado na empresa que foi informada na requisição.


## Requisitos do projeto

### Funcionais

1. Administrar funcionários: 

- O sistema deverá ter um cadastro de funcionários das empresas
- O sistema deverá ser capaz de criar, excluir e alterar (parcialmente ou completamente) os funcionários
- O funcionário deve ter um ID único no sistema para controle interno
- Cada funcionário deve ter nome, CPF, RG, data de nascimento, email, telefone, endereço, setor e cargo
- Todos os campos são obrigatórios, exceto email e telefone.
- É obrigatório ter um email **OU** um telefone.
- Um funcionário não pode estar **ativo** em duas empresas ao mesmo tempo (verificação feita por CPF).
- Não pode haver dois funcionários com o mesmo CPF (inclusive em empresas diferentes)
- ***Deve ser possível enviar uma planilha ou CSV para o cadastro de funcionários em lote [opcional]***.

2. Registro de empresas:

- Deve haver pelo menos duas empresas para serem usadas como base para o cadastro de funcionários.
- Estas empresas devem conter ID, nome da empresa e CNPJ
- Você pode criar um endpoint para o cadastro dessas empresas ou já deixá-la setada hardcoded no banco de dados (não é necessário um CRUD para elas no projeto).

### Não-funcionais
   
1. O sistema deverá armazenar as informações em um banco de dados
 
- Poderá ser utilizada uma base de dados no Docker ou em memória, como o `sqlite`<br/>
-- Caso opte por não utilizar a solução embbeded, não se esqueça de adicionar scripts de inicialização da base escolhida<br/>
- A comunicação entre o sistema e a base de dados deverá ser feita através de Sequelize ou TypeORM

2. O sistema deve conter testes unitários

- Utilize o Jest (já no projeto) para os testes unitários. Quanto maior o coverage, melhor a nota :).
- Se quiser criar testes de integração ou e2e com `supertest` ou afins, será um diferencial.

3. O sistema deve conter uma forma de validar o funcionamento
   
- Use o Swagger (configuração no projeto), postman ou, no mínimo, um .txt com a descrição das rotas.

## O que será avaliado no projeto

- Qualidade de código.
- Design patterns utilizados.
- A utilização correta do Typescript e bases do Javascript.
- A criação de testes unitários.
- Tolerância a exceções do código.

## O que você deve fazer

- Utilizar-se da linguagem e dos frameworks ao máximo para mostrar o seu conhecimento
- Entregar o projeto completo, com scripts e instruções de execução se for o caso
- Usar Typescript para melhor organização da orientação a objetos.
- Usar o máximo que você sabe de DDD, SOLID e Clean Architecture.
- Containerizar a aplicação e o banco de dados com Docker (usando docker-compose).

## O que você pode fazer

- Utilizar frameworks e bibliotecas que julgar úteis.
- Alterar e criar o código.
- Consultar tutoriais, fóruns, etc.
- Encontrar projetos semelhantes para usar como aprendizado.

## O que você não pode fazer

- Copiar o repositório de candidatos.
- Pedir alguém para fazer o projeto para você.