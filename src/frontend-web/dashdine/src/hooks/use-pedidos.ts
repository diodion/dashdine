import { useQuery, UseQueryResult } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface UsePedidosReturn {
  pedidos: Pedido[] | undefined
}

interface UsePedidos {
  (): UsePedidosReturn
}

const usePedidos: UsePedidos = () => {
  const { api } = useApi();

  const getPedidos = useCallback(
    () => async () => api.get('/pedido/conf/pega').then((res) => res.data.pedidos),
    [api],
  );

  const query: UseQueryResult<Pedido[]> = useQuery({
    queryKey: ['pedidos'],
    queryFn: getPedidos(),
  });

  return {
    pedidos: query.data
  }
}

export default usePedidos;