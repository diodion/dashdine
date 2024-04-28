'use client'

import Card from '@/components/Card';
import { Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CategoriaModal from '../CategoriaModal';

const Categorias: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: addIsOpen, onOpen: addOnOpen, onClose: addOnClose } = useDisclosure();

  return (
    <>
      <Card>
        <HStack justifyContent={'space-between'} mb='24px'>
          <Heading as='h2' fontSize={'20px'}>Categorias</Heading>
          <Button colorScheme='blue' onClick={addOnOpen}>Cadastrar categoria</Button>
        </HStack>
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th textAlign={'right'}>Ações</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Doces</Td>
              <Td>Bom</Td>
              <Td>
                <HStack justifyContent={'flex-end'}>
                  <Button colorScheme='red'>Deletar</Button>
                  <Button colorScheme='blue' onClick={onOpen}>Editar</Button>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>

      <CategoriaModal title='Editar categoria' isOpen={isOpen} onClose={onClose} />
      <CategoriaModal title='Cadastrar categoria' isOpen={addIsOpen} onClose={addOnClose} />
    </>
  )
}

export default Categorias