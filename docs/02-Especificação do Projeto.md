# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

# Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

## Regina Almeida
<img style="margin-right: 5px;" align="left" width="200px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-statmed/assets/70419372/fcd1eacd-b96e-475c-86c4-2352e225deba">

**Profissão: Proprietária de Restaurante**

**Idade: 39 anos**

É dona de um restaurante de sucesso, porém vem sofrendo com a alta demanda pois necessita de um método mais ágil para realizar os atendimentos da sua clientela. Um software que ajudaria na gestão do seu negócio e dos seus pedidos seria essencial pois otimizaria seu tempo e de seus clientes. 
<br/>
<br/>

------------

## André Fernandes
<img style="margin-right: 5px;" align="left" width="200px" src="https://user-images.githubusercontent.com/98277143/226173982-ea43126c-4f02-42e7-bb60-07e432637880.png"> 

**Profissão: Recepcionista**

**Idade: 25 anos**

Recepcionista no hospital público e universitário. Possui sua rotina focada no seu trabalho e principalmente na sua faculdade no período noturno, vem sofrendo frequentemente com a dificuldade nos momentos de intervalo para suas refeições, devido sua rotina apertada, um restaurante que o atendesse com agilidade no pedido seria ideal para ganho de tempo. 
<br/>
<br/>

------------------------

## Shanana Nievs
<img style="margin-right: 5px;" align="left" width="200px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/70419372/42bfba62-6d5b-4086-9940-0bc44e2f345f">

**Profissão: Atendente de Restaurante**

**Idade: 46 anos**

Shanana Nieves é atendente no restaurante de Regina. Devido ao alto fluxo de clientes e ao método de trabalho arcaico acaba enfrentando problemas com as entregas dos pedidos. Sendo desejável um aplicativo onde os pedidos possam ser facilmente consultados de modo que o atendimento seja ágil e prático
<br/>
<br/>

------------

# Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Regina (Proprietária)| Ver os pedidos dos clientes  | Verificar tendências para modificar meu menu e promoções |
|Regina (Proprietária)| Ver os relatórios de pedidos | Fazer o meu controle de fechamento mensal |
|André (Cliente)| Um aplicativo para fazer pedido a distância | Diminuir o tempo que leva para realizar e retirar meu pedido|
|André (Cliente)| Um cardápio com informações detalhadas | Verificar minhas opções de compra |
|Shanana (Funcionária)| Ver os pedidos dos clientes  | Organizar a fila de saída para pedidos  |
|Shanana (Funcionária)| Verificar se o pedido foi pago ou não  | Agilizar o delivery ou retirada do pedido  |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

A análise da situação atual destaca a necessidade de soluções inovadoras e personalizadas para enfrentar os desafios enfrentados pelos restaurantes. Os modelos de negócio do DashDani apresentam uma oportunidade interessante para abordar esses problemas e proporcionar valor agregado aos clientes. No entanto, é crucial continuar monitorando o mercado e adaptando-se às mudanças e demandas dos clientes.

### Descrição Geral da Proposta

Há uma crescente demanda por soluções que reduzam custos e aumentem a eficiência operacional dos restaurantes. A personalização do software pode ser um diferencial competitivo importante. A concorrência no mercado de softwares para restaurantes é acirrada, e é essencial garantir que o produto oferecido atenda verdadeiramente às necessidades e expectativas dos clientes.
### Processo 1 – Fazer Pedido

Abaixo descreve o processo de realizar  o pedido que o cliente irá efetuar através do APP.

![Fluxo Cliente-Fazer Pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/6b299787-8dce-4162-917e-c6e0b748672a)


### Processo 2 – Visualizar Pedido

Abaixo descreve o processo de visualiazação do  pedido.

![Fluxo Cliente-Visualizar pedidos drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/fa4f2773-0cd0-4140-a39b-daf8ec9d27db)

### Processo 3 – Consultar pedido

Abaixo descreve o processo de consultar pedido realizado.

![Fluxo Cliente-Consultar pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/d30b3888-6bb8-48a9-b486-588fd32e1ba1)

### Processo 4 – Avaliar Pedido
Abaixo descreve o processo de avaliação  pedido, resaltando a satisfação do cliente.

![Fluxo Cliente-Avaliar Pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/7e104882-94c3-4377-b510-441c219e2b35)

### Processo 5 – Atualizar dados Cadastrais

Abaixo descreve o processo de atualização de  dados do cliente.

![Fluxo Cliente-Atualizar dados cadastrais drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/3d218762-7e44-42b6-ba95-be0f7ca92622)

### Processo 6 – Cancelar Pedido

Abaixo descreve o processo de cancelamento do pedido.

![Fluxo Cliente-Cancelar pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/127d3d33-7903-42e1-b47f-298acf69f791)

### Processo 7 – Repetir Pedido

Abaixo descreve o processo de repetir pedidos já realizados antes.

![Fluxo Cliente-Repetir pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/7db6ee8e-d13b-4cb6-abf8-7b45f5f4512e)

