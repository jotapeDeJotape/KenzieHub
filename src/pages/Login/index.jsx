import Logo from '../../assets/Logo.svg'
import {Main,Section,Form,BaseTitulo,Buttons} from '../../components/FormLogin/style'
import React from 'react'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


function LoginPage(){
    const navigate = useNavigate()
    const scheme = yup.object().shape({
        email:yup.string().email('Email Inválido').required('Email é Obrigatório!'),
        password:yup.string().required('Senha é Obrigatório')
    })


    const {register,handleSubmit, formState: {errors}, setError} = useForm({
        resolver: yupResolver(scheme)
    })

    function logarApi(data){
        api.post('/sessions', {...data})
        .then(({data}) => {
            window.localStorage.clear()
            window.localStorage.setItem('@Token', data.token)
            window.localStorage.setItem('@USERID',data.user.id)
            console.log(data)  
            toast.success('Logado Com Sucesso', {
                theme: 'dark',
                autoClose: 2400,
            })
            setTimeout(() =>{
                navigate('/dashboard')
            },2500)
        })
        .catch(({response}) => {
            toast.error(`Senha e Email não são compátiveis`, {
                theme: 'dark'
            })
        })
        
    }

    function NavigateRegister(){
        navigate('/register')
    }

    

    return(
        <Main>
        <Section>    
            <div className='divSec'>
                <img src={Logo} alt="LogoKenzieHub" />
            </div>
            <Form onSubmit={handleSubmit(logarApi)}>
                <BaseTitulo tag='h1' FontSize='one'>Login</BaseTitulo>
                <div>
                    <BaseTitulo htmlFor='email' tag='h6' FontSize='headline'>Email</BaseTitulo>
                    <input type="email" name="email" id="email" placeholder='Digite aqui seu Email' {...register('email')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.email?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo htmlFor="password" tag='h6' FontSize='headline'>Senha</BaseTitulo>
                    <input type="password" name="password" id="password" placeholder='Digite aqui sua Senha' autoComplete='on' {...register('password')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.password?.message}</BaseTitulo>
                </div>
                <Buttons type='submit' ButtonColor='rose'>Entrar</Buttons>
                <BaseTitulo tag='h6' FontSize='headlineBlack' >Ainda não possui uma conta?</BaseTitulo>
                <Buttons onClick={NavigateRegister} ButtonColor='gray'>Cadastre-se</Buttons>
            </Form>
        </Section>
        </Main>
    )
}


export default LoginPage