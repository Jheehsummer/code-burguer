import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'
import api from "../../services/api";
import { toast } from "react-toastify";

import Button from "../../components/Button";
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

function Register() {


  const schema = Yup.object({
    name: Yup.string()
      .required('O nome é obrigatótio'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),

  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {

    const {status} = await api.post('users', {

      name: clientData.name,
      email: clientData.email,
      password: clientData.password,

    },
    { validateStatus: () => true }
    )

    if(status === 201 || status === 200) {
      toast.success('Cadastro criado com sucesso!')
    } else if(status === 409) {
      toast.error('Email já cadastrado! Faça login para continuar.')
    } else {
      throw new Error()
    }
    } catch(err) {
      toast.error('Falha no sistema! Tente novamente')
    }

    
  }

  return (
    <Container>
      <ContainerItens>

      </ContainerItens>

      <ContainerLogin>

        <img src={CodeBurguer} alt="LogoCodeBurguer" />

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label error={errors.name?.message} >Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input 
            type="email"
            {...register('email')}
            error={errors.email?.message} 
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input 
            type="password"
            {...register('password')}
            error={errors.password?.message} 
            />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
          <Input 
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message} 
            />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 35, marginBottom: 10 }}>
            Sign Up
          </Button>
          <SignInLink>Já possui conta? <Link to="/login">Sign In</Link></SignInLink>
        </form>

      </ContainerLogin>
    </Container>
  )
}

export default Register;