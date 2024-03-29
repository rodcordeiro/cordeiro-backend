import DiscordController from './DiscordController';
const discord = new DiscordController();


function verifyBoard(boardId){
    if (boardId == "5e68d2962d3d5a363a47dbe8" || boardId == "5ec5586bf2afe861f95ac78e"){ //Akta || RodrigoController
        return "testes_do_cordeiro"
    }
    if (boardId == "5e979a60c03d201feb94a375"){ //ICNT
        return "icnt"
    }
    if (boardId == "5ee6d3ef4ff13f18e980b150"){ //DeathStar
        return "todo"
    }
    return "testes_do_cordeiro";
}

export default {
    async cardWebhook(req,res){
        console.log(req.body)
        if (req.body.action.type && req.body.action.type === "updateCard") return res.status(200).json({"message":"received"});
		if (req.body.action.type && req.body.action.type === "createCard"){
            const board = verifyBoard(req.body.action.data.board.id)
            const message = `**New card on Todo:**\n> ${req.body.action.data.card.name}`
            await discord.sendMessage(board, message,res);
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
