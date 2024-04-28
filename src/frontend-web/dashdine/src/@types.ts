interface Cardapio {

}

interface User {
  nome: string,
  sobrenome: string,
  cpf: string,
  email: string,
  telefone: string,
  senha: string,
}

interface Funcionario extends User {
  empresa: string,
  supervisor: string,
  cargos: {
    Atendente: string
  },
}

interface Produto {
  nome: string,
  descricao: string,
  categoria: string,
  valor: string,
  ativo: boolean
}

interface Categoria {
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
  id: string | number,
  status: string
}