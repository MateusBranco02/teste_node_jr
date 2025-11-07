import axios from 'axios';

async function getLogin() {
    try {
        const url = 'https://api.github.com/users/octocat';
        const response = await axios.get(url);

        console.log('Usuário logado: ', response.data.login);
    } catch (error) {
        console.error('Erro na comunicação com a API: ', error);
    }
}

getLogin();
