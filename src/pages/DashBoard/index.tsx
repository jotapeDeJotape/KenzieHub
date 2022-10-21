import {Header,Main,BaseTitulo,Buttons,LinkStyled} from '../../components/Dashboard/style'

import Logo from '../../assets/Logo.svg' 

import {Navigate} from 'react-router-dom'
import { useContext} from 'react'


import TechList from '../../components/TechList'
import ModalTech from '../../components/modalTech'
import { UserContext } from '../../Contexts/userContext'
import { BsNodePlusFill } from 'react-icons/bs'
import { TechContext } from '../../Contexts/techContext'





function Dashboard(){
    
    const {OpenModal,setOpenModal,user} = useContext(UserContext)

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
                    <LinkStyled to='/' onClick={() => localStorage.clear()} >Sair</LinkStyled>
                </div>
                <div>
                    <BaseTitulo className='' tag='h1' FontSize='one'>Olá, {user.name}</BaseTitulo>
                    <BaseTitulo className='' tag='h6' FontSize='headlineBlack'>{user.course_module}</BaseTitulo>
                </div>
            </Header>
            <Main>
                <div>
                    <BaseTitulo className='' tag='h2' FontSize='two'>Tecnologias</BaseTitulo>
                    <Buttons onClick={() => setOpenModal(true)} ButtonColor='black'>+</Buttons>
                </div>
                <TechList/>
                {!OpenModal ? <></> : <ModalTech setOpenModal={setOpenModal} OpenModal={OpenModal} />}
            </Main>
            </>
            )}
        
        </>
    )
}


export default Dashboard