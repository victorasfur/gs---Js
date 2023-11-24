import React from "react";

import { Container, ContainerFoto, DescricaoContainer, DuvidasContainer, DuvidasSubContainer, Questao1, Questao2, Questao3, TextoDescricao, VantagensCards, VantagensContainer } from "../styles/PaginaInicial";

import FotoPrincipal from '../imagens/Group 1.png';

import MonitoramentoPersonalizadoFoto from '../imagens/4.png'
import RemotoFoto from '../imagens/5.png'
import PrevencaoFoto from '../imagens/6.png'

export default function PaginaInicial () {
    return (
        <Container>
            <ContainerFoto>
                <img src={FotoPrincipal} alt="foto principal"/>
            </ContainerFoto>
            <DescricaoContainer>
                <div>
                    <h1>HeartBeat Connection</h1>
                </div>
                <TextoDescricao>
                <p>
                    Desenvolvendo um dispositivo para monitorar frequência cardíaca, glicose e atividades físicas, fornecendo dados detalhados para incentivar hábitos saudáveis e intervenção precoce.
                </p>
                <button>
                    Mais informações
                </button>
                </TextoDescricao>
            </DescricaoContainer>
            <DuvidasContainer>
                <DuvidasSubContainer>
                <Questao1>
                    <h1>O que é a solução:</h1>
                    <p>
                        Um sistema integrado de monitoramento de saúde, composto por um dispositivo wearable e um aplicativo móvel.
                    </p>
                </Questao1>
                <Questao2>
                    <h1>O que ela fará : </h1>
                    <p>
                        Coletará dados em tempo real, incluindo frequência cardíaca, níveis de glicose e atividades físicas, permitindo o monitoramento remoto da saúde do usuário.
                    </p>
                </Questao2>
                <Questao3>
                    <h1>Como funcionará :</h1>
                    <p>
                        O dispositivo enviará dados via Bluetooth para o aplicativo, que analisará e apresentará informações de forma acessível, possibilitando intervenção remota e colaboração profissional quando necessário.
                    </p>
                </Questao3>
                </DuvidasSubContainer>
            </DuvidasContainer>
            <VantagensContainer>
                <h1>Vantagens</h1>
                 <VantagensCards>
                    <div>
                        <img src={MonitoramentoPersonalizadoFoto} alt="robot"/>
                        <p>
                        Monitoramento personalizado da Saúde
                    </p>
                    </div>
                    <div>
                        <img src={RemotoFoto} alt="heart"/>
                        <p>
                        Acesso Remoto e Conveniencia 
                    </p>
                    </div>
                    <div>
                        <img src={PrevencaoFoto} alt="bell"/>
                        <p>
                        Prevenção e intervenção Proativa 
                    </p>
                    </div>
                 </VantagensCards>
            </VantagensContainer>
        </Container>
    )
}