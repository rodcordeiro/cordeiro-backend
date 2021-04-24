import knex from "knex";
import configuration from "../../knexfile";

const config = process.env.NODE_ENV == 'production' ? configuration.production : configuration.development;
const connection = knex(config);

export default connection;