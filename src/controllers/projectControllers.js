const connection = require("../Services/connection");
const generateUniqueId = require("../Services/generateUniqueId");

module.exports = {
    index (req, res) {
        connection.query('SELECT * FROM projects', (error, results) => {
            if (error) {
              res.status(error.statusCode).send(error.message);
            }
            return res.status(200).json(results.rows)
          })
    },
    addProject (req,res){
      const id = generateUniqueId();
      const {title,description,link,github,img} = req.body
      
      connection.query(
        'INSERT INTO projects (id,title,description,link,github,img) VALUES ($1,$2,$3,$4,$5,$6)',
        [id,title,description,link,github,img],
        (error) => {
          if (error) {
           res.status(error.statusCode).send(error.message);
           throw error;
          }
          return res.status(201).json({status: 'success', project: {
            id:id,
            title:title,
            description: description,
            link:link,
            github:github,
            img:img
            }
          })
        }
      )
    },
    delProject (req, res) {
      const {id} = req.body;
      connection.query(`DELETE FROM projects WHERE id like '${id}';`, (error, results) => {
        if (error) {
          res.status(error.statusCode).send(error.message);
          throw error;
         }
         return res.status(204).send()
        })
  },
  
}