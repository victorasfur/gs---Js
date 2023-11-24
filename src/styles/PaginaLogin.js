import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CaixaLogin = styled.div`
        background-color: #C71585;
        padding: 30px 40px ;
        border-radius: 30px;
`

export const FormularioLogin = styled.form`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
`

export const Inputs = styled.div`
        
        width: 60%;

        input {
            background: transparent;
            border: none;
            outline: none;
            border: 1px solid pink;
            color: #ffffff;
            padding: 20px 45px 20px 20px;
        }

        input::placeholder {
                    color:#ffffff;         
        }

`

export const BotaoEntrar = styled.button`
        width: 60%;
        height: 45px;
        background-color: pink;
        border:none;
        outline: none;
        font-size: 16px;
`
