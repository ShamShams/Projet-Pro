const { Client } = require('pg');

const { db } = require('../config');

const client = new Client({
    host: db.host,
    port: db.port,
    database: db.database,
    user: db.user,
    password: db.password
});

(async () => {
    await client.connect();
})();

module.exports = {
    run :  async (query) => {
        let response = await client.query(query);
        return response;
    }
};