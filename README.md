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

- POST /signup
    - Rota para cadastrar um usuário (Senha de no mínimo 10 caracteres)
    - headers: {}
    - body: {
        "email": $"email@email.com",
        "password": $"senha"
    }
- POST /signin
    - Rota para o usuário logar e receber um token através do corpo da resposta
    - headers: {}
    - body: {
        "email": $"email@email.com",
        "password": $"senha"
    }
    - Gera um token que será utilizado nas rotar privadas
    
# Rotas de credenciais:

- POST /credentials (rota privada)
    - Rota para o usuário registrar uma credencial
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "userId":$id usuário //automaticamente gerado pelo token
        "title": $"Título",
        "url": $"http://www.url.com",
        "userName": $"Nome do usuário daquela url",
        "password": $"senha"
    }
- GET /credentials (rota privada)
    - Rota para o usuário buscar todas as suas credenciais criadas
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /credentials/:id (rota privada)
    - Rota para o usuário buscar uma credencial específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /credentials/:id (rota privada)
    - Rota para o usuário deletar uma credencial específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de notas seguras:

- POST /safenotes (rota privada)
    - Rota para o usuário registrar uma nota segura ("title" máx 50 char. e "note" máx 1000 char.)
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": $"Titulo",
        "note": $"Anotação"
    }
- GET /safenotes (rota privada)
    - Rota para o usuário buscar todas as suas notas seguras criadas
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /safenotes:id (rota privada)
    - Rota para o usuário buscar uma nota segura específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /safenotes/:id (rota privada)
    - Rota para o usuário deletar uma nota segura específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de cartões:

- POST /cards (rota privada)
    - Rota para o usuário registrar um cartão ("type": "CREDIT", "DEBIT" ou "BOTH")
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": $"Titulo desse cartão",
        "number": $"5229844569454841",
        "name": $"NOME DECRITO NO CARTÃO",
        "CVV": $"123",
        "password": $"6258",
        "ExpirationDate": $"10/26",
        "isVirtual": $false,
        "type": $"BOTH"
    }
- GET /cards (rota privada)
    - Rota para o usuário resgatar todas os seus cartões criados
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /cards/:id (rota privada)
    - Rota para o usuário resgatar um cartão específico informado pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /cards/:id (rota privada)
    - Rota para o usuário deletar um cartão específico informado pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de wi-fi:

- POST /wifi (rota privada)
    - Rota para o usuário registrar uma wi-fi
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title":$"Título",
        "networkName":$"nome da conexão/wifi",
        "password": $"senha"
    }
- GET /wifi (rota privada)
    - Rota para o usuário resgatar todas as suas wi-fis criadas
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /wifi/:id (rota privada)
    - Rota para o usuário resgatar uma wi-fi específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /wifi/:id (rota privada)
    - Rota para o usuário deletar uma wi-fi específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
