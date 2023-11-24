import axios from 'axios';

const url = 'http://localhost:3000/usuarios';

export const verificarUsuario = async (email, senha) => {
    const resultado = await axios.get(`${url}?email=${email}&senha=${senha}`);
    
    if (!resultado) {
        throw new Error("Usuário não foi encontrado");
    } else {
        return resultado
    }
};