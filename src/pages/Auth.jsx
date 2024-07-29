import { Box, Stack, Switch, Text } from '@chakra-ui/react'
import LoginForm from '../components/LoginForm'

const Auth = () => {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      bgGradient='linear(to-r, purple.500, blue.500)'
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <LoginForm />
      <Stack
        direction={'row'}
        divider={<Switch colorScheme='red' />}
        my={'2rem'}
        gap={'1rem'}
        alignItems={'center'}
      >
        <Text>Registrarse</Text>
        <Text>Iniciar sesión</Text>
      </Stack>
    </Box>
  )
}

export default Auth
