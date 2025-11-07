function registerUser(req, res) {
    try {
        const { name, age } = req.body;

        if (!name || !age) return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });

        const newUser = { name, age };

        res.status(201).json({ message: `Usuário ${newUser.name} com idade de ${newUser.age} anos, foi cadastrado com sucesso!` });
    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ message: 'Erro interno!' });
    }
}

export { registerUser };
