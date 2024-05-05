'use client'
 
import Card from '@/components/Card';
import useRelatorios from '@/hooks/use-relatorios';
import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';

const RelatoriosPage: React.FC = function () {
  const { getSales, getEarns } = useRelatorios();
  const [getting, setGetting] = useState(false);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const [sales, setSales] = useState<Produto[]>();
  const [earns, setEarns] = useState<number>();

  const handleGet = async (): Promise<void> => {
    try {
      setGetting(true);
      const earnsResult = await getEarns({dataFinal, dataInicial});
      setEarns(earnsResult);
  
      const salesResult = await getSales({dataFinal, dataInicial});
      setSales(salesResult);
      setGetting(false);
    } catch (error){
      setGetting(false);
    }
  }
  return (
    <>
      <Heading>Relatórios</Heading>

      <Card>
        <Heading as='h2' fontSize={'20px'}>
          Itens mais pedidos
        </Heading>

        <HStack mt='24px' alignItems={'flex-end'}>
          <FormControl>
            <FormLabel>
              Data inicial
            </FormLabel>
            <Input value={dataInicial} onChange={e => setDataInicial(e.target.value)} type='date' />
          </FormControl>
          <FormControl>
            <FormLabel>
              Data final
            </FormLabel>
            <Input value={dataFinal} onChange={e => setDataFinal(e.target.value)} type='date' />
          </FormControl>
          {/* <FormControl>
            <FormLabel>Status</FormLabel>
            <Select>
              <option>Aguardando confirmação</option>
            </Select>
          </FormControl> */}
          <Box>
          <Button colorScheme='blue' onClick={handleGet} isLoading={getting}>Visualizar</Button>
          </Box>
        </HStack>

            {
              !!sales &&
              <Table mt='32px'>
                <Thead>
                  <Th>Produto</Th>
                  <Th>Valor</Th>
                </Thead>
                <Tbody>
                  {
                    sales.map(s => (
                      <Tr key={s.nome}>
                        <Td>{s.nome}</Td>
                        <Td>R${s.valor}</Td>
                      </Tr>
                    ))
                  }
                </Tbody>
              </Table>
            }
    
            {
              !!earns &&
              <Box mt='32px'>
                <Heading as='h3' fontSize={'18px'}>Ganhos no período selecionado</Heading>
                <Text color='green.500' fontWeight={'bold'} fontSize='24px'>R${earns.toFixed(2)}</Text>
              </Box>
            }
      </Card>
    </>
  )
}

export default RelatoriosPage