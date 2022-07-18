<h1>This is DrivenPass!  /  Este é DrivenPass!</h1>

<h3>English</h3>
<b>This is a password and safenotes manager API </b></br>
You are able to register, sign in, save cards information, credentials in web sites, wifi credentials, notes on a secure way</br>


```Highlights: Layered Architecture, Prisma, JWT```

<b>Esta é uma API gerenciadora de senhas e notas seguras </b></br>
Você pode se registrar, fazer login, salvar informações de cartões, credenciais em sites, credenciais de wifi, notas  de maneira segura</br>


```Destaques: Arquitetura em camadas, Prisma, JWT```

<h3>Database and backend deploy link</h3>
https://projeto19-drivenpass-back.herokuapp.com

# Usage </br>
$ git clone https://github.com/snowslaura/projeto19-drivenpass

$ cd projeto19-drivenpass

$ npm install

$ npm run dev



# Rotas de autenticação:

- POST /signup</br>
    - Rota para cadastrar um usuário (Senha de no mínimo 10 caracteres)</br>
    - headers: {}</br>
    - body: {</br>
        "email": $"email@email.com",</br>
        "password": $"senha"</br>
    }
- POST /signin</br>
    - Rota para o usuário logar e receber um token através do corpo da resposta</br>
    - headers: {}</br>
    - body: {</br>
        "email": $"email@email.com",</br>
        "password": $"senha"</br>
    }</br>
    - Gera um token que será utilizado nas rotar privadas</br>
    
# Rotas de credenciais:

- POST /credentials (rota privada)</br>
    - Rota para o usuário registrar uma credencial</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {</br>
        "userId":$id usuário //automaticamente gerado pelo token</br>
        "title": $"Título",</br>
        "url": $"http://www.url.com",</br>
        "userName": $"Nome do usuário daquela url",</br>
        "password": $"senha"</br>
    }</br>
- GET /credentials (rota privada)</br>
    - Rota para o usuário buscar todas as suas credenciais criadas</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- GET /credentials/:id (rota privada)</br>
    - Rota para o usuário buscar uma credencial específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- DELETE /credentials/:id (rota privada)</br>
    - Rota para o usuário deletar uma credencial específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
    
# Rotas de notas seguras:

- POST /safenotes (rota privada)</br>
    - Rota para o usuário registrar uma nota segura ("title" máx 50 char. e "note" máx 1000 char.)</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {</br>
        "title": $"Titulo",</br>
        "note": $"Anotação"</br>
    }</br>
- GET /safenotes (rota privada)</br>
    - Rota para o usuário buscar todas as suas notas seguras criadas</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- GET /safenotes:id (rota privada)</br>
    - Rota para o usuário buscar uma nota segura específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- DELETE /safenotes/:id (rota privada)</br>
    - Rota para o usuário deletar uma nota segura específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
    
# Rotas de cartões:</br>

- POST /cards (rota privada)</br>
    - Rota para o usuário registrar um cartão ("type": "CREDIT", "DEBIT" ou "BOTH")</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {</br>
        "title": $"Titulo desse cartão",</br>
        "number": $"5229844569454841",</br>
        "name": $"NOME DECRITO NO CARTÃO",</br>
        "CVV": $"123",</br>
        "password": $"6258",</br>
        "ExpirationDate": $"10/26",</br>
        "isVirtual": $false,</br>
        "type": $"BOTH"</br>
    }
- GET /cards (rota privada)</br>
    - Rota para o usuário resgatar todas os seus cartões criados</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- GET /cards/:id (rota privada)</br>
    - Rota para o usuário resgatar um cartão específico informado pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- DELETE /cards/:id (rota privada)</br>
    - Rota para o usuário deletar um cartão específico informado pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
    
# Rotas de wi-fi:

- POST /wifi (rota privada)</br>
    - Rota para o usuário registrar uma wi-fi</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {</br>
        "title":$"Título",</br>
        "networkName":$"nome da conexão/wifi",</br>
        "password": $"senha"</br>
    }</br>
- GET /wifi (rota privada)</br>
    - Rota para o usuário resgatar todas as suas wi-fis criadas</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- GET /wifi/:id (rota privada)</br>
    - Rota para o usuário resgatar uma wi-fi específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
- DELETE /wifi/:id (rota privada)</br>
    - Rota para o usuário deletar uma wi-fi específica informada pelo params "id"</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
