// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://ybjcwusmyqtdcw:ae58fd014a82f7f6a04699c0f1f9a5a76d1bf961d2cad33be21a4a9738f106fb@ec2-52-6-143-153.compute-1.amazonaws.com:5432/dao504m8mr8965',
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
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
    connection: 'postgres://rpmqgarivkcudr:31e29bf3f3e681005f292d20b9b38dcebedf362470082bc2023dd9e23b056894@ec2-34-200-116-132.compute-1.amazonaws.com:5432/dfvi0hjacijsbd',
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds/dev'
    },
    useNullAsDefault: true
  },

};
