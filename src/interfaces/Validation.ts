export interface IInvestimentInput {
  codCliente: number;
  codAtivo: number;
  qtdeAtivo: number;
}

export interface ITransactionInput {
  CodCliente: number;
  Valor: number;
}

export interface IClienteCreateInput {
  name: string;
  email: string;
  password: string;
  balance?: number;
}