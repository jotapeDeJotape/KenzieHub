import {Header,Buttons,BaseTitulo,Loading} from '../../components/Dashboard/style'
import Logo from '../../assets/Logo.svg'
import {useNavigate} from 'react-router-dom'
import { api } from '../../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'

function Dashboard(){
    const token = localStorage.getItem('@Token')
    const [nome,setNome] = useState('')
    const [modulo,setModulo] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    function navigateLogin(){
        navigate('/')
    }
    function getUser(){
        api.get('/profile', {...token})
        .then(({data}) => {
            setTimeout(() => {
                setNome(`${data.name}`)
                setModulo(`${data.course_module}`)
                setLoading(false)
            },800)
            
        })
        .catch(error => {
            toast.error('Ocorreu algum erro na aplicação. Retornando a pagina de login....', {
                theme:'dark',
                autoClose: 2500
            })
            navigate('/')
        })
    }
    getUser()
    return(
        <>
        {loading ? (
            <Loading>
                <div>
                </div>
            </Loading>
        ) : (
            <Header>
            <div>
                <img src={Logo} alt="ImagemKenzieHub" />
                <Buttons onClick={navigateLogin} ButtonColor='black'>Sair</Buttons>
            </div>
            <div>
                <BaseTitulo tag='h1' FontSize='one'>Olá, {nome}</BaseTitulo>
                <BaseTitulo tag='h6' FontSize='headlineBlack'>{modulo}</BaseTitulo>
            </div>

        </Header>
        )}
        
        </>
    )
}


export default Dashboard