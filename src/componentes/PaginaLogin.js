import React, { useState } from "react";
import Logo from '../imagens/image 1.png';
import { BotaoEntrar, CaixaLogin, Container, FormularioLogin, Inputs } from "../styles/PaginaLogin";
import { useNavigate } from "react-router-dom";
import { verificarUsuario } from "../api";

export default function PaginaLogin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const validarEmailSenha = async (event) => {
        event.preventDefault();

        try {
            const resultado = await verificarUsuario(email, senha);
            if (resultado.data.length > 0) {
                sessionStorage.setItem("email", resultado.data[0].email)
                sessionStorage.setItem("nome", resultado.data[0].nome)
                navigate('/inicio');
                window.location.reload(false);
            } else {
                alert("Usuário não foi encontrado");
            }
        } catch (error) {
            alert("Erro no login");
        }
    }

    return (
        <Container>
            <CaixaLogin>
                <FormularioLogin onSubmit={validarEmailSenha}>
                    <img src={Logo} alt="logo" />
                    <Inputs>
                        <input type="text" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                    </Inputs>
                    <Inputs>
                        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </Inputs>
                    <BotaoEntrar type="submit">
                        Entrar
                    </BotaoEntrar>
                </FormularioLogin>
            </CaixaLogin>
        </Container>
    )
}


