const discord = require('../Services/discord');

function verifyBoard(boardId){
    if (boardId == "5e68d2962d3d5a363a47dbe8"){ //Akta
        return "testes_do_cordeiro"
    }
    if (boardId == "5e979a60c03d201feb94a375"){ //ICNT
        return "icnt"
    }
}

module.exports = {
    async cardWebhook(req,res){
        if (req.body.action.type == "createCard"){
            const board = verifyBoard(req.body.action.data.board.id)
            const message = `**New card on Todo:**\n > ${req.body.action.data.card.name}`
            await discord.sendMessage(board, message);
        }
        return res.status(200).json({
            "status":"Received",
            "action":req.body.action.type
        })
        
    },
    async newWebhook(req, res){
        return res.status(200).json({test:"Webhook received"})
    }
}