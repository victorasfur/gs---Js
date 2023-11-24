import styled from "styled-components";


export const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 1rem 0 3rem;
        width: 80%;
        margin: auto;
        grid-template-areas: 
        ". fotoProduto fotoProduto fotoProduto fotoProduto fotoProduto . duvidas duvidas duvidas duvidas ."
        ". fotoProduto fotoProduto fotoProduto fotoProduto fotoProduto . duvidas duvidas duvidas duvidas ."
        ". fotoProduto fotoProduto fotoProduto fotoProduto fotoProduto . duvidas duvidas duvidas duvidas ."
        ". descricao descricao descricao descricao descricao  . duvidas duvidas duvidas duvidas ."
        ". vantagens vantagens vantagens vantagens vantagens vantagens vantagens vantagens vantagens vantagens ."
        ;

        gap: 0.8rem;

        @media (max-width:768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "fotoProduto fotoProduto"
            "duvidas duvidas"
            "descricao descricao"
            "vantagens vantagens"
            ;
            row-gap: 2rem;
        }

`

export const ContainerFoto = styled.section`
    grid-area: fotoProduto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%;
    width: 60%;
    background-color: transparent;
`


export const DescricaoContainer = styled.section`
            grid-area: descricao;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            gap: 1rem;


            @media (max-width:768px) {
                flex-direction: column;
            }
`

export const TextoDescricao = styled.div`
            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: flex-end;
            width: 55%; 
            background-color: #C71585;
            border-radius: 1em;
            padding: 1em;

            button {
                width: 60%;
                padding: 0.7em;
                background-color: white;
                border:none;
                outline: none;
                border-radius: 45px;
                font-size: 14px;
            }

            p {
                font-size: 1em;
            }
`

export const Questao1 = styled.div`
                    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
                    background-color: #C71835;
                    border-radius: 10px;
                    h1 {padding: 5px;

                    }
                    p {
                        padding:5px;
                        font-size: 0.8em;
                    }


`

export const Questao2 = styled.div`
                    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
                    background-color: #C71585;
                    border-radius: 10px;
                    h1 {padding: 5px;

                    }
                    p {
                        padding:5px;
                        font-size: 0.8em;
                    }


`

export const Questao3 = styled.div`
                    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
                    background-color: #600040;
                    border-radius: 10px;
                    h1 {padding: 5px;

                    }
                    p {
                        padding:5px;
                        font-size: 0.8em;
                    }


`



export const DuvidasContainer = styled.section`
    grid-area: duvidas;
`

export const DuvidasSubContainer = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            color: white;

            p {
                font-size: 0.9em;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 1em;
            }
`

export const VantagensContainer = styled.section`
    grid-area: vantagens;
`

export const VantagensCards = styled.div`
            display: flex;
            flex-direction: row;
            gap: 3rem;

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                    
                p {
                    font-size: 1em;
                }

                img {
                    width: 150px;
                }
            }

            @media (max-width:768px) {
                flex-direction: column;
                div {
                    flex-direction: column;
                    align-items: center;
                }
            }
`