### Processo 8 – Cadastrar Produto

Abaixo descreve o processo de cadastro de produto.

![Fluxo da loja-Cadastrar produto drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/8201351b-3883-4b80-b38b-6fec599ee724)

### Processo 9 – Alterar Produto

Abaixo descreve o processo de alteração de produto.

![Fluxo da loja-Alterar produto drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/4a4bcc0c-d76a-48f9-9c77-1cb41f5f59d2)

### Processo 10 – Ecluir produto

Abaixo descreve o processo de exclução de produto.

![Fluxo da loja-Excluir produto drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/fd2280f5-9a12-4607-a8cd-3293e497ee0e)

### Processo 11 – Aprovar Pedido

Abaixo descreve o processo de aprovação do pedido.

![Fluxo da loja-Aprovar pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/076a189d-a07b-4936-9c64-ed329703d300)

### Processo 12 – Cancelar Pedido

Abaixo descreve o processo de cancelamento do pedido.

![Fluxo da loja-Cancelar pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/fe35e459-c48c-403a-aee7-de5a574f822b)

### Processo 13 – Notificação do Pedido

Abaixo descreve o processo de notificação do andamento do pedido.

![Fluxo da loja-Notificação do pedido drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114541642/8aef013d-09d8-4c98-83a6-be8572940911)


## Indicadores de Desempenho

|Indicador|Objetivos|Descrição|Cálculo|Fonte de Dados|Perspectiva| 
|---------|---------|---------|-------|--------------|-----------| 
|Taxa de reclamação de usuário|Avaliar a quantidade de reclamações de usuários| Percentual de reclamações em relação à quantidade de usuários| | Registro de avaliações de usuários| Usuários| 
|Total de defeitos detectados|Avaliar a viabilidade da disponibilização de uma versão final do sistema| Quantidade de falhas encontradas durante os testes de software em relação à quantidade de testes realizados| |Tabela de Testes de Software|Desenvolvedores| 
|Tempo médio entre falhas|Avaliar a frequência da manutenção do sistema|Cálculo do intervalo entre o registro de uma falha e outra nova||Registro de avaliações de usuários|Desenvolvedores| 
|Taxa de resolução de defeitos|Avaliar a dificuldade de manutenção do software|Calculo do total de defeitos resolvidos em relação ao total de defeitos notificados||Registro de avaliações de usuários|Desenvolvedores| 
|Tempo médio de reparo|Avaliar a dificuldade da manutenção de software pelo tempo médio entre cada manutenção|Cálculo da média de tempo entre a notificação de uma falha no sistema e a correção dessa falha||Registro de avaliações de usuário|Desenvolvedores| 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário (Proprietário) visualize o historico de pedidos | MÉDIA |
|RF-002| Permitir que o usuário (Proprietário) gere relatório de pedidos | MÉDIA |
|RF-003| Permitir que o usuário (Proprietário) faça controle dos pedidos | ALTA |
|RF-004| Permitir que o usuário (Proprietário) gerencie seu  cardápio | ALTA |
|RF-005| Permitir que o usuário (Proprietário) crie e gerencie categorias | MEDIA |
|RF-006| Permitir que o usuário (Proprietário) visualize os itens mais vendidos | BAIXA |
|RF-007| Permitir que o usuário (Proprietário) visualize se o pedido foi pago | ALTA |
|RF-008| Permitir que o usuário (Proprietário) crie relatório de ganhos brutos | MEDIA |
|RF-009| Permitir que o usuário (Proprietário) cadastre e gerencie funcionários | ALTA|
|RF-010| Permitir que o usuário (Cliente) realize um pedido | ALTA | 
|RF-011| Permitir que o usuário (Cliente) cancele um pedido | ALTA |
|RF-012| Permitir que o usuário (Cliente) visualize o historico de pedidos | BAIXA |
|RF-013| Permitir que o usuário (Cliente) visualize o cardápio | ALTA |
|RF-014| Permitir que o usuário (Cliente) adicione itens em seu carrinho | MÉDIA |
|RF-015| Permitir que o usuário (Cliente) realize o cadastro e login | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O módulo proprietário deverá ser responsivo em dispositivos móveis | BAIXA |
|RNF-002| O módulo proprietário deverá ser responsivo em dispositivos móveis | MÉDIA | 
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |

## Diagrama de Casos de Uso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/70419372/25faaf0d-b160-4c76-812b-ceef9d529096)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Captura de Tela (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114194617/47edd56b-cdf8-4af5-ad26-d8e613db8bcb)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Captura de tela 2024-03-08 170647](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114194617/a3f0a607-75ae-4580-a0ae-d6500a7d09c8)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Captura de tela 2024-03-08 170632](https://github.com/ICEI-PUC-Minas-PMV-ADS/dashdine/assets/114194617/466e7dd2-edc8-4f9e-8965-3b1390a6dfb4)


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
