const connection = require("../Services/connection");
const generateUniqueId = require("../Services/generateUniqueId");

  const addBook = (request, response) => {
    const {author, title} = request.body
  
    pool.query(
      'INSERT INTO books (author, title) VALUES ($1, $2)',
      [author, title],
      (error) => {
        if (error) {
          throw error
        }
        response.status(201).json({status: 'success', message: 'Book added.'})
      },
    )
  }
  
  
module.exports = {
    index (req, res) {
        connection.query('SELECT * FROM projects', (error, results) => {
            if (error) {
              res.status(error.statusCode).send(error.message);
            }
            res.status(200).json(results.rows)
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
          }
          response.status(201).json({status: 'success', project: {
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
    }
}