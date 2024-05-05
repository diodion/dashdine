import { UseMutateFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface GetDTO {
  dataInicial: string,
  dataFinal: string
}

interface UseRelatoriosReturn {
  getSales: (params: GetDTO) => Promise<Produto[]>,
  getEarns: (params: GetDTO) => Promise<number>
}

interface UseRelatorios {
  (): UseRelatoriosReturn
}

const useRelatorios: UseRelatorios = () => {
  const { api } = useApi();

  const getSales = async ({dataInicial, dataFinal}: GetDTO): Promise<Produto[]> => {
    const { data } = await api.get(`/relatorios/pedidos/vendas?dataInicial=${dataInicial}&dataFinal=${dataFinal}`)
    
    return data.itensMaisVendidos.map((i: any) => i.itemId);
  }

  const getEarns = async ({dataInicial, dataFinal}: GetDTO): Promise<number> => {
    const { data } = await api.get(`/relatorios/pedidos/ganhos?dataInicial=${dataInicial}&dataFinal=${dataFinal}`)

    return data.valorTotalVendas;
  }

  return {
    getSales,
    getEarns
  }
}

export default useRelatorios;