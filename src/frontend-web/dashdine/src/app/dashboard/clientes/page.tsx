'use client'

import Card from '@/components/Card';
import { Box, Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ClientEditModal from './components/EditModal';
import useClientes from '@/hooks/use-clientes';

const ClientesPage: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { clientes } = useClientes();

  return (
    <>
      <Heading>Clientes</Heading>
      <Card>
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Telefone</Th>
            {/* <Th textAlign={'right'}>Ações</Th> */}
          </Thead>
          <Tbody>
            {
              clientes?.map(c => (
                <Tr key={c.cpf}>
                  <Td>{c.nome} {c.sobrenome}</Td>
                  <Td>{c.email}</Td>
                  <Td>{c.telefone}</Td>
                  {/* <Td>
                    <HStack justifyContent={'flex-end'}>
                      <Button colorScheme='red'>Deletar</Button>
                      <Button colorScheme='blue' onClick={onOpen}>Editar</Button>
                    </HStack>
                  </Td> */}
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Card>

      <ClientEditModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ClientesPage