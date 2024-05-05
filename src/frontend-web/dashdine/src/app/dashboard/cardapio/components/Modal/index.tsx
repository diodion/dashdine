import useCategorias from '@/hooks/use-categorias';
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';

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
                <FormControl>
                  <Checkbox name='ativo' defaultChecked={product?.ativo}>
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

export default ProdutoModal