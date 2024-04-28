import { useQuery } from "@tanstack/react-query";
import useApi from "./use-api";

interface UseClientesReturn {
  clientes: User[] | undefined
}

interface UseClientes {
  (): UseClientesReturn
}

const useClientes: UseClientes = () => {
  const { api } = useApi();

  const query = useQuery({
    queryKey: ['clientes'],
    queryFn: () => async () => api.get('/clienteadm').then((res) => res.data),
  });

  return {
    clientes: query.data
  }
}

export default useClientes;