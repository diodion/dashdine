'use client'

import Card from '@/components/Card';
import { Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ProdutoModal from '../Modal';

const Produtos: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: addIsOpen, onOpen: addOnOpen, onClose: addOnClose } = useDisclosure();

  return (
    <>
      <Card>
        <HStack justifyContent={'space-between'} mb='24px'>
          <Heading as='h2' fontSize={'20px'}>Produtos</Heading>
          <Button colorScheme='blue' onClick={addOnOpen}>Cadastrar produto</Button>
        </HStack>
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Categoria</Th>
            <Th>Valor</Th>
            <Th textAlign={'right'}>Ações</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Leite</Td>
              <Td>Desnatado</Td>
              <Td>Frios</Td>
              <Td>4,40</Td>
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

      <ProdutoModal title='Editar produto' isOpen={isOpen} onClose={onClose} />
      <ProdutoModal title='Cadastrar produto' isOpen={addIsOpen} onClose={addOnClose} />
    </>
  )
}

export default Produtos