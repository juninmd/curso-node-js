(() => {
    console.log('exemplo de promise');

    getLista(5)
        .then((result) => {
            return console.log(result);
        })
        .catch((err) => {
            return console.error(err);
        })

})();

function getLista(qtd) {
    return new Promise((resolve, reject) => {
        const lista = [];

        for (let i = 0; i < qtd; i++) {
            lista.push(i);
        }

        if (lista.length > 5) {
            return reject(new Error('limite excedido de lista'));
        }

        return resolve(lista);
    })
}