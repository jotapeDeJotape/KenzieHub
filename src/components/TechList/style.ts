import styled , {css} from "styled-components";
import { iFontSize } from "../FormRegister/style";
import { TextoBase } from "../typography/typography";




export const TechUl = styled.ul`
    width: 250px;
    height: 500px;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: 8px;
    gap: 20px;
    overflow-x: auto;
    @media (min-width: 768px){
        width: 80%;
    }

`
export const TechItems = styled.li`
    display: flex;
    width: 92%;
    height: 40px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-4);
    border-radius: 8px;
    animation: appearLi 0.8s  ease-in-out;
    cursor: pointer;

    :hover{
        transform: scale(1.025);
        transition: 1.5s;
        filter: brightness(90%);
        background-color: var(--color-primary);
        
    }

    h6{
        margin-top: 0;
        font-weight: 400;
    }
    svg{
        color: var(--grey-0);
        cursor: pointer;
        :hover{
            transform: scale(1.5);
            transition: 1s;
        }
    }
    span{
        width: 200px;
        height: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: flex-end;

        :hover{
            color: var(--grey-0);
        }
    }

    @media (min-width: 768px){
        width: 95%;
    }

    @keyframes appearLi{
        0%{
            transform: translateX(-300px);
        }
        100%{
            transform: translateX(0px);
        }
    }

`
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