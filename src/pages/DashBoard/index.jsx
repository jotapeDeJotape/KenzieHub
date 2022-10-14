import {Header,Loading,Main,BaseTitulo,Buttons} from '../../components/Dashboard/style'

import Logo from '../../assets/Logo.svg'

import {Link, Navigate, useNavigate} from 'react-router-dom'

import { api } from '../../services/api'

import { useContext, useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import TechList from '../../components/TechList'
import ModalTech from '../../components/modalTech'
import { UserContext, UserProvider } from '../../Contexts/userContext'
import { BsNodePlusFill } from 'react-icons/bs'




function Dashboard(){
    
    const {OpenModal,setOpenModal,user,loading,navigateLogOut} = useContext(UserContext)




    return(
        <>
            {!user  ? (
                <>
                <Navigate to='/' replace/>
                </>
            ) :(
                <>              
                <Header>
                <div>
                    <img src={Logo} alt="ImagemKenzieHub" />
                    <Buttons onClick={navigateLogOut} ButtonColor='black'>Sair</Buttons>
                </div>
                <div>
                    <BaseTitulo tag='h1' FontSize='one'>Olá, {user.name}</BaseTitulo>
                    <BaseTitulo tag='h6' FontSize='headlineBlack'>{user.course_module}</BaseTitulo>
                </div>
            </Header>
            <Main>
                <div>
                    <BaseTitulo tag='h2' FontSize='two'>Tecnologias</BaseTitulo>
                    <Buttons onClick={() => setOpenModal(true)} ButtonColor='black'>+</Buttons>
                </div>
                <TechList/>
                {!OpenModal ? <></> : <ModalTech setOpenModal={setOpenModal} openModal={OpenModal} />}
            </Main>
            </>
            )}
        
        </>
    )
}


export default Dashboard