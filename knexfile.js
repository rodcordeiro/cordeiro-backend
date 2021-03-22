// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite3'
    },
    migrations:{
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds/'
    },
    ssl: { rejectUnauthorized: false },
    useNullAsDefault: true
  }

};