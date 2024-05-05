'use client'

import Card from '@/components/Card';
import { Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import FuncionarioModal from './components/Modal';
import useFuncionarios from '@/hooks/use-funcionarios';

const FuncionariosPage: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: addIsOpen, onOpen: addOnOpen, onClose: addOnClose } = useDisclosure();

  const { funcionarios } = useFuncionarios();

  return (
    <>
      <HStack justifyContent={'space-between'}>
        <Heading>Funcionários</Heading>
        <Button colorScheme='blue' onClick={addOnOpen}>Cadastrar funcionário</Button>
      </HStack>
      <Card>
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Telefone</Th>
            <Th>Cargo</Th>
            <Th textAlign={'right'}>Ações</Th>
          </Thead>
          <Tbody>
            {
              funcionarios?.map(f => (
                <Tr>
                  <Td>Antony</Td>
                  <Td>mail@mail.com</Td>
                  <Td>483578943</Td>
                  <Td>Cargo</Td>
                  <Td>
                    <HStack justifyContent={'flex-end'}>
                      <Button colorScheme='red'>Deletar</Button>
                      <Button colorScheme='blue' onClick={onOpen}>Editar</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Card>

      <FuncionarioModal title='Editar funcionário' isOpen={isOpen} onClose={onClose} />
      <FuncionarioModal title='Cadastrar funcionário' isOpen={addIsOpen} onClose={addOnClose} />
    </>
  )
}

export default FuncionariosPage