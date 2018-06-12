const config = require('../config');
const mysql = require('jano-mysql')(config.mysql);

module.exports = {
    insert: (body) => {
        return mysql.executeObject("INSERT INTO funcionario SET ?", body);
    },
    update: (body) => {
        return mysql.executeObject("INSERT INTO funcionario SET ?", body);
    },
}