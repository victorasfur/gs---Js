import React, { useEffect, useState } from "react";
import { StyledHeader } from "../styles/Header";

import Logo from '../imagens/image 1.png';


export default function Header() {
    const [email, setEmail] = useState();
    const [nome, setNome] = useState();

    
    useEffect(() => {
        setNome(sessionStorage.getItem("nome"))
        setEmail(sessionStorage.getItem("email"))
    }, [])

    const deslogar = () => {
        sessionStorage.clear()
        window.location.reload(false);
        const portUrl = window.location.port;
        const baseUrl = `${window.location.protocol}//${window.location.hostname}:${portUrl}/`;
        window.location.replace(baseUrl);
        alert("Deslogado com sucesso");
    }


    return (
        <StyledHeader>
             <img src={Logo} alt="logo" />
             {
                nome && email ?  
                <div>
                    <h3>
                        {nome} - {email}
                    </h3>
                    <button onClick={deslogar}>
                        Logout
                    </button>
                </div>
                :
                 <p>HBC Solution</p>
            }
        </StyledHeader>
    )
}
