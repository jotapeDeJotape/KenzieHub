import styled , {css} from "styled-components";
import { iButtonColorProps, iFontSize } from "../FormRegister/style";
import { TextoBase } from "../typography/typography";

export const BaseTitulo = styled(TextoBase)<iFontSize>`
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
export const Buttons = styled.button<iButtonColorProps>`
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

export const BackSec = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 200px;

    background-color: var(--grey-4);
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalSec = styled.section`
    position: absolute;
    flex-direction: column;
    top: 300px;
    width: 300px;
    height: 350px;
    background-color: var(--grey-4);
    border-radius: 4px;

    h4{
        font-size: 15px;
    }

    @media (min-width: 768px){
            width: 50%;
            height: 400px;
        }
`

export const TextSec = styled.section`
        background-color: var(--grey-2);
        border-radius: 4px;
        border-bottom: 2px solid var(--grey-0);
        padding: 6px;   
        width: 97%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        button{
            background: none;
            width: 30px;
            height: 30px;
        }

        
`

export const InputSec = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    

    div{
        width: 80%;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @media (min-width: 768px){
            height: 70px;
        }
        
        h5{
            font-size: 12px;
            margin: 5px;
        }


        input,select{
            width: 95%;
            height: 50px;
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
        select{
            width: 245px;
            height: 40px;

            @media (min-width: 768px){
                width: 99%;
                height: 80px;
            }
        }
    }
    button{
        width: 220px;
        font-size: 16px;
        height: 40px;
    }
`