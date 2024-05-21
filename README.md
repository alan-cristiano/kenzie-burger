# Burger Kenzie

## Acesso ao projeto

## Descrição

-   Aplicação front-end desenvolvida em React como Single Page Application para gerenciar pedidos de uma lanchonete fictícia;
-   Desenvolvimento conforme padrão TDD (test driven development) implementando testes de componente e end-to-end;
-   Projeto estruturado visando a escalabilidade e melhor manutenção do código. Para isso foi utilizada gerenciamento de estado global com Redux e arquitetura Component Based.
-   Comunicação com API Rest para leitura de dados;
-   Modal para carrinho de compras com persistência de dados em local storage;
-   Filtro para busca de produtos;
-   Aplicação responsiva para utilização em mobile e desktop;
-   Toasts para alertas principais.

## Tecnologias utilizadas

-   [React](https://react.dev/): Criação da interface de usuário;
-   [Sass](https://sass-lang.com/): Pré processador CSS;
-   [Axios](https://axios-http.com/): HTTP Client para comunicação com a API que disponibiliza a relação de produtos disponíveis para a lanchonete;
-   [Redux](https://redux.js.org/): Gerenciamento de estado global;
-   [Cypress](https://www.cypress.io/): Ferramenta de testes automáticos para desenvolvimento dos testes end-to-end;
-   JavaScript: Linguagem de programação utilizada.

## Funcionalidades da aplicação

1.  Adição de produtos ao carrinho de compras por meio do botão "adicionar" presente no card de produto;
2.  O carrinho de compras pode ser acessado pelo ícone presente no header da aplicação. Há a possibilidade de remover os produtos de forma individual ou total por meio dos botões presentes no carrinho de compras;
3.  É possível buscar por um produto específico por meio do filtro de busca presente também no header da aplicação;
4.  Os dados dos produtos presentes no carrinho de compras são persistidos em local storage para que, em caso de atualização ou um novo acesso à pagina, os dados sejam mantidos.

## Pré-requisitos

Será necessário possuir as seguintes ferramentas instaladas:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)

## Clonando o projeto

```bash
git clone <github template url> <project_name>
```

## Instalando dependências

Instalando dependências de desenvolvimento e produção:

```bash
cd <project_name>
npm install
```

## Inicializando os testes automáticos end-to-end

```bash
npm run test
```

## Inicializando o servidor

O projeto roda, por padrão, na porta 5173.

```bash
npm run dev
```

Navegue até http://localhost:5173 para acessar a aplicação.
