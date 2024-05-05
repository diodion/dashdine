'use client'

import Card from '@/components/Card';
import { Badge, Button, Grid, Heading, HStack, Stack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Pedido from './components/Pedido';
import usePedidos from '@/hooks/use-pedidos';

const PedidosPage: React.FC = function () {
  const { pedidos } = usePedidos();

  const pedidosMock = [
    {
      id: 1,
      status: 'Aguardando confirmação'
    },
    {
      id: 2,
      status: 'Aguardando confirmação'
    },
    {
      id: 3,
      status: 'Confirmado'
    },
    {
      id: 4,
      status: 'Em transito'
    },
    {
      id: 5,
      status: 'Liberado'
    },
    {
      id: 6,
      status: 'Entregue'
    },
    {
      id: 7,
      status: 'Cancelado'
    }
  ]

  const getPedidos = (status: string): Pedido[] => pedidos?.filter(p => p.statusConfirmacao === status) || []

  const statuses = ["Aguardando confirmação", "Confirmado", "Em transito", "Liberado", "Entregue", "Cancelado"]
  const colors = ['yellow', 'orange', 'blue', 'blue', 'green', 'red']

  return (
    <>
      <Heading>Pedidos</Heading>

      <Grid gap='24px' templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}>
        {
          statuses.map((status, index) => (
            <Card key={status}>
              <Badge colorScheme={colors[index]} w='100%' textAlign={'center'} py='4px'>{status}</Badge>

              <Stack mt='24px'>
                {
                  getPedidos(status).map(pedido => (
                    <Pedido key={pedido.codigo} pedido={pedido} />
                  ))
                }
              </Stack>
            </Card>
          ))
        }
      </Grid>
    </>
  )
}

export default PedidosPage