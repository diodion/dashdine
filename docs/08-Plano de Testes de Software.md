# Plano de Testes de Software

|Teste|Descrição|Resultado Esperado|Requisito referência|
|-----------|------------|----------------|-----------------------|
|T-001| Permitir que o usuário (Cliente) realize o cadastro e login |Mensagem de sucesso ao cadastrar e consegue acessar o sistema com o email e senha |RF-015|
|T-002| Permitir que o usuário (Cliente) adicione itens em seu carrinho |Item selecionado pelo cliente aparece no carrinho |RF-014|
|T-003| Permitir que o usuário (Cliente) visualize o cardápio |Cliente visualiza cardápio com itens ativos |RF-013|
|T-004| Permitir que o usuário (Cliente) visualize o historico de pedidos |Cliente visualiza historico de seus pedidos |RF-012|
|T-005| Permitir que o usuário (Cliente) cancele um pedido |Pedido cancelado |RF-011|
|T-006| Permitir que o usuário (Cliente) realize um pedido |Pedido realizado com os itens do carrinho |RF-010|
|T-007| Permitir que o usuário (Proprietário) cadastre e gerencie funcionários |Cadastra funcionários com cargos e os desativa caso necessário |RF-009|
|T-008| Permitir que o usuário (Proprietário) crie relatório de ganhos brutos |Retorna ganho total pela data selecionada|RF-008|
|T-009| Permitir que o usuário (Proprietário) visualize se o pedido foi pago |Visualiza confirmação de pagamento |RF-007|
|T-010| Permitir que o usuário (Proprietário) visualize os itens mais vendidos |Retorna o número de vendas por item do cardápio no período selecionado|RF-006|
|T-011| Permitir que o usuário (Proprietário) crie e gerencie categorias |Cria categorias para serem utilizadas no cardápio |RF-005|
|T-012| Permitir que o usuário (Proprietário) gerencie seu  cardápio |Cria itens no cardápio com nome, descrição, valor, categoria e se está ativo |RF-004|
|T-013| Permitir que o usuário (Proprietário) faça controle dos pedidos |Proprietário confirma pedido |RF-003|
|T-014| Permitir que o usuário (Proprietário) gere relatório de pedidos |Cria relatórios de vendas durante período selecionado e cancelamentos |RF-002|
|T-015| Permitir que o usuário (Proprietário) visualize o historico de pedidos |Retorna todos pedidos do período selecionado e por estado de confirmação e pagamento |RF-001|

## Ferramentas de Testes (Opcional)
|Ferramenta|Finalidade|
|-----------|------------|
|[Vscode](https://code.visualstudio.com/)|Necessário para utilização do Thunder Client|
|[Thunder Client](https://www.thunderclient.com/)|Teste de API|
|[Insomnia](https://insomnia.rest/download)| Teste de API|
|[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)|Teste de componentes do React|
