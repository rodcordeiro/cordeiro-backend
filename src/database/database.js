const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(process.env.NODE_ENV);

module.exports = connection;