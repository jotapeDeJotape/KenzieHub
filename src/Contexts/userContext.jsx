import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useState } from "react";
import { TechContext } from "./techContext";

export const UserContext = createContext({})

export function UserProvider({children}){
    
    

    const navigate = useNavigate()

    const [user,setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const {setTechList} = useContext(TechContext)

    const [OpenModal, setOpenModal] = useState(false)

  async  function logarApi(data){
        try{
            const response = await api.post('/sessions', data)
            console.log(response)
            const {user: userResponse, token} = response.data
            console.log(userResponse)
            setUser(userResponse)
            setTechList(userResponse.techs)
            localStorage.setItem('@Token', token)
            toast.success('Usuario Logado com sucesso!', {
                theme:'dark',
                autoClose: 2500,
            })
            navigate('/dashboard', {replace: true})
        } catch (error){
            toast.error(`${error.response.data.message}`, {
                theme:'dark',
                autoClose: 1500,
            })
        }
    }

    function NavigateRegister(){
        navigate('/register')
    }

    function NavigateLogin(){
        navigate('/')
    }
    function navigateLogOut(){
        localStorage.clear()
        navigate('/')
    }
    function setRegister(data){
        api.post('/users', {...data})
        .then(response => {
            toast.success('Cadastro Feito com sucesso!', {
                theme: 'dark',
                autoClose: 1500,
            })
            
                navigate('/')
            
        })
        .catch(error => {
            toast.error(`${error.response.data.message}`, {
                theme: 'dark'
            })
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('@Token')
        function IsLogged(){
            if(token){
                navigate('/dashboard')
            }
        }
        IsLogged()
    }, [])

    useEffect(() => {
        async function loadUser(){
            const token = localStorage.getItem('@Token')
            if(token){
                try{
                    api.defaults.headers.authorization = `Bearer ${token}`
                   const {data} = await api.get('/profile')
                    setUser(`${data}`)
                    
                }catch(error){
                    console.log(error.response.data.message)
                    toast.error(`${error.response.data.message}`, {
                        theme:'dark',
                        autoClose: 2500
                    })  
                    navigate('/')  
                }
                setLoading(false)
            }
            
        }
        
        loadUser()
    }, [])



    
    return(
        <UserContext.Provider value={{logarApi, NavigateRegister,setRegister,NavigateLogin,OpenModal,setOpenModal,user,loading,setLoading,navigateLogOut,setUser}}>
            {children}
        </UserContext.Provider>
    )
}