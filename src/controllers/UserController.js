const connection = require("../Services/connection");
const generateUniqueId = require("../Services/generateUniqueId");
const cript = require('../Services/crypto');

module.exports = {
    async store(req,res){
        const id = generateUniqueId();
        const { email, password } = req.body
        
        let senha = cript(senha);

        connection.query(
          'INSERT INTO users (id,email, password) VALUES ($1,$2,$3,$4,$5)',
          [id,email,senha],
          (error) => {
            if (error) {
             res.status(error.statusCode).send(error.message);
             throw error;
            }
            return res.status(201).json({
                id:id
            })
          })
      },
}