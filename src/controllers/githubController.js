const api = require ('../Services/axios');
const discord = require('../Services/discord');

module.exports={
    async createRepo(req,res){
        var gitConfig = {
            headers: {'Authorization':'token ae67855cdb4b88783423ad3c4366fe88721aea86'}
          };
        await api.post("https://api.github.com/user/repos",req.body,gitConfig)
        .then(async function (response) {
            await discord.sendMessage({
                "content":`${response.data}`,
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            });

            return res.status(response.status).json(response.data
            )
        })
        .catch(function (error) {
            return res.status(response.status).json({
                status: error
        })
        })
    }
}

// async createRepo(req,res){
//     try{

//         await api.post("https://api.github.com/user/repos",{
//             "title": "Rock&Burguer",
//             "description": "Portifólio de apresentação do TCC em Comunicação Visual",
//             "private": false
//         },{
//             headers:{
//                 'Authorization':'token ae67855cdb4b88783423ad3c4366fe88721aea86'
//             }
//         })
//             .then(async function (response) {
              
//             await discord.sendMessage({
//                 "content":`
// **Repository:** ${response.body.name}
// **Description:** ${response.body.description}
// **ssh_url:** ${response.body.ssh_url},
// **clone_url:** ${response.body.clone_url},
// **link:** ${response.body.html_url}`,
//                 "username":"Lord Darth Vader",
//                 "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
//             });
//             return res.status(response.status).json({
//                 status: "Repository TESTE created"
//                 })
//           })
//           .catch(function (error) {
//             return res.status(response.status).json({
//                 status: error
//             })
//           });

        
       
//     } catch(error){
//         return res.status(400).json({
//             status: error
//         })
//     }
// }