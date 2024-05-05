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
interface UseCategoriasReturn {
  categorias: Categoria[] | undefined
  edit: UseMutateFunction<any, Error, EditProductDTO, unknown>
  remove: UseMutateFunction<any, Error, RemoveProductDTO, unknown>
}

interface UseCategorias {
  (): UseCategoriasReturn
}

const useCategorias: UseCategorias = () => {
  const { api } = useApi();
  const queryClient = useQueryClient();

  const getCategorias = useCallback(
    () => async () => api.get('/categoria').then((res) => res.data),
    [api],
  );

  const removeProduct = useCallback(
    async ({ id }: RemoveProductDTO) => api.delete(`/categoria/${id}`).then((res) => res.data),
    [api],
  );

  const editProduct = useCallback(
    async ({ id, ...body }: EditProductDTO) => api.patch(`/categoria/${id}`, { body }).then((res) => res.data),
    [api],
  );

  const query = useQuery({
    queryKey: ['categorias'],
    queryFn: getCategorias(),
  });

  const editMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categorias'] }),
  });
  const removeMutation = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categorias'] }),
  });

  return {
    categorias: query.data,
    edit: editMutation.mutateAsync,
    remove: removeMutation.mutateAsync
  }
}

export default useCategorias;