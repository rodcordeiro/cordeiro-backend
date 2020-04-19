const unirest = require('unirest');
const discord = require('../Services/discord');

module.exports={
    async createRepo(req,res){
        unirest
        .post('https://api.github.com/user/repos')
        .headers({
            "content-type": "application/json",
            "authorization": "token ae67855cdb4b88783423ad3c4366fe88721aea86",
            "user-agent":"RodCordeiro"
          })
        .type('json')
        .send(req.body)
        .then((response) => {

        var message = `**Repository:** ${response.body.name},\n**Description:** ${req.body.description},\n**ssh_url:** ${response.body.ssh_url},\n**clone_url:** ${response.body.clone_url},\n**svn_url:** ${response.body.svn_url}`
            
        if (response.statusCode ==201){
            discord.sendMessage(message)
        }
        return res.status(response.statusCode).json(response.body)
        })
    },
    async deleteRepo(req,res){
        var user = req.params.user;
        var repo = req.params.repo;

        unirest
        .delete(`https://api.github.com/repos/${user}/${repo}`)
        .headers({
            "content-type": "application/json",
            "authorization": "token ae67855cdb4b88783423ad3c4366fe88721aea86",
            "user-agent":"RodCordeiro"
          })
        .type('json')
        .then((response) => {

            var message = `Deleted repository ${repo}`
                
            if (response.statusCode ==204){
                discord.sendMessage(message)
            }
            return res.status(response.statusCode).json(response.body)
            })
        }
}