'use client';

import useLogin from '@/hooks/use-login';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import Router from 'next/router';
import React, { useState } from 'react';

const Login: React.FC = function () {
  const { login } = useLogin();
  const [loging, setLoging] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (): Promise<void> => {
    setLoging(true);
    const succeed = await login(email, password);

    if (succeed) {
      Router.push('/dashboard/pedidos');
      return;
    }

    setLoging(false)
  }

  return (
    <Flex alignItems={'center'} justifyContent={'center'} h='100vh'>
      <Box w='300px' maxW='100%'>
        <Heading mb='24px'>Entrar</Heading>
        <form>
          <Stack gap='16px'>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input value={password} onChange={e => setPassword(e.target.value)} type='password' />
            </FormControl>
            <Button isLoading={loging} onClick={handleLogin} colorScheme='blue'>Entrar</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
}

export default Login;