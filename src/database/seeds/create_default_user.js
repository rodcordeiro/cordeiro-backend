
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: "a294eee9-43e8-4ed8-9f14-40489a062c89",           
          username:"admin",
          email:"rodrigomendoncca@gmail.com",
          password:"9e313906b29f5ce17bcf4d24c632ba69d2220c046d48b8837faca00c221aa325",
          created_at:knex.fn.now(),
          updated_at:knex.fn.now()
        },
        
      ]);
    });
};
