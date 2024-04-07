# Instruções de utilização

## Instalação do Site

O Site utiliza para web ReactJS, mobile React Native e Backend NodeJS com Express & MongoDB.

A execução é feita pelo Docker, em cada diretório respectivamente existe uma Dockerfile que com ela criamos o nosso container para execução.

> API: src/backend/Dockerfile
> Mobile: src/frontend-mobile/Dockerfile
> Web: src/frontend-web/Dockerfile

Pelo terminal entre no respectivo diretório (Ex: src/frontent-web)

## Histórico de versões

### [0.1.0] - 03/03/2024
#### Adicionado
- Adicionado estrutura de pastas node, react e react native
- Adicionado API de login, logout, registro, login persistente com JWT
- Adicionado esqueleto de design inicial

### [0.5.0] - 07/04/2024
- Finalizado API
- Informação das rotas em [rotas](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/blob/main/src/backend/rotas.md)
