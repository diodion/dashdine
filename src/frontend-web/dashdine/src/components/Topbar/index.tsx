'use client';

import useAuth from '@/hooks/use-login';
import { Box, Button, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Topbar: React.FC = function () {
  const { logout } = useAuth();
  return (
    <Box>
      <HStack px='32px' py='24px' borderBottom={'1px solid'} borderColor={'gray.200'} justifyContent={'space-between'}>
        <Box w='80px' />

        <HStack gap='32px' justifyContent={'center'}>
          <Link href={'/dashboard/pedidos'}>Pedidos</Link>
          <Link href={'/dashboard/cardapio'}>Cardápio</Link>
          <Link href={'/dashboard/clientes'}>Clientes</Link>
          <Link href={'/dashboard/funcionarios'}>Funcionários</Link>
          <Link href={'/dashboard/relatorios'}>Relatórios</Link>
        </HStack>

        <Button w='80px' size='sm' onClick={logout}>Logout</Button>
      </HStack>
    </Box>
  )
}

export default Topbar