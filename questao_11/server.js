import { createServer } from 'http';

const host = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Olá Mundo!');
});

server.listen(port, host, () => console.log(`Servidor rodando: http://${host}:${port}/`));
