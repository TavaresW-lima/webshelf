# webshelf
### NodeJs, Express e React
Um experimento que consiste em uma api feita em nodejs, express e typeorm a uma pequena aplicação em react.

### Como rodar:

#### Back-end:
Basta ter o docker instalado na sua máquiana, e na pasta ```./webshelf-backend``` e executar o comando: ```docker compose up```
A aplicação vai subir dois containers, um com o banco de dados e o outro com a aplicação node, escutando na porta 8080.

#### Front-end:
Após isso, na pasta ```./webshelf-frontend``` execute ```npm i``` e depois ```npm start```.
A aplicação React vai abrir na porta 3000.

## Disclaimer:
Apesar da aplicação estar rodando, o banco ainda precisa ser populado depois de usado pela primeira vez.
