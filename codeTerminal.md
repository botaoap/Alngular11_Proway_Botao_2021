Terminal:
- ng new <Component-name>: Cria um projeto
- ng g c <Component-name>: Cria um componente
- ng serve --open: inicia um servidor local para rodar a aplicação
- ng add @ng-bootstrap/ng-bootstrap: Adiciona Bootstrap
- ng add @ng-bootstrap/ng-bootstrap --project myProject: Add no Projeto especifico
-------------------------
Instalar Postman in Linux mint
- sudo rm /etc/apt/preferences.d/nosnap.pref
- sudo apt update
- sudo apt install snapd
- sudo snap install postman
- para executar só escrever "postman" no terminal

Levantar um servidor com Json
Link: https://medium.com/@andrewchanm/criando-uma-api-rest-fake-com-json-server-9a312127f6d6
- npm install -g json-serve
- irá gerar um gb.json no projeto
- executar no prpjeto: json-server db.json