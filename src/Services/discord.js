const api = require ('./axios');
const discordURL = 'https://discordapp.com/api/'

module.exports ={
    async sendMessage(req,res){
        const webhook = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
        console.log(req.body)
        try {
            await api.post(discordURL + webhook, {
                "content":"req.body",
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