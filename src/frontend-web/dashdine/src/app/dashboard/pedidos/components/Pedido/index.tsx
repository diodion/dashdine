import Card from '@/components/Card';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

interface Props {
  pedido: Pedido
}

const Pedido: React.FC<Props> = function ({ pedido }) {
  const statuses = ["Aguardando confirmação", "Confirmado", "Em transito", "Liberado", "Entregue", "Cancelado"]

  return (
    <Card>
      {pedido.id}

      <FormControl mt='24px'>
        <FormLabel fontSize={'14px'}>Alterar status</FormLabel>
        <Select defaultValue={pedido.status} size='sm'>
          {
            statuses.map(status => <option key={`status-${status}`} value={status}>{status}</option>)
          }
        </Select>
      </FormControl>
    </Card>
  )
}

export default Pedido