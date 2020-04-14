const api = require ('./Services/axios');
const discordURL = 'https://discordapp.com/api/'

module.exports ={
    sendMessage(req,res){
        const webhook = 'webhooks/699699746855452673/DQMga4GEYErNQ2dYCEciHVhy8RjF7Ce3ODPRnWiBDO-HaNqlIiWw2asrePG62Qw-YXcw'
        try {
            await api.post(discordURL + webhook, {
                "content":"msg",
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        
        }
    }
}