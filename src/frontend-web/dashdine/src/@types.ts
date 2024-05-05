interface Cardapio {

}

interface User {
  nome: string,
  sobrenome: string,
  cpf: string,
  email: string,
  telefone: string,
}

interface Funcionario extends User {
  empresa: string,
  supervisor: string,
  cargos: {
    Atendente: string
  },
}

interface Produto {
  _id: string,
  nome: string,
  descricao: string,
  categoria: { nome: string },
  valor: string,
  ativo: boolean
}

interface Categoria {
  _id: string,
  nome: string,
  descricao: string,
  ativo: boolean
}

interface ItemPedido {
  itemId: string;
  quantidade: number;
}

interface Endereco {
  logradouro: string;
  bairro: string;
  numero: string;
  referencia: string;
  cidade: string;
  uf: string;
  cep: string;
}

interface PedidoImpl {
  itensPedido: ItemPedido[];
  endereco: Endereco;
  telefone: string;
  precoTotal: number;
  usuario: string;
}

interface Pedido {
  codigo: string,
  createdAt: string,
  endereco: {
    bairro: string,
    cep: string,
    cidade: string,
    logradouro: string,
    numero: string,
    referencia: string,
    uf: string,
  },
  itensPedido: {
    itemId: string,
    quantidade: number,
    detalhesItem: {
      nome: string,
      descricao: string,
      valor: string
    }
  }[]
  precoTotal: number,
  statusConfirmacao: string,
  statusPagamento: string,
  telefone: string,
  updatedAt: string,
  _id: string
}