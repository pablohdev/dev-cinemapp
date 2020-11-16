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
- Screenshot
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

## :iphone: Screenshot

<div width="" style="display: flex; align-items: 'center'; justify-content: space-evenly">
  <img src="https://github.com/pablohdev/dev-cinemapp/blob/master/.github/images/screen.gif" width="400px">
</div>


## :construction_worker: Como rodar o projeto

```bash
# Clone Repository
$ git clone https://github.com/pablohdev/dev-cinemapp
```

### :iphone: mobiExecutando o projeto

```bash
# Navegue até a pasta
$ cd dev-cinemapp

# Instale as dependências
$ yarn

# Execute a aplicação no Android
$ yarn android

# Execute a aplicação no Ios
$ yarn ios
```
