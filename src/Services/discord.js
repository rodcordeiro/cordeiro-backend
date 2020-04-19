const unirest = require('unirest');

//PATHs
const discordURL = 'https://discordapp.com/api/'
const testes_do_cordeiro = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
        
module.exports ={
  async helloMessage(req,res){
    await unirest.post(discordURL + testes_do_cordeiro)
            .send({
                "content": "Heeey,\nHell yeah I'm alive!! Yep, be proud :smiley:.",
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response) {
                return res.status(response.statusCode).json(response.body)
            });
    },
  async sendMessage(template){
      await unirest.post(discordURL + testes_do_cordeiro)
            .send({
                "content": `${template}`,
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response) {
                console.log(response);
            });
        return true;
    },
    async habiticaMessage(req,res){
        console.log(req.body);
      await unirest.post(discordURL + testes_do_cordeiro)
            .send({
                "content": "Task activity",
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response) {
                
                return res.status(response.statusCode).json(response.body)
            });
        return true;
    }     

}