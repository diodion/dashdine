'use client'

import Card from '@/components/Card';
import { Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import CategoriaModal from '../CategoriaModal';
import useCategorias from '@/hooks/use-categorias';

const Categorias: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: addIsOpen, onOpen: addOnOpen, onClose: addOnClose } = useDisclosure();

  const { categorias, remove } = useCategorias();

  const [removing, setRemoving] = useState<string>()
  const handleRemove = async (id: string): Promise<void> => {
    setRemoving(id);
    await remove({ id });
    setRemoving(undefined);
  }

  const [editingCategory, setEditingCategory] = useState<Categoria>();
  const handleEdit = (category: Categoria): void => {
    onOpen();
    setEditingCategory(category);
  }


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
            {
              categorias?.map(c => (
                <Tr key={c.nome}>
                  <Td>{c.nome}</Td>
                  <Td>{c.descricao}</Td>
                  <Td>
                    <HStack justifyContent={'flex-end'}>
                      <Button colorScheme='red' isLoading={removing === c._id} onClick={() => handleRemove(c._id)}>Deletar</Button>
                      <Button colorScheme='blue' onClick={() => handleEdit(c)}>Editar</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Card>

      <CategoriaModal title='Editar categoria' isOpen={isOpen} onClose={onClose} categoria={editingCategory} />
      <CategoriaModal title='Cadastrar categoria' isOpen={addIsOpen} onClose={addOnClose} />
    </>
  )
}

export default Categorias