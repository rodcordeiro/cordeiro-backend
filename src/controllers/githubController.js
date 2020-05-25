const unirest = require('unirest');
const discord = require('../Services/discord');
const generateUniqueId = require('../Services/generateUniqueId');

module.exports={
    async validateToken(req, res){
        await unirest
          .get('https://api.github.com/user/repos?visibility=public')
          .headers({
            "authorization": process.env.GITHUB_TOKEN,
            "user-agent": "rodcordeiro"
          })
          .then((response)=>{
            if (response.status == 401){
              let state = generateUniqueId()
              res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUBAPP_CLIENT_ID}&redirect_uri=http%3A%2F%2Fcordeiro-backend.herokuapp.com%2Fgithub%2Ftoken&scope=repo%20user&state=${state}&allow_signup=false`)
            }
          })
    },
    async generateToken(req, res){
      const code = req.query.code;
      const state = req.query.state;

      await unirest.post("https://github.com/login/oauth/access_token")
        .type("json")
        .send({
          "client_id": process.env.GITHUBAPP_CLIENT_ID,
          "client_secret": process.env.GITHUBAPP_CLIENT_SECRET,
          "code": code,
          "state":state,
          "redirect_uri":"http://cordeiro-backend.herokuapp.com/github/token"
        })
        .then((response)=>{
          if (!response.body.error){
            process.env.GITHUB_TOKEN=`token ${response.body.access_token}`
            res.redirect(200,'/')
          }
        })
    },
    async createRepo(req,res){
        unirest
        .post('https://api.github.com/user/repos')
        .headers({
            "content-type": "application/json",
            "authorization": process.env.GITHUB_TOKEN,
            "user-agent":"RodCordeiro"
          })
        .type('json')
        .send(req.body)
        .then((response) => {

        var message = ` **Repository:** ${response.body.name},\n**Description:** ${req.body.description},\n**ssh_url:** ${response.body.ssh_url}\n**clone_url:** ${response.body.clone_url}\n**svn_url:** ${response.body.svn_url}`

        if (response.statusCode ==201){
            discord.sendMessage('testes_do_cordeiro',message)
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
            "authorization": process.env.GITHUB_TOKEN,
            "user-agent":"RodCordeiro"
          })
        .type('json')
        .then((response) => {

            var message = `Deleted repository ${repo}`

            if (response.statusCode == 204){
                discord.sendMessage('testes_do_cordeiro',message)
            }
            return res.status(response.statusCode).json(response.body)
            })
        }
}
