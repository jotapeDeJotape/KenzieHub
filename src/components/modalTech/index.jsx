import { useContext, useEffect, useRef, useState } from "react"
import { ModalSec,InputSec,BaseTitulo, Buttons,TextSec,BackSec } from "./style"

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { UserContext } from '../../Contexts/userContext';
import { TechContext } from "../../Contexts/techContext";

function ModalTech({setOpenModal}){

    const {createTech} = useContext(TechContext)

    const scheme = yup.object().shape({
        title: yup.string().required('Um nome a tecnologia deve ser dado'),
        status: yup.string().required('Seu nível de experência deve ser selecionado')
        
    })

    const {register,handleSubmit, formState: {errors}, setError} = useForm({
        resolver: yupResolver(scheme)
    })
    return(
        <>
        <BackSec>
        </BackSec>
            <ModalSec>
                <TextSec>
                    <BaseTitulo tag='h4' FontSize='three'>Cadastrar Tecnologia</BaseTitulo>
                    <Buttons onClick={() => setOpenModal(false)} ButtonColor='black'>X</Buttons>
                </TextSec>
                <InputSec onSubmit={handleSubmit(createTech)}>
                        <div>
                            <BaseTitulo htmlFor="title" tag='h5' FontSize='three'>Nome</BaseTitulo>
                            <input type="text" name="title" placeholder="Insira a Tecnologia" {...register('title')} />
                            <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.title?.message}</BaseTitulo>
                        </div>
                        <div>
                            <BaseTitulo htmlFor="status" tag='h5' FontSize='three'>Selecionar Status</BaseTitulo>
                            <select name="status" {...register('status')}>
                                <option value="">Selecionar Nível</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <BaseTitulo tag='h5' FontSize='headlineBlack'>{errors.status?.message}</BaseTitulo>
                        </div>
                        <Buttons type="submit"  ButtonColor='rose'>Cadastrar Tecnologia</Buttons>
                </InputSec>
            </ModalSec>
        </>
    )
}


export default ModalTech