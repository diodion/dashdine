'use client'

import Card from '@/components/Card';
import { Button, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProdutoModal from '../Modal';
import useCardapio from '@/hooks/use-cardapio';

const Produtos: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: addIsOpen, onOpen: addOnOpen, onClose: addOnClose } = useDisclosure();

  const { produtos, remove } = useCardapio();

  const [removing, setRemoving] = useState<string>()
  const handleRemove = async (id: string): Promise<void> => {
    setRemoving(id);
    await remove({ id });
    setRemoving(undefined);
  }

  const [editingProduct, setEditingProduct] = useState<Produto>();
  const handleEdit = (product: Produto): void => {
    onOpen();
    setEditingProduct(product);
  }

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
            {
              produtos?.map(p => (
                <Tr key={p.nome}>
                  <Td>{p.nome}</Td>
                  <Td>{p.descricao}</Td>
                  <Td>{p.categoria?.nome}</Td>
                  <Td>{p.valor}</Td>
                  <Td>
                    <HStack justifyContent={'flex-end'}>
                      <Button colorScheme='red' isLoading={removing === p._id} onClick={() => handleRemove(p._id)}>Deletar</Button>
                      <Button colorScheme='blue' onClick={() => handleEdit(p)}>Editar</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Card>

      <ProdutoModal title='Editar produto' isOpen={isOpen} onClose={onClose} product={editingProduct} />
      <ProdutoModal title='Cadastrar produto' isOpen={addIsOpen} onClose={addOnClose} />
    </>
  )
}

export default Produtos