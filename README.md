# Projeto de Comparação Tailwind CSS vs. Styled-Components

Este projeto React demonstra a criação de um card de perfil do GitHub utilizando duas abordagens de estilização diferentes: Tailwind CSS e Styled-Components.

## Pré-requisitos

- Node.js instalado em sua máquina ([https://nodejs.org/](https://nodejs.org/))
- npm ou yarn instalado (npm é instalado com o Node.js, yarn pode ser instalado separadamente: [https://yarnpkg.com/](https://yarnpkg.com/))
- Git instalado em sua máquina ([https://git-scm.com/downloads](https://git-scm.com/downloads))

## Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/Ian-Siveris/GithubPerfis
    cd GithubPerfis
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O projeto estará rodando em `http://localhost:5173` (ou outra porta especificada pelo Vite).

## Rotas

-   `/styled-components`: Exibe o card de perfil estilizado com Styled-Components.
-   `/tailwindcss`: Exibe o card de perfil estilizado com Tailwind CSS.

## Observações

-   Este projeto exibe um card de perfil fixo com os dados de [https://github.com/Ian-Siveris](https://github.com/Ian-Siveris).
-   As bibliotecas utilizadas para estilização são `styled-components` e `tailwindcss`. Para roteamento, utilizamos `react-router-dom`.

## Autor

Ian Siveris

## Link para o Repositório no GitHub

https://github.com/Ian-Siveris/GithubPerfis
