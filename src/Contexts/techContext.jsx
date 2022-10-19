import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useState } from "react";
import { UserContext } from "./userContext";


export const TechContext = createContext({})


function TechProvider({children}){
    
    const [TechList, setTechList] = useState([])

    const [loadingTech, setLoadingTech] = useState(true)

    const [userDash,setUserDash] = useState(null)
    

    async function createTech(content){
        const Token = localStorage.getItem('@Token')
        if(Token){
            
            api.post(`/users/techs`, {...content}, {
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

    async function deleteTech(techID){
        const Token = localStorage.getItem('@Token')
        if(Token){
            api.delete(`/users/techs/${techID}`, {
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
                        const {data} = await api.get('/profile')
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