import Card from '@/components/Card';
import { Box, FormControl, FormLabel, Heading, HStack, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const RelatoriosPage: React.FC = function () {
  return (
    <>
      <Heading>Relatórios</Heading>

      <Card>
        <Heading as='h2' fontSize={'20px'}>
          Itens mais pedidos
        </Heading>

        <HStack mt='24px'>
          <FormControl>
            <FormLabel>
              Data inicial
            </FormLabel>
            <Input type='date' />
          </FormControl>
          <FormControl>
            <FormLabel>
              Data final
            </FormLabel>
            <Input type='date' />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select>
              <option>Aguardando confirmação</option>
            </Select>
          </FormControl>
        </HStack>

        <Table mt='32px'>
          <Thead>
            <Th>Produto</Th>
            <Th>Valor</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Leite</Td>
              <Td>R$20,00</Td>
            </Tr>
          </Tbody>
        </Table>

        <Box mt='32px'>
          <Heading as='h3' fontSize={'18px'}>Ganhos no período selecionado</Heading>
          <Text color='green.500' fontWeight={'bold'} fontSize='24px'>R$200,00</Text>
        </Box>
      </Card>
    </>
  )
}

export default RelatoriosPage