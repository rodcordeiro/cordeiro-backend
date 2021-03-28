const api = require('../Services/api').devtoApi
const discord = require('../Services/discord');

module.exports = {
  async createPost(req, res){
  await api.post('articles',req.body,{'Content-Type': 'application/json', 'api-key': req.headers.key})
    .then((response)=>{
      return res.status(response.status).json(response.data);
    })
    .catch(function (error) {
      return res.status(500).json(error);
    });
  }
};
