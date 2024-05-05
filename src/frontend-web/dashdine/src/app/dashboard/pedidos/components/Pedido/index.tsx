import Card from '@/components/Card';
import usePedido from '@/hooks/use-pedido';
import { Box, Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  pedido: Pedido
}

const Pedido: React.FC<Props> = function ({ pedido }) {
  const statuses = ["Aguardando confirmação", "Confirmado", "Em transito", "Liberado", "Entregue", "Cancelado"]
  const { isOpen, onOpen, onClose } = useDisclosure();


  const { changeStatus } = usePedido();

  const [changing, setChanging] = useState(false);
  const handleChange = async (status: string): Promise<void> => {
    setChanging(true);
    await changeStatus({ id: pedido._id, status })
    setChanging(false);
  }
  return (
    <Card>
      <Text mb='16px' fontWeight={600}>{pedido.codigo}</Text>

      <Text>{`${pedido.endereco.logradouro}, ${pedido.endereco.numero}, ${pedido.endereco.bairro}`}</Text>
      <Text>{`${pedido.endereco.cidade}, ${pedido.endereco.uf}`}</Text>

      <Button onClick={onOpen} colorScheme='blue' w='100%' my='24px'>Ver itens do pedido</Button>

      <Text fontWeight={600} color='green.500' fontSize='18px'>R${pedido.precoTotal.toFixed(2)}</Text>

      <FormControl mt='24px'>
        <HStack>
          <FormLabel fontSize={'14px'}>Alterar status</FormLabel>
          {changing && <Spinner />}
        </HStack>
        <Select isDisabled={changing} defaultValue={pedido.statusConfirmacao} size='sm' onChange={e => handleChange(e.target.value)}>
          {
            statuses.map(status => <option disabled={pedido.statusConfirmacao !== 'Aguardando confirmação' && status === 'Aguardando confirmação'} key={`status-${status}`} value={status}>{status}</option>)
          }
        </Select>
      </FormControl>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pedido.codigo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap='8px' mb='24px'>
              {
                pedido.itensPedido.map(item => (
                  <Card key={item.itemId}>
                    <Text mb='8px' fontWeight={600}>{item.detalhesItem.nome}</Text>
                    <Text>Valor: <strong>R${item.detalhesItem.valor}</strong></Text>
                    <Text>Quantidade: <strong>{item.quantidade}</strong></Text>
                  </Card>
                ))
              }
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>
  )
}

export default Pedido