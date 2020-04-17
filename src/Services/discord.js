const api = require ('./axios');
const discordURL = 'https://discordapp.com/api/'

module.exports ={
    async sendMessage(template){
        const testes_do_cordeiro = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
        try {
            await api.post(discordURL + testes_do_cordeiro, template)
              .then(function (response) {
                // console.log(response);
              })
              .catch(function (error) {
                // console.log(error);
              });
            return true;
        } catch(err){
            console.log(err)
            return false;
        }
    },
    async habiticaMessage(req,res){
      const webhook = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
      try {
          await api.post(discordURL + webhook, {
              "content":"Task Activity",
              "username":"Lord Darth Vader",
              "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
          })
            .then(function (response) {
              // console.log(response);
            })
            .catch(function (error) {
              // console.log(error);
            });
          return res.status(200).json({message:"Message sent"})
      } catch(err){
          console.log(err)
          return res.status(400).json({message:"BadRequest"})
      }
  }   

}