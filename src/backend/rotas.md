# Rotas

Todos os gets que retornam dados possuem paginação (adicionar ?pag=numero na rota) e total dos itens na Collection com os critérios
## Rotas de proprietário
### Login
    /login/web (Post)
```json
{
    "entrada": "email"
    "senha": "123"
}
```
### Logout
    /logout/web (Get)
### Refresh Token
    /refresh/web (Get)
### Atualizar dados/senha
    /func/attdados/:id (Patch > id = id do funcionário. Rota acessível para todos os cargos do modulo web)
```json
{
    "nome": "email"
    "sobrenome": "exemplo"
    "cpf": "000.000.000-42"
    "email": "email@email.com
    "telefone": "123"
    "senha": "123"
}
```    
### Administração de funcionários
    /func/gerenciar/ (Post > Cadastra novos funcionários. Rota acessível para Gerente, Admin, Superuser)
```json
{
    "nome": "email"
    "sobrenome": "exemplo"
    "cpf": "000.000.000-42"
    "email": "email@email.com
    "telefone": "123"
    "empresa": "empresa"
    "supervisor": "supervisor"
    "cargos": {
        "Atendente": "123"
    }
    "senha": "123"
}
```  
    /func/gerenciar/:id (Patch > Atualiza dados, desativa funcionário. Rota acessível para Gerente, Admin, Superuser)
```json
{
    "nome": "email"
    "sobrenome": "exemplo"
    "cpf": "000.000.000-42"
    "email": "email@email.com
    "telefone": "123"
    "empresa": "empresa"
    "supervisor": "supervisor"
    "cargos": {
        "Atendente": "123"
        "Cordenador": "123",
        "Gerente": "123",
        "Admin": "123",
        "Superuser": "123"
    }
    "ativo": true
}
```  
    /func/gerenciar/:id (Delete > Deleta funcionário. Rota acessível para Gerente, Admin, Superuser)
### Administração de cardápio
    /cardapioadm/ (Post > Adiciona itens no cardáio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
```json
{
    "nome": "X-Salada",
    "descricao": "X-Salada Completo",
    "valor": "5,00",
    "ativo": true
}
```
    /cardapioadm/ (Get > Visualiza cardápio. Rota acessível para todos os cargos do modulo web)
    /cardapioadm/:id (Patch > id = id do item do cardápio. Atualiza o item do cardápio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
```json
{
    "nome": "X-Salada",
    "descricao": "X-Salada Completo",
    "valor": "5,00",
    "ativo": true
}
```
    /cardapioadm/:id (Delete > id = id do item do cardápio. Deleta  o item do cardápio. Rota acessível para Coordenador, Gerente, Admin, Superuser)
### Administração de clientes
    /clienteadm (Get > Pega todos clientes cadastrados) 
### Pedidos
    /pedido/conf/pega/ (Get > Visualiza pedidos com status "Aguardando confirmação". Rota acessível para todos os cargos do modulo web)
    /pedido/conf/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Confirmado".Rota acessível para todos os cargos do modulo web.)
    /pedido/enviado/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Em trânsito".Rota acessível para todos os cargos do modulo web.)
    /pedido/liberar/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Disponível para retirada".Rota acessível para todos os cargos do modulo web.)
    /pedido/entregue/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Entregue".Rota acessível para todos os cargos do modulo web e mobile.)
    /pedido/cancel/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Cancelado".Rota acessível para todos os cargos do modulo web e mobile.)

## Rotas de cliente
### Login
    /login/cliente (Post)
```json
{
    "entrada": "email"
    "senha": "123"
}
```
### Logout
    /logout/cliente (Get)
### Refresh Token
    /refresh/cliente (Get)
### Registrar
    /registro (Post)
```json
{
    "nome": "nome",
    "sobrenome": "sobrenome",
    "cpf": "000.111.000-00",
    "email": "email@dashdine.com",
    "telefone": "1199991234",
    "senha": "123"
}
```
### Atualizar dados/senha
    /minhaconta/dados/:id (Patch > id = id do usuário) (Cargo: Cliente)
```json
{
    "nome": "nome",
    "sobrenome": "sobrenome",
    "cpf": "000.111.000-00",
    "email": "email@dashdine.com",
    "telefone": "1199991234",
    "senha": "123"
}
```
### Endereços
    /minhaconta/dados/end/:id (Patch > Cria endereços sem limite) (Cargo: Cliente)
```json
{
    "nome": "Residencial",
    "logradouro": "Av. Marques da costa",
    "bairro": "Nome do bairro",
    "numero": "Número do endereço",
    "referencia": "Referência",
    "cidade": "Nome da cidade",
    "uf": "Sigla do estado",
    "cep": "CEP"
}
```
    /minhaconta/dados/end/:id/:eid (Patch > Atualiza endereço. id = id do usuário, eid = id do endereço) (Cargo: Cliente)
```json
{
    "nome": "Residencial",
    "logradouro": "Av. Marques da costa",
    "bairro": "Nome do bairro",
    "numero": "Número do endereço",
    "referencia": "Referência",
    "cidade": "Nome da cidade",
    "uf": "Sigla do estado",
    "cep": "CEP"
}
```
    /minhaconta/dados/end/:id/:eid (Delete > Deleta endereço. id = id do usuário, eid = id do endereço) (Cargo: Cliente)
### Visualizar cardápio
    /cardapio (Get > Visualiza somente itens com "ativo":true)
### Pedidos
    /pedido (Post > Efetua pedidos e por padrão deixa o statusConfirmacao e statusPagamento aguardando. itemId = Id do item no cardápio que será comprado. usuario = id do usuário efetivando a compra. Retorna tambem um id crescente unico com # para o criar um código identificador do pedido para cliente e proprietário localizarem) (Cargo: Cliente)
```json
{
    "itensPedido": [
    {
        "itemId": "660de9ef54a1e83188194e4e",
        "quantidade": 2
    },
    {
        "itemId": "66116ebd21605ca04283983b",
        "quantidade": 1
    }
    ],
    "endereco": {
        "logradouro": "Nome da Rua",
        "bairro": "Nome do Bairro",
        "numero": "123",
        "referencia": "Ponto de Referência",
        "cidade": "Nome da Cidade",
        "uf": "UF",
        "cep": "CEP"
    },
    "telefone": "22222222",
    "precoTotal": 50.00,
    "usuario": "6611c597e3dbd5d246454431"
}
```
    /pedido/paga/:id (Post > Efetua a simulação do pagamento do pedido. id = id do pedido. Muda o campo statusPagamento para "Confirmado") (Cargo: Cliente)
    /pedido/pega/:id (Get > Retorna o histórico de pedidos do usuário. id = id do usuário) (Cargo: Cliente)
    /pedido/entregue/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Entregue".Rota acessível para todos os cargos do modulo web e mobile.)
    /pedido/cancel/:id (Patch > id = id do pedido. Muda o campo statusConfirmacao para "Cancelado".Rota acessível para todos os cargos do modulo web e mobile.)
