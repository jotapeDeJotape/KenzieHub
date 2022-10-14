import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { TechItems,TechUl,BaseTitulo } from './style'
import {BsTrash} from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { TechContext } from '../../Contexts/techContext'
import { UserContext } from '../../Contexts/userContext'


function TechList(){
    const {TechList,deleteTech,loadingTech} = useContext(TechContext)
    const {user} = useContext(UserContext)
    
    if(loadingTech){
        return null
    }

    return(
        <>
            <TechUl>
                {!TechList.length ?(
                    <BaseTitulo tag='h2' FontSize='one'>Usuario não possui nenhuma Tecnologia</BaseTitulo>
                ): ( TechList.map(element => {
                    return (
                        <TechItems key={element.id}>
                            <BaseTitulo tag='h3' FontSize='one'>{element.title}</BaseTitulo>
                            <span>
                                <BaseTitulo tag='h6' FontSize='headlineBlack'>{element.status}</BaseTitulo>
                                <BsTrash onClick={() => deleteTech(element.id)}></BsTrash>
                            </span>
                        </TechItems>
                    )
                }))}
            </TechUl>
        </>
    )
}

export default TechList