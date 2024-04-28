import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends BoxProps {
  children: React.ReactNode
}

const Card: React.FC<Props> = function ({ children, ...rest }) {
  return (
    <Box p='24px' border='1px solid' borderColor={'gray.300'} borderRadius={'5px'} {...rest}>
      {children}
    </Box>
  )
}

export default Card