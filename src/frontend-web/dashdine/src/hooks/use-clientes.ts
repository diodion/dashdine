import { QueryFunction, useQuery, UseQueryResult } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface UseClientesReturn {
  clientes: User[] | undefined
}

interface UseClientes {
  (): UseClientesReturn
}

const useClientes: UseClientes = () => {
  const { api } = useApi();

  const getClientes = useCallback(
    () => async () => api.get('/clienteadm').then((res) => res.data.usuarios),
    [api],
  );

  const query: UseQueryResult<User[]> = useQuery({
    queryKey: ['clientes'],
    queryFn: getClientes(),
  });

  return {
    clientes: query.data
  }
}

export default useClientes;