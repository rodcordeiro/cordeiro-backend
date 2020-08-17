const connection = require("../Services/connection");
const generateUniqueId = require("../Services/generateUniqueId");

module.exports = {
    index (req, res) {
        connection.query('SELECT * FROM posts', (error, results) => {
            if (error) {
              res.status(error.statusCode).send(error.message);
            }
            return res.status(200).json(results.rows)
          })
    },
    addPost (req,res){
      const id = generateUniqueId();
      const {title,body,image,tags} = req.body
      
      connection.query(
        'INSERT INTO posts (id,title,body,image,tags) VALUES ($1,$2,$3,$4,$5)',
        [id,title,body,image,tags],
        (error) => {
          if (error) {
           res.status(error.statusCode).send(error.message);
           throw error;
          }
          return res.status(201).json({status: 'success', project: {
            id:id,
            title:title,
            body:body,
            image:image,
            tags:tags
        }
          })
        }
      )
    },
    delPost (req, res) {
      const {id} = req.body;
      connection.query(`DELETE FROM posts WHERE id like '${id}';`, (error, results) => {
        if (error) {
          res.status(error.statusCode).send(error.message);
          throw error;
         }
         return res.status(204).send()
        })
  },
  
}