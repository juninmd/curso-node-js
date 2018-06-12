module.exports = (app) => {
    app.get('/health', (req, res, next) => {
        return res.status(200).send({ message: 'ok' });
    });
}