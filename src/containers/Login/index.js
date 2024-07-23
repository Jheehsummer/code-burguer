import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import * as Yup from 'yup'
import api from "../../services/api";
import { useUser } from '../../hooks/UserContext'
import { useHistory } from 'react-router-dom'

import {Button} from "../../components";
import CodeBurguer from '../../assets/codeburguer.svg'

import { 
  Container, 
  ContainerItens,
  ContainerLogin,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
  Link,
} from './styles'

export function Login(){

  const history = useHistory()
  const {putUserData} = useUser()
  
  const schema = Yup.object({
   
    email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
    password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter pelo menos 6 digitos'),
    
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = async clientData => {    
   
    const {data} = await toast.promise(
      api.post('session', {
      email: clientData.email,
      password: clientData.password,
    }),
    {
      pending: 'Verificando seus dados',
      success: 'Seja bem-vindo(a) 👌',
      error: 'Email ou senha incorretos 🤯'
    }
  )
  putUserData(data) 
  
  setTimeout(() => {
    if(data.admin){
      history.push('/pedidos')
    } else {
    history.push('/')
    }
  }, 1000);

  }

  return (
    <Container>
      <ContainerItens>
      </ContainerItens>

      <ContainerLogin>

      <img src={CodeBurguer} alt="LogoCodeBurguer" />
    
      <h1>Login</h1>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Label >Email</Label>
      <Input type="email" 
      {...register('email')}
      error={errors.email?.message}/>
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <Label>Senha</Label>
      <Input type="password"
      {...register('password')} 
      error={errors.password?.message}/>
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <Button type='submit' style={{ marginTop: 50, marginBottom: 10, }}>Sign In</Button>
      <SignInLink>Não possui conta? <Link to="/cadastro">Sign Up</Link></SignInLink>
      </form>

      </ContainerLogin>
    </Container>
  )
}

