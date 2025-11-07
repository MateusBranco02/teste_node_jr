let data = [
    { id: 1, name: 'João Alberto', age: 45 },
    { id: 2, name: 'Ana Júlia', age: 53 },
];

function getAllUsers(req, res) {
    try {
        res.status(200).json({ data });
    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ message: 'Erro interno!' });
    }
}

function getUserId(req, res) {
    try {
        const id = Number(req.params.id);

        const user = data.find((user) => user.id === id);
        res.status(200).json({ response: user });
    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ message: 'Erro interno!' });
    }

}

export { getAllUsers, getUserId };
