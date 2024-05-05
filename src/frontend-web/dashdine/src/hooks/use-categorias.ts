import { UseMutateFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useApi from "./use-api";
import { useCallback } from "react";

interface RemoveDTO {
  id: string
}
interface EditDTO {
  id: string,
  nome: string,
  descricao: string,
  categoria: string,
  valor: string,
  ativo: boolean
}
interface CreateDTO {
  nome: string,
  descricao: string,
}
interface UseCategoriasReturn {
  categorias: Categoria[] | undefined
  edit: UseMutateFunction<any, Error, EditDTO, unknown>
  remove: UseMutateFunction<any, Error, RemoveDTO, unknown>
  create: UseMutateFunction<any, Error, CreateDTO, unknown>
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

  const remove = useCallback(
    async ({ id }: RemoveDTO) => api.delete(`/categoria/${id}`).then((res) => res.data),
    [api],
  );

  const edit= useCallback(
    async ({ id, ...body }: EditDTO) => api.patch(`/categoria/${id}`, { body }).then((res) => res.data),
    [api],
  );

  const create = useCallback(
    async (params: CreateDTO) => api.post(`/categoria`, params).then((res) => res.data),
    [api],
  );

  const query = useQuery({
    queryKey: ['categorias'],
    queryFn: getCategorias(),
  });

  const editMutation = useMutation({
    mutationFn: edit,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categorias'] }),
  });
  const createMutation = useMutation({
    mutationFn: create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categorias'] }),
  });
  const removeMutation = useMutation({
    mutationFn: remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categorias'] }),
  });

  return {
    categorias: query.data,
    edit: editMutation.mutateAsync,
    remove: removeMutation.mutateAsync,
    create: createMutation.mutateAsync
  }
}

export default useCategorias;