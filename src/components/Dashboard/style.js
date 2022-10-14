import styled, {css} from "styled-components";
import { TextoBase } from "../typography/typography";


export const Header = styled.header`
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;

    img{
        width: 115px;
    }
    div{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100px;
        align-items: center;
        border-bottom: 2px solid var(--grey-3);
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start ;
        width: 100%;
        border-bottom: 2px solid var(--grey-3);
        padding: 16px;

        h1{
            font-size: 24px;
        }
        
        @media (min-width: 768px){
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content:space-around;

                h6{
                    margin-top: 0;
                }
        }
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
            border-color: var(--color-primary)  transparent var(--color-primary) transparent;
            animation: load 2s linear infinite;
                
                @keyframes load {
                0% {
                    transform: rotate(0deg);
                    filter: hue-rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                    filter: hue-rotate(360deg);
                }
                
    }   
        }
`


export const Buttons = styled.button`
    width: 90%;
    height: 40px;
    
    border: none;
    border-radius: 4px;
        
    margin-top: 20px;

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
        }else if(ButtonColor === 'black'){
            return css`
                background-color: var(--grey-3);
                color: var(--grey-0);
                width: 100px;
                height: 40px;
                margin-top: 0;
            `
        }else if(ButtonColor === 'disabled'){
            return css`
                background-color: var(--color-primary-negative);
                color: var(--grey-0);
            `
        }
    }}

    :hover{
        filter:brightness(105%);
        transition: 0.5s;
        transform: scale(1.005)
    }


    @media (min-width: 768px){
        font-size: 18px;
        font-weight: 100;
        height: 50px
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
export const Main = styled.main`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
    div{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px auto 20px auto;
        
        button{
            width: 40px;
            height: 40px;
            font-size: 24px;
        }
    }
`
