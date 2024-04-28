import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  title: string
}

const FuncionarioModal: React.FC<Props> = function ({
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
    {
      name: 'empresa',
      defaultValue: ''
    },
    {
      name: 'supervisor',
      defaultValue: ''
    },
    {
      name: 'cargos',
      defaultValue: '',
      options: ['Atendente', 'Coordenador', 'Gerente', 'Admin', 'Superuser']
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
                      {
                        field.options ?
                          <Select>
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

export default FuncionarioModal