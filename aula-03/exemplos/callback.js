(() => {
    console.log('exemplo de callback');

    getLista(5, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    })

})();

function getLista(qtd, callback) {
    const lista = [];

    for (let i = 0; i < qtd; i++) {
        lista.push(i);
    }

    if (lista.length > 5) {
        return callback(new Error('limite excedido de lista'), null);
    }

    return callback(null, lista);
}