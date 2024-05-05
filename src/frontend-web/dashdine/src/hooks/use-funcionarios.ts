import { useQuery, UseQueryResult } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface UseFuncionariosReturn {
  funcionarios: Funcionario[] | undefined
}

interface UseFuncionarios {
  (): UseFuncionariosReturn
}

const useFuncionarios: UseFuncionarios = () => {
  const { api } = useApi();

  const getFuncionarios = useCallback(
    () => async () => api.get('/func/gerenciar').then((res) => res.data),
    [api],
  );

  const query: UseQueryResult<Funcionario[]> = useQuery({
    queryKey: ['funcionarios'],
    queryFn: getFuncionarios(),
  });

  return {
    funcionarios: query.data
  }
}

export default useFuncionarios;