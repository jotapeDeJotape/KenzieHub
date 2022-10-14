import Logo from '../../assets/Logo.svg'
import {Main,Section,Form,BaseTitulo,Buttons} from '../../components/FormRegister/style'

import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { UserContext } from '../../Contexts/userContext';

function RegisterPage(){
    const navigate = useNavigate()

    const {setRegister,NavigateLogin} = useContext(UserContext)

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

    const {register,handleSubmit, formState: {errors}, setError} = useForm({
        resolver: yupResolver(scheme)
    })




    return(
        <Main>
        <Section>    
            <div>
                <img src={Logo} alt="LogoKenzieHub" />
                <Buttons onClick={NavigateLogin} ButtonColor='black'>Voltar</Buttons>
            </div>
            <Form onSubmit={handleSubmit(setRegister)}>
                <BaseTitulo tag='h1' FontSize='one'>Crie sua conta</BaseTitulo>
                <BaseTitulo tag='h5' FontSize='headlineBlack'>Rapido e grátis, vamos nessa!</BaseTitulo>
                <div>
                    <BaseTitulo htmlFor='name' tag='h6' FontSize='headline'>Nome</BaseTitulo>
                    <input type="text" name="name" id="name" placeholder='Insira seu nome aqui' {...register('name')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.name?.message}</BaseTitulo>
                </div>
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
                <div>
                    <BaseTitulo htmlFor="confirmpassword" tag='h6' FontSize='headline'>Confirmar Senha</BaseTitulo>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Digite novamente sua Senha' autoComplete='on' {...register('confirmpassword')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.confirmpassword?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo htmlFor="bio" tag='h6' FontSize='headline'>Bio</BaseTitulo>
                    <input type="text" name="bio" id="bio" placeholder='Fale sobre você' {...register('bio')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.bio?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo htmlFor="contact" tag='h6' FontSize='headline'>Contato</BaseTitulo>
                    <input type="text" name="contact" id="contact" placeholder='Opção de Contato' {...register('contact')} />
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.contact?.message}</BaseTitulo>
                </div>
                <div>
                    <BaseTitulo htmlFor="course_module" tag='h6' FontSize='headline'>Selecionar módulo</BaseTitulo>
                    <select name="course_module" id="course_module" {...register('course_module')}>
                        <option value="">Selecione o Modulo</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>

                        </select>
                    <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.course_module?.message}</BaseTitulo>
                </div>
                <Buttons type='submit' ButtonColor='rose'>Cadastrar</Buttons>
            </Form>
        </Section>
        </Main>
    )
}   


export default RegisterPage