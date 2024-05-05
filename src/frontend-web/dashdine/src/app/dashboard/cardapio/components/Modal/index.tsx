import useCardapio from '@/hooks/use-cardapio';
import useCategorias from '@/hooks/use-categorias';
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  product?: Produto
}

const ProdutoModal: React.FC<Props> = function ({
  title,
  isOpen,
  onClose,
  product
}) {

  const { categorias } = useCategorias();
  const { create } = useCardapio();
  const fields = [
    {
      name: 'nome',
      defaultValue: product?.nome || ''
    },
    {
      name: 'descricao',
      defaultValue: product?.descricao || ''
    },
    {
      name: 'categoria',
      defaultValue: '',
      options: categorias?.map(c => c.nome)
    },
    {
      name: 'valor',
      defaultValue: product?.valor || ''
    }
  ]

  const [creating, setCreating] = useState(false);

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.entries());
    const nome = form.get('nome')?.toString();
    const descricao = form.get('descricao')?.toString();
    const categoria = form.get('categoria');
    const valor = form.get('valor')?.toString();
    const ativo = !!form.get('ativo')?.toString();

    const categoriaId = categorias?.find(c => c.nome === categoria)?._id;

    if(!(nome && descricao && categoriaId && valor)) return;

    setCreating(true);
    await create({nome, descricao, categoria: categoriaId, valor, ativo});
    setCreating(false);

  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
            <form onSubmit={e => handleAddProduct(e)}>
          <ModalBody>
              <Stack gap='24px'>
                {
                  fields.map(field => (
                    <FormControl key={field.name}>
                      <FormLabel textTransform={'capitalize'}>
                        {field.name}
                      </FormLabel>
                      {
                        field.options ?
                          <Select name={field.name}>
                          <option>Selecione</option>
                            {
                              field.options.map(option => <option key={option} value={option}>{option}</option>)
                            }
                          </Select>
                          :
                          <Input name={field.name} defaultValue={field.defaultValue} />
                      }
                    </FormControl>
                  ))
                }
                <FormControl>
                  <Checkbox name='ativo' defaultChecked={product?.ativo}>
                    Ativo
                  </Checkbox>
                </FormControl>
              </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
            <Button type='submit' colorScheme='blue' ml={3} isLoading={creating}>
              Salvar
            </Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProdutoModal