import { useQuery } from "@tanstack/react-query";
import useApi from "./use-api";

interface UseCardapioReturn {
  cardapio: Cardapio | undefined
}

interface UseCardapio {
  (): UseCardapioReturn
}

const useCardapio: UseCardapio = () => {
  const { api } = useApi();

  const query = useQuery({
    queryKey: ['cardapio'],
    queryFn: () => async () => api.get('/cardapioadm').then((res) => res.data),
  });

  return {
    cardapio: query.data
  }
}

export default useCardapio;