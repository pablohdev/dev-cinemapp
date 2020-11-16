<p align="center">
  <a href="https://reactnative.dev/">
    <img alt="React Native" src="https://img.shields.io/badge/React%20Native-7519C1">
  </a>
  
  <a href="https://yarnpkg.com/">
    <img alt="Yarn" src="https://img.shields.io/badge/yarn-1.19.0-blue.svg">
  </a>
  
  
  <a href="https://github.com/Naereen/StrapDown.js/blob/master/LICENSE">
    <img alt="Licence" src="https://img.shields.io/github/license/Naereen/StrapDown.js.svg">
  </a>
  
</p>

## :pushpin: Índice

- Sobre
- Tecnologias Utilizadas
- Web Screenshots
- Como rodar o projeto

## :bookmark: Sobre

Nosso passatempo favorito nessa quarentena tem sido assistir filmes e seriados, por isso pensamos em desenvolver uma solução que nos ajude na hora de selecionar o que mais gostamos. Nesta aplicação será possível buscar por filmes e series utilizando a API (http://www.omdbapi.com/). Com todos esses filmes a nossa disposição podemos separar nossos favoritos, para que possamos encontrá-los facilmente depois.

## :rocket: Tecnologias Utilizadas

Essas são as tecnologias que foram utilizadas.

### Ambiente de desenvolvimento

  - [VSCode](https://code.visualstudio.com/)
  - [Yarn](https://classic.yarnpkg.com/)
  - [React](https://reactjs.org/)
  - [React Native](https://reactnative.dev/)
  - [React Navigation](https://reactnavigation.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Context API](https://pt-br.reactjs.org/docs/context.html)
  - [Styled Components](https://styled-components.com/)
  - [Axios](https://github.com/axios/axios)
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
  - [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)
### Um pouco sobre o desenvolvimento da aplicação

Por ser uma aplicação pequena, optei em utilizar o Context API para gerenciar todo 
o estado da listagem de favoritos da aplicação, criando meu próprio hooks para gerenciar 
de forma única e centralizada todo o estado referente aos favoritos. Para a chamada a 
api estou utilizando o axios, e para a navegação entre telas utilizei o famoso react navigation 'rsrs', utilizando as Bottom Tab Navigation. E por último não menos importante  para não perdermos os nosso favoritos, mantive eles salvo no Storage do dispositivo
assim ficando salvo para que quando finalizar a aplicação e voltarmos nosso favoritos
esteja ali salvos para não perdemos nenhum titulo importante =D  

## ::iphone: Screenshots

<div width="" style="display: flex; align-items: 'center'; justify-content: space-evenly">
  <img src="https://github.com/pablohdev/dev-cinemapp/blob/main/.github/images/screen.gif" width="400px">
</div>


## :construction_worker: Como rodar o projeto

```bash
# Clone Repository
$ git clone https://github.com/pablohdev/dev-cinemapp
```

### :iphone: mobiExecutando o projeto

```bash
# Navegue até a pasta web
$ cd dev-cinemapp/web
# Instale as dependências
$ yarn

# Execute a aplicação no Android
$ yarn android

# Execute a aplicação no Ios
$ yarn ios
```
=======
# dev-cinemapp

### Olá amigx,

### Seja bem vindx ao nosso desafio!

Nosso passatempo favorito nessa quarentena tem sido assistir filmes e seriados, por isso pensamos em desenvolver uma solução que nos ajude na hora de selecionar o que mais gostamos. Caso você aceite o nosso desafio, precisamos que você implemente um sistema (fique a vontade pra escolher entre web ou mobile) onde será possível buscar por filmes e series utilizando a API (http://www.omdbapi.com/). Com todos esses filmes a nossa disposição queremos basicamente separar nossos favoritos, para que possamos encontrá-los facilmente depois. Portanto a sua solução deve:

- Permitir a busca por filmes que gostamos
- Listar os filmes encontrados
- Permitir que escolhamos nosso filmes favoritos
- Permitir que removamos um filme de nossos favoritos (às vezes um filme enjoa)
- Listar nossos filmes favoritos

Para auxiliar você nesse processo fizemos um protótipo rápido utilizando o Figma. Se quiser conferir é só seguir o link:

[https://www.figma.com/proto/UE8zfSxxf8K0TzpgslbYhz/CinemAPP?node-id=1%3A28&scaling=contain](https://www.figma.com/proto/UE8zfSxxf8K0TzpgslbYhz/CinemAPP?node-id=1%3A28&scaling=contain)


Para facilitar um pouco mais as coisas, já deixamos separada uma chave de acesso para a API (ou você pode criar a sua também):

```
Chave de API: 925eba28
Exemplo requisição: GET http://www.omdbapi.com/?apikey=925eba28&s=batman
```

Você pode desenvolver uma solução web ou mobile (react-native), se escolher a primeira opção é importante que consigamos utilizá-la também em nossos celulares.

## Entrega da sua solução

Deixe bem claro suas premissas, suposições e como executamos seu código. Para entregar essa solução, de um “fork” neste repositório e nos mande o link do novo repositório quando finalizar a tarefa.


No mais aguardamos seu retorno. Boa sorte :)
>>>>>>> 984eca0cc02f4475731ef866202cf1203fd3674a
