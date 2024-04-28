import Topbar from '@/components/Topbar'
import { Box, Container, Stack } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
}
const DashboardLayout: React.FC<Props> = function ({ children }) {
  return (
    <Box>
      <Stack gap='40px'>
        <Topbar />
        <Container maxW={'1200px'} px='24px'>
          <Stack gap='24px'>
            {children}
          </Stack>
        </Container>
      </Stack>
    </Box>
  )
}

export default DashboardLayout