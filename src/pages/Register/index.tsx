import Logo from '../../assets/Logo.svg'
import {Main,Section,Form,BaseTitulo,Buttons,LinkStyled} from '../../components/FormRegister/style'

import React, { useContext } from 'react'

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { UserContext } from '../../Contexts/userContext';


export interface iUserRegister{
    name: string,
    password: string,
    email: string,
    confirmpassword: string,
    bio:string,
    contact: string,
    course_module: "Primeiro módulo (Introdução ao Frontend)"
                    | "Segundo módulo (Frontend Avançado)"
                    | "Terceiro módulo (Introdução ao Backend)"
                    | "Quarto módulo (Backend Avançado)"
}

function RegisterPage(){

    const {setRegister} = useContext(UserContext)

    const scheme = yup.object().shape({
        email: yup.string().email('Email Inválido!').required('Email é Obrigatório'),
        password: yup.string()
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
        .matches(/(\d)/,  'Deve conter ao menos um número')
        .matches(/(\W)/,  'Deve conter ao menos um caractere especial ')
        .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
        .required('A senha é obrigatória'),
        name: yup.string().required('Nome Obrigatório'),
        confirmpassword: yup.string().oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha!'),
        bio: yup.string().required('Bio é obrigatória'),
        contact: yup.string().required('Contato obrigatório'),
        course_module: yup.string().required('Módulo obrigatório')  
    })

    const {register,handleSubmit, formState: {errors}} = useForm<iUserRegister>({
        resolver: yupResolver(scheme)
    })




    return(
        <Main>
        <Section>    
            <div>
                <img src={Logo} alt="LogoKenzieHub" />
                <LinkStyled to='/'>Voltar</LinkStyled>
            </div>
            <Form onSubmit={handleSubmit(setRegister)}>
                <BaseTitulo className='' tag='h1' FontSize='one'>Crie sua conta</BaseTitulo>
                <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>Rapido e grátis, vamos nessa!</BaseTitulo>
                <div>
                    <BaseTitulo className=''  tag='h6' FontSize='headline'>Nome</BaseTitulo>
                    <input type="text"  id="name" placeholder='Insira seu nome aqui' {...register('name')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.name?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className=''  tag='h6' FontSize='headline'>Email</BaseTitulo>
                    <input type="email"  id="email" placeholder='Digite aqui seu Email' {...register('email')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.email?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className=''  tag='h6' FontSize='headline'>Senha</BaseTitulo>
                    <input type="password"  id="password" placeholder='Digite aqui sua Senha' autoComplete='on' {...register('password')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.password?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className='' tag='h6' FontSize='headline'>Confirmar Senha</BaseTitulo>
                    <input type="password"  id="confirmpassword" placeholder='Digite novamente sua Senha' autoComplete='on' {...register('confirmpassword')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.confirmpassword?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className='' tag='h6' FontSize='headline'>Bio</BaseTitulo>
                    <input type="text"  id="bio" placeholder='Fale sobre você' {...register('bio')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.bio?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className=''  tag='h6' FontSize='headline'>Contato</BaseTitulo>
                    <input type="text"  id="contact" placeholder='Opção de Contato' {...register('contact')} />
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.contact?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo className='' tag='h6' FontSize='headline'>Selecionar módulo</BaseTitulo>
                    <select  id="course_module" {...register('course_module')}>
                        <option value="">Selecione o Modulo</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>

                        </select>
                    <BaseTitulo className='' tag='h5' FontSize='headlineBlack'>{errors.course_module?.message}</BaseTitulo>
                </div>
                <Buttons type='submit' ButtonColor='rose'>Cadastrar</Buttons>
            </Form>
        </Section>
        </Main>
    )
}   


export default RegisterPage