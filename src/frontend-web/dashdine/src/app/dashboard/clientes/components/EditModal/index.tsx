import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void
}

const ClientEditModal: React.FC<Props> = function ({
  isOpen,
  onClose,
}) {

  const fields = [
    {
      name: 'nome',
      defaultValue: ''
    },
    {
      name: 'sobrenome',
      defaultValue: ''
    },
    {
      name: 'cpf',
      defaultValue: ''
    },
    {
      name: 'email',
      defaultValue: ''
    },
    {
      name: 'telefone',
      defaultValue: ''
    },
  ]

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
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
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
            <Button colorScheme='blue' ml={3}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ClientEditModal