import Logo from '../../assets/Logo.svg'
import {Main,Section,Form,BaseTitulo,Buttons,LinkStyled} from '../../components/FormLogin/style'
import React, { useContext } from 'react'

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { UserContext } from '../../Contexts/userContext';


export interface iUserLogin{
    email: string,
    password:string,
}

function LoginPage(){

    const {logarApi} = useContext(UserContext)

    const scheme = yup.object().shape({
        email:yup.string().email('Email Inválido').required('Email é Obrigatório!'),
        password:yup.string().required('Senha é Obrigatório')
    })


    const {register,handleSubmit, formState: {errors}} = useForm<iUserLogin>({
        resolver: yupResolver(scheme)
    })

    return(
        <Main>
        <Section>    
            <div className='divSec'>
                <img src={Logo} alt="LogoKenzieHub" />
            </div>
            <Form onSubmit={handleSubmit(logarApi)}>
                <BaseTitulo className='' tag='h1' FontSize='one'>Login</BaseTitulo>
                <div>
                    <BaseTitulo className=''   tag='h6' FontSize='headline'>Email</BaseTitulo>
                    <input type="email"  id="email" placeholder='Digite aqui seu Email' {...register('email')} />
                    <BaseTitulo className=''  tag='h5' FontSize='headlineBlack'>{errors.email?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className=''   tag='h6' FontSize='headline'>Senha</BaseTitulo>
                    <input type="password"  id="password" placeholder='Digite aqui sua Senha' autoComplete='on' {...register('password')} />
                    <BaseTitulo className=''  tag='h5' FontSize='headlineBlack'>{errors.password?.message}</BaseTitulo>
                </div>
                <Buttons type='submit' ButtonColor='rose'>Entrar</Buttons>
                <BaseTitulo className=''  tag='h6' FontSize='headlineBlack' >Ainda não possui uma conta?</BaseTitulo>
                <LinkStyled to='/register' >Cadastre-se</LinkStyled>
            </Form>
        </Section>
        </Main>
    )
}


export default LoginPage