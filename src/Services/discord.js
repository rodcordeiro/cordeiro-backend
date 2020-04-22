const unirest = require('unirest');

//PATHs
const discordURL = 'https://discordapp.com/api/'
const testes_do_cordeiro = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
const taverna_do_vader = 'webhooks/697454334455054357/2Of5GAKdFpm4yNLAQB8MUNZOS_aUtzdgUUuEozltUxxcn4W6vESiSwXofP7QEKa8e2_H';        
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
  async sendMessage(channel,template){
        if (channel == 'testes_do_cordeiro') channel = testes_do_cordeiro;
        if (channel == 'taverna_do_vader') channel = taverna_do_vader;
      
        await unirest.post(discordURL + channel)
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
                "content": `**Task ${req.body.type}**
                task: ${req.body.task.text},
                description: ${req.body.task.notes},
                
    `,
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response) {
                
                return res.status(response.statusCode).json(response.body)
            });
        return true;
    }     

}