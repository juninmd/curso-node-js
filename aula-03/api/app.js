const app = require("express")();
const consign = require('consign');
const config = require('./config');

consign({
    verbose: false
})
    .include('kernel')
    .then('controller')
    .into(app);

app.listen(config.api.port, () => {
    console.log(`[${config.api.name}] - Ativo :D | ${config.api.url}:${config.api.port}`);
});

module.exports = app;