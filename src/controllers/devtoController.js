const unirest = require('unirest');
const discord = require('../Services/discord');

module.exports = {
  async createPost(req, res){
    await unirest.post("https://dev.to/api/articles")
     .headers({
     "content-type": "application/json",
     "api-key": req.headers.key
     })
     .type("json")
     .send(req.body)
     .then((response) =>{
         if (response.statusCode ===201) discord.sendMessage('taverna_do_vader',`Hey guys, new post:\n **${response.body.title}**\n${response.body.description}\n\n${response.body.url}`);
         return res.status(response.statusCode).json(response.body)
     });
  }
}
