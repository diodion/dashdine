# Rotas

## Rotas de proprietário
### Login
    /login/web (Post)
### Logout
    /logout/web (Get)
### Refresh Token
    /refresh/web (Get)
### Atualizar dados/senha
    /func/attdados/:id (Patch > id = id do funcionário. Rota acessível para todos os cargos do modulo web)
### Administração de funcionários
    /func/gerenciar/ (Post > Cadastra novos funcionários. Rota acessível para Gerente, Admin, Superuser)
    /func/gerenciar/:id (Patch > Atualiza dados, desativa funcionário. Rota acessível para Gerente, Admin, Superuser)
    /func/gerenciar/:id (Delete > Deleta funcionário. Rota acessível para Gerente, Admin, Superuser)
### Administração de cardápio
    /cardapioadm/ (Post > Adiciona itens no cardáio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
    /cardapioadm/ (Get > Visualiza cardápio. Rota acessível para todos os cargos do modulo web)
    /cardapioadm/:id (Patch > id = id do item do cardápio. Atualiza o item do cardápio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
    /cardapioadm/:id (Delete > id = id do item do cardápio. Deleta  o item do cardápio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
### Administração de clientes
    /clienteadm (Get > Pega todos clientes cadastrados com paginação e total) 
### Visualizar pedidos


## Rotas de cliente
### Login
    /login/cliente (Post)
### Logout
    /logout/cliente (Get)
### Refresh Token
    /refresh/cliente (Get)
### Registrar
    /registro/cliente (Post)
### Atualizar dados/senha
    /minhaconta/dados/:id (Patch > id = id do usuário) (Cargo: Cliente)
### Endereços
    /minhaconta/dados/end/:id (Patch > Cria/Atualiza endereços) (Cargo: Cliente)
    /minhaconta/dados/end/:id/:eid (Delete > Deleta endereço. id = id do usuário, eid = id do endereço) (Cargo: Cliente)
### Visualizar cardápio
    /cardapio (Get > Visualiza somente itens com "ativo":true)
### Cadastrar pedido
### Visualizar pedidos
