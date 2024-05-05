import { UseMutateFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface RemoveProductDTO {
  id: string
}
interface EditProductDTO {
  id: string,
  nome: string,
  descricao: string,
  categoria: string,
  valor: string,
  ativo: boolean
}
interface CreateProductDTO {
  nome: string,
  descricao: string,
  categoria: string,
  valor: string,
  ativo: boolean
}
interface UseCardapioReturn {
  produtos: Produto[] | undefined
  edit: UseMutateFunction<any, Error, EditProductDTO, unknown>
  remove: UseMutateFunction<any, Error, RemoveProductDTO, unknown>
  create: UseMutateFunction<any, Error, CreateProductDTO, unknown>
}

interface UseCardapio {
  (): UseCardapioReturn
}

const useCardapio: UseCardapio = () => {
  const { api } = useApi();
  const queryClient = useQueryClient();

  const getCardapio = useCallback(
    () => async () => api.get('/cardapioadm').then((res) => res.data),
    [api],
  );

  const removeProduct = useCallback(
    async ({ id }: RemoveProductDTO) => api.delete(`/cardapioadm/${id}`).then((res) => res.data),
    [api],
  );
  const createProduct = useCallback(
    async (params: CreateProductDTO) => api.post(`/cardapioadm`, params).then((res) => res.data),
    [api],
  );
  const editProduct = useCallback(
    async ({ id, ...body }: EditProductDTO) => api.patch(`/cardapioadm/${id}`, { body }).then((res) => res.data),
    [api],
  );

  const query = useQuery({
    queryKey: ['produtos'],
    queryFn: getCardapio(),
  });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['produtos'] }),
  });
  const editMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['produtos'] }),
  });
  const removeMutation = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['produtos'] }),
  });

  return {
    produtos: query.data,
    edit: editMutation.mutateAsync,
    remove: removeMutation.mutateAsync,
    create: createMutation.mutateAsync
  }
}

export default useCardapio;