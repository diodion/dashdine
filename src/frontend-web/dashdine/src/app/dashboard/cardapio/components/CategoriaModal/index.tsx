import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';

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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
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

                <FormControl>
                  <Checkbox name='ativo'>
                    Ativo
                  </Checkbox>
                </FormControl>
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

export default CategoriaModal