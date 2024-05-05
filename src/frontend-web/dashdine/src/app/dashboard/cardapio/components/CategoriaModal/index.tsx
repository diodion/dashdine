import useCategorias from '@/hooks/use-categorias';
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  categoria?: Categoria
}

const CategoriaModal: React.FC<Props> = function ({
  title,
  isOpen,
  onClose,
  categoria
}) {

  const { create, edit } = useCategorias();
  const fields = [
    {
      name: 'nome',
      defaultValue: categoria?.nome || ''
    },
    {
      name: 'descricao',
      defaultValue: categoria?.descricao || ''
    },
  ]

  const [creating, setCreating] = useState(false);

  const handleAdd = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get('nome')?.toString();
    const descricao = form.get('descricao')?.toString();
    const ativo = !!form.get('ativo')?.toString();

    if(!(nome && descricao)) return;

    setCreating(true);
    if(categoria){
      await edit({id: categoria._id, nome, descricao, ativo});
    } else {
      await create({nome, descricao, ativo});
    }
    setCreating(false);
    onClose();

  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
            <form onSubmit={handleAdd}>
          <ModalBody>
              <Stack gap='24px'>
                {
                  fields.map(field => (
                    <FormControl key={field.name}>
                      <FormLabel textTransform={'capitalize'}>
                        {field.name}
                      </FormLabel>
                      <Input name={field.name} defaultValue={field.defaultValue} />
                    </FormControl>
                  ))
                }

                <FormControl>
                  <Checkbox name='ativo' defaultChecked={categoria?.ativo}>
                    Ativo
                  </Checkbox>
                </FormControl>
              </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
            <Button type='submit' isLoading={creating} colorScheme='blue' ml={3}>
              Salvar
            </Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CategoriaModal