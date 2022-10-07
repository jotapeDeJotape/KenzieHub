import styled, { css } from "styled-components";
import { TextoBase } from "../typography/typography";


export const Main = styled.main`
    display: flex;
    height: 100vh;
    flex-direction: column;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    img{
        width: 150px;
        height: 20px;

        @media (min-width: 768px) {
            height: 30px;
            width: 200px;
        }
    }
    @media (min-width: 768px) {
        margin-top: 150px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px;
    margin-top: 20px;

    background-color: var(--grey-3);
    border-radius: 4px;

    width: 260px;
    height: 400px;

    h1{
        margin: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 95%;
        margin-top: 22px;

        input{
            width: 95%;
            height: 20px;
            outline: none;

            background-color: var(--grey-2);
            border: none;
            border-radius: 4px;

            margin-top: 18px;
            padding: 8px;

            color: var(--grey-0);
            font-size: 16px;
            font-weight: 400;
            
            :hover{
                border: 2px solid var(--grey-0);
                transition: 0.3s;
            }


            @media (min-width: 768px){
                height: 30px;
            }
        }


    }
    @media (min-width: 768px) {
        width: 360px;
        height: 450px;
    }
    
`
export const BaseTitulo = styled(TextoBase)`
    ${({FontSize}) => {
        if(FontSize === 'one'){
            return css`
                font-size: 16px;
                font-weight: bold;
                color: var(--grey-0);
                @media (min-width: 768px) {
                    font-size: 22px;
                }
            `
        }else if(FontSize === 'two'){
            return css`
                font-size: 16px;
	            font-weight: bold;
                color: var(--grey-0);
                @media (min-width: 768px) {
                    font-size: 22px;
                }
            `
        }else if(FontSize === 'three'){
            return css`
                font-size: 16px;
	            font-weight: bold;
                color: var(--grey-0);
                @media (min-width: 768px) {
                    font-size: 22px;
                }
            `
        }else if(FontSize === 'headline'){
            return css`
                font-size: 12px;
	            font-weight: 400;
                color: var(--white);
                @media (min-width: 768px) {
                    font-size: 14px;
                }
            `
        }else if(FontSize === 'headlineBold'){
            return css`
                font-size: 12px;
	            font-weight: bold;
                color: var(--white);
                @media (min-width: 768px) {
                    font-size: 14px;
                }
            `
        }else if(FontSize === 'headlineItalic'){
            return css`
                font-size: 12px;
	            font-weight: lighter;
                color: var(--white);
                @media (min-width: 768px) {
                    font-size: 14px;
                }
            `
        }else if(FontSize === 'headlineBlack'){
            return css`
                font-size: 11px;
                font-weight: bold;
                color: var(--grey-1);
                margin-top: 20px;
                @media (min-width: 768px) {
                    font-size: 16px;
                }
            `
        }
        
    }}
`

export const Buttons = styled.button`
    width: 90%;
    height: 40px;
    
    border: none;
    border-radius: 4px;
        
    margin-top: 10px;

    background-color: var(--color-primary);
    text-align: center;

    ${({ButtonColor}) => {
        if(ButtonColor === 'rose' ){
            return css`
                background-color: var(--color-primary);
                color: var(--grey-0);
            

            `
        }else if(ButtonColor === 'gray'){
            return css`
                background-color: var(--grey-1);
                color: var(--grey-0);
                
            `
        }
    }}

    :hover{
        filter:brightness(110%);
        transition: 0.5s;
        transform: scale(1.005)
    }


    @media (min-width: 768px){
        font-size: 18px;
        font-weight: 100;
        height: 50px
    }
`

export const Loading = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        
        div{
            width: 130px;
            height: 130px;
            background-color: none;
            display: inline-block;
            content: " ";
            margin: 8px;
            border-radius: 50%;
            border: 6px solid #fff;
            border-color: var(--color-primary) transparent var(--color-primary) transparent;
            animation: load 1.8s linear infinite;
                
                @keyframes load {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }   
        }   
        }
`