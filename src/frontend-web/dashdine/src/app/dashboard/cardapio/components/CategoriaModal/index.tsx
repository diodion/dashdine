import useCategorias from '@/hooks/use-categorias';
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  title: string
}

const CategoriaModal: React.FC<Props> = function ({
  title,
  isOpen,
  onClose,
}) {

  const { create } = useCategorias();
  const fields = [
    {
      name: 'nome',
      defaultValue: ''
    },
    {
      name: 'descricao',
      defaultValue: ''
    },
  ]

  const [creating, setCreating] = useState(false);

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get('nome')?.toString();
    const descricao = form.get('descricao')?.toString();

    if(!(nome && descricao)) return;

    setCreating(true);
    await create({nome, descricao});
    setCreating(false);

  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
            <form>
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
                  <Checkbox name='ativo'>
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