# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

|  Tarefa  | Descrição  | Testador|
| ------------ | ------------ | ------------ |
|  T001 | Permitir que o usuário (Cliente) realize o cadastro e login  | Usuário |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/70419372/01535dc7-8bf0-4ee4-9a61-6b65bb503b32)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/70419372/97e672f9-4985-496c-99c1-6a764157aa4f)

|T-002| Permitir que o usuário (Cliente) adicione itens em seu carrinho |Item selecionado pelo cliente aparece no carrinho |RF-014|

|  Tarefa  | Descrição  | Testador|
| ------------ | ------------ | ------------ |
|  T003 | Permitir que o usuário (Cliente) visualize o cardápio  | Usuário |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/70419372/164b8b2d-fe3f-452d-b272-5e1c0c976788)

|  Tarefa  | Descrição  | Testador|
| ------------ | ------------ | ------------ |
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


## Avaliação

Os testes de funcionalidades do software, que incluíam Cadastro, Login e Visualização de cardápio, apresentaram resultados positivos em geral. Todas as funcionalidades funcionaram de acordo com o esperado, com destaque para a validação de dados no Cadastro, a integração com o sistema de autenticação no Login e a filtragem e busca por itens do cardápio na Visualização de cardápio.

No entanto, foram identificados alguns pontos de otimização. O tempo de resposta do sistema poderia ser melhorado, principalmente em dispositivos com menor capacidade de processamento. A implementação de técnicas de cache e otimização de código poderia reduzir o tempo de carregamento das páginas. Além disso, a interface do sistema poderia ser mais intuitiva e amigável para o usuário, e a implementação de recursos de acessibilidade tornaria o sistema mais inclusivo.

Embora existam pontos a serem aprimorados, os resultados dos testes indicam que o software está em um bom caminho e que as funcionalidades básicas estão funcionando corretamente. As otimizações sugeridas podem melhorar ainda mais a experiência do usuário e tornar o software mais eficiente e acessível.
