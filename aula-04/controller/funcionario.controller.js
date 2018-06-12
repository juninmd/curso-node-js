const funcionarioRepository = require('../repository/funcionario.repository');

module.exports = (app) => {
    app.get('/funcionario/:id', async (req, res, next) => {
        try {
            const response = await funcionarioRepository.getById(req.params.id);
            return res.status(200).send(response.content);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

    app.get('/funcionario', async (req, res, next) => {
        try {
            const lista = await funcionarioRepository.getAll(req.query);
            return res.status(200).send(lista.content);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

    app.post('/funcionario', async (req, res, next) => {
        try {
            const response = await funcionarioRepository.insert(req.body);
            return res.status(201).send({ id: response.content });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

    app.put('/funcionario/:id', async (req, res, next) => {
        try {
            await funcionarioRepository.update(req.params.id, req.body);
            const response = await funcionarioRepository.getById(req.params.id);
            return res.status(200).send(response.content);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

    app.delete('/funcionario/:id', async (req, res, next) => {
        try {
            await funcionarioRepository.deleteById(req.params.id);
            return res.status(204).send({});
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

}