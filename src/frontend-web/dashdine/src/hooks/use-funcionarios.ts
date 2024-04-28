import { useQuery } from "@tanstack/react-query";
import useApi from "./use-api";

interface UseFuncionariosReturn {
  funcionarios: Funcionario[] | undefined
}

interface UseFuncionarios {
  (): UseFuncionariosReturn
}

const useFuncionarios: UseFuncionarios = () => {
  const { api } = useApi();

  const query = useQuery({
    queryKey: ['funcionarios'],
    queryFn: () => async () => api.get('/func/gerenciar').then((res) => res.data),
  });

  return {
    funcionarios: query.data
  }
}

export default useFuncionarios;