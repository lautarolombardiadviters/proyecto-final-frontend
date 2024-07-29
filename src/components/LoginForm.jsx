import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'

const REGEXS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
}

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }
  return (
    <Box onSubmit={handleSubmit(onSubmit)}>
      <Text
        as={'h1'}
        fontWeight={'bold'}
        fontSize={'2.5rem'}
        mb={'1rem'}
        color={'white'}
      >
        Inicio de sesión
      </Text>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor='email' color={'white'}>
          Email:
        </FormLabel>
        <Input
          id='email'
          {...register('email', {
            pattern: {
              value: REGEXS.EMAIL,
              message: 'Ingrese un email válido',
            },
            required: 'El campo email es requerido',
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor='password' color={'white'}>
          Contraseña:
        </FormLabel>
        <Input
          id='password'
          {...register('password', {
            pattern: { value: REGEXS.PASSWORD },
            required: 'El campo contraseña es requerido',
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        bgGradient='linear(to-r, purple.700, blue.500)'
        color={'white'}
        isLoading={isSubmitting}
        type='submit'
      >
        Entrar
      </Button>
    </Box>
  )
}
export default LoginForm
