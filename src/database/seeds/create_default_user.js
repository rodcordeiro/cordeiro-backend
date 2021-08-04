
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: "0001",
          username:"admin",
          email:"admin@rodcordeiro.com",
          password:"admin",
          created_at:knex.fn.now(),
          updated_at:knex.fn.now()
        },
        
      ]);
    });
};
