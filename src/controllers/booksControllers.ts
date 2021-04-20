import connection from '../database/connection';

module.exports = {
    async index (req, res) {
      await connection('books')
        .select('*')
        .orderBy('serie','asc')
        .then(response=>{
          return res.status(200).header('total-books',response.length).json(response)
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
    },
    async addBook (req,res){
      const { title,author,serie } = req.body
      await connection('books')
        .insert({ title,author,serie })
        .then(response=>{
          return res.status(201).json()
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
    },
    async getBook (req, res) {
      const {id} = req.params;
      await connection('books')
        .select('*')
        .where("id",id)
        .then(response=>{
          return res.status(200).json(response)
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
  },
  async delBook (req, res) {
    const {id} = req.params;
    await connection('books')
      .where("id",id)
      .delete()
      .then(response=>{
        return res.status(200).json(response)
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
},
  
}