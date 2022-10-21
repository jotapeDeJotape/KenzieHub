import { createContext, ReactNode, useContext, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useState } from "react";
import { iUserTechs, TechContext } from "./techContext";
import { iUserRegister } from "../pages/Register";
import { iUserLogin } from "../pages/Login";
import axios from "axios";





interface iUserContextProvider{
    logarApi: (data: iUserLogin) => void,
    setRegister: (data : iUserRegister ) => void,
    loading: boolean,
    user: iUser | null, //PODE SER MOTIVO DE ERRO!
    OpenModal: boolean
    setOpenModal: Function
    setLoading: Function
    setUser: Function
    navigate: NavigateFunction
}

interface iUserContextProps{
    children: ReactNode
}

export interface iUser{
    id: string,
    email:string,
    name:string,
    bio:string,
    contact:string,
    course_module: "Primeiro módulo (Introdução ao Frontend)"
                    | "Segundo módulo (Frontend Avançado)"
                    | "Terceiro módulo (Introdução ao Backend)"
                    | "Quarto módulo (Backend Avançado)"
    techs: iUserTechs[]               

}

interface iLoginAdd{
    token: string,
    user: iUser
}


export const UserContext = createContext({} as iUserContextProvider)

export function UserProvider({children} : iUserContextProps){
    
    const navigate = useNavigate()

    const [user,setUser] = useState<iUser | null>(null)

    const [loading, setLoading] = useState(true)

    const {setTechList} = useContext(TechContext)

    const [OpenModal, setOpenModal] = useState(false)

  async  function logarApi(data : iUserLogin){
        try{
            const response = await api.post<iLoginAdd>('/sessions', data)
            const {user: userResponse, token} = response.data
            
            setUser(userResponse)
            setTechList(userResponse.techs)
            localStorage.setItem('@Token', token)
            toast.success('Usuario Logado com sucesso!', {
                theme:'dark',
                autoClose: 2500,
            })
            console.log(user)
            // const toNavigate = location.state?.from?.pathname || 'dashboard' 
            navigate('/dashboard', {replace: true})
        } catch (error){
            if(axios.isAxiosError(error))
            toast.error(`${error.message}`, {
                theme:'dark',
                autoClose: 1500,
            })
        }
    }

    function setRegister(data : iUserRegister ){
        api.post('/users', {...data})
        .then(response => {
            toast.success('Cadastro Feito com sucesso!', {
                theme: 'dark',
                autoClose: 1500,
            })
            
                navigate('/')
            
        })
        .catch(error => {
            if(axios.isAxiosError(error))
            toast.error(`${error.message}`, {
                theme:'dark',
                autoClose: 1500,
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
                   const {data} = await api.get<iUser>('/profile')
                    setUser(data)
                    
                }catch(error){
                    if(axios.isAxiosError(error))
                        toast.error(`${error.message}`, {
                        theme:'dark',
                        autoClose: 1500,
                        }) 
                    navigate('/')  
                }
                setLoading(false)
            }
            
        }
        
        loadUser()
    }, [])

    return(
        <UserContext.Provider value={{logarApi,setRegister,OpenModal,setOpenModal,user,loading,setLoading,setUser,navigate}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    const context = useContext(UserContext)

    return context
}