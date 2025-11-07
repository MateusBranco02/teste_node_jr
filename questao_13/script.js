import { readFile } from 'fs/promises';

async function extrairConteudoTxt() {
    try {
        const data = await readFile('./data.txt', { encoding: 'utf-8' });
        console.log('Conteúdo do arquivo .txt:\n', data);
    } catch (error) {
        console.error('Erro na leitura do arquivo, tente novamente:', error);
    }
}

extrairConteudoTxt();
