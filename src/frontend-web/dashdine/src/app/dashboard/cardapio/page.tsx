'use client'

import { Heading } from '@chakra-ui/react';
import React from 'react';
import Produtos from './components/Produtos';
import Categorias from './components/Categorias';

const CardapioPage: React.FC = function () {
  return (
    <>
      <Heading>Cardápio</Heading>
      <Produtos />
      <Categorias />
    </>
  )
}

export default CardapioPage