import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useState } from "react";
import { iUser, UserContext } from "./userContext";

interface iTechContextProps{
    children: React.ReactNode
}

interface iTechContextProviders{
    createTech: (data : iCreateTech) => void,
    deleteTech: (id : string) => void,
    loadingTech: boolean,
    setLoadingTech: Function,
    setTechList: Function,
    TechList: iUserTechs[]
}

export interface iCreateTech{
    data: string,
}

export interface iUserTechs{
    id: string,
    title:string,
    status:string,
}


  



export const TechContext = createContext({} as iTechContextProviders )


function TechProvider({children} : iTechContextProps){
    
    const [TechList, setTechList] = useState<iUserTechs[]>([] as iUserTechs[])

    const [loadingTech, setLoadingTech] = useState(true)


    async function createTech(data: iCreateTech){
        const Token = localStorage.getItem('@Token')
        if(Token){
            
            api.post(`/users/techs`, {...data}, {
                headers: {Authorization: `Bearer ${Token}`}
            })
            .then(({data}) => {
                toast.success('Tecnologia criada com sucesso!', {
                    theme:"dark",
                    autoClose: 2000
                })
                
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.response.data.message}`, {
                    theme: 'dark',
                    autoClose: 2000
                })
            })
            setLoadingTech(false)
        }
    }

    async function deleteTech(id : string){
        const Token = localStorage.getItem('@Token')
        if(Token){
            api.delete(`/users/techs/${id}`, {
                headers: {Authorization: `Bearer ${Token}`}
            })
            .then(response => {
                toast.success('Tecnologia apagada com sucesso!', {
                    theme:'dark',
                    autoClose: 2000
                })
            })
            .catch(error => {
                toast.error(`${error.response.data.message}`, {
                    theme: 'dark',
                    autoClose: 2000
                })
            })
            setLoadingTech(false)
        }
    }

    useEffect(() => {
           async function LoadTechs(){
                const Token = localStorage.getItem('@Token')
                
                if(Token){
                    try{
                        api.defaults.headers.Authorization = `Bearer ${Token}`
                        const {data} = await api.get<iUser>('/profile')
                        setTechList(data.techs)
                        

                    }catch(error){
                        console.log(error)
                    }
                }
                setLoadingTech(false)
            }
            LoadTechs()
    },[TechList])

    return (
        <TechContext.Provider value={{createTech,deleteTech,TechList,loadingTech,setLoadingTech,setTechList}}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider