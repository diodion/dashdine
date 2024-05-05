import { UseMutateFunction, useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";
import { AxiosResponse } from "axios";

interface ChangeStatus { id: string, status: string }
interface UsePedidoReturn {
  changeStatus: UseMutateFunction<any, Error, ChangeStatus, unknown>
}

interface UsePedido {
  (): UsePedidoReturn
}

const usePedido: UsePedido = () => {
  const { api } = useApi();
  const queryClient = useQueryClient();

  const changeStatus = async ({ id, status }: ChangeStatus): Promise<AxiosResponse['data']> => {
    const ep: { [key: string]: string } = {
      'Confirmado': `/pedido/conf/${id}`,
      'Em transito': `/pedido/enviado/${id}`,
      'Disponível para retirada': `/pedido/liberar/${id}`,
      'Liberado': `/pedido/liberar/${id}`,
      'Entregue': `/pedido/entregue/${id}`,
      'Cancelado': `/pedido/cancel/${id}`,
    }
    const { data } = await api.patch(ep[status]);

    return data.data;
  };

  const mutation = useMutation({
    mutationFn: changeStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pedidos'] }),
  });

  return {
    changeStatus: mutation.mutateAsync
  }
}

export default usePedido;