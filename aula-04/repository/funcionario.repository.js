const config = require('../config');
const mysql = require('jano-mysql')(config.mysql);

module.exports = {
    insert: (body) => {
        return mysql.executeObject("INSERT INTO funcionario SET ?", body);
    },
    update: (id, body) => {
        return mysql.executeObject(`UPDATE funcionario SET ? WHERE id = ${id}`, body);
    },
    getById: (id) => {
        return mysql.executeString(`SELECT * from funcionario where id = ${id}`);
    },
    getAll: (filter) => {
        let query = `SELECT * from funcionario`;
        if (filter.nome) {
            query += ` where nome = '${filter.nome}'`;
        }
        if (filter.nome && filter.cargo) {
            query += ` and cargo like '%${filter.cargo}%'`;
        }

        console.log(query);
        return mysql.executeString(query);
    },
    deleteById: (id) => {
        return mysql.executeString(`DELETE from funcionario where id = ${id} `);
    }
}