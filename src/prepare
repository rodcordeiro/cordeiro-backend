const unirest = require("unirest")

const labels = {
    beTheHero: '5ec564a1671f27369bdca7ef',
    'nonzero-apr20': '5ec564a1f0939a1acbb54640',
    RPGProject: '5ec564a1459d0c54fe74d18e',
    Conceptive: '5ec564a154c45d38fc965ce8',
    ICNT: '5ec564a232062f5ead9f425b',
    DEV: '5ec564a2af74c860b98a81ed',
    Akta: '5ec564a2d1e12539b1f99a32',
    DevBot: '5ec564a2bf8eab1d947d7b18'
  }  
const tags = {
    'c49a341c-ddce-4b67-befb-32e3017dce11': 'nonzero-apr20',
    'e186b88f-2663-4b42-b179-03153dd4e4a3': 'beTheHero',
    '8d03b473-d456-4628-8876-2ac6ff053e79': 'DEV',
    'd0c5d122-b4e1-4c25-80c4-b61c99927c77': 'DevBot',
    'ae8fdd56-847b-42b7-8a0a-3e0e5ceebff0': 'ICNT',
    '41ce19e8-cb8d-4703-bac7-ca573ff726bb': 'RPGProject',
    '6b724d09-61da-48bd-99cc-fa715b1887c0': 'Conceptive',
    'f99ee20c-8301-4a10-94f2-8bbfc75cb1ab': 'Akta'
  }
  
async function getTasks(){
    unirest.get("https://habitica.com/api/v3/tasks/user")
    .headers({
    "x-api-user": "c150cf43-bf4a-4c46-8912-9c04f77d3924",
    "x-api-key": "3a00e702-525c-41f2-a69a-d10b741b0c5c",
    "x-client": "c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI"
    })
    .end(function (res) {
        if (res.error) throw new Error(res.error);
        for(let task of res.body.data){
            if (task.type == "todo"){
                createCard(task)
            }
        }
    });

}
async function createCard(data){
    unirest("POST", "https://api.trello.com/1/cards")
    .query({
        "key": "607488c51e587df0b240d2cc42d8567f",
        "token": "e9858ed631b81a0ac6dae24f1c415ae2b626b3d44c8eb4c398ed9b127206e6f1",
        "name": data.text,
        "desc": data.notes,
        "idList": "5ec59b8bc638bc7058242559",
      })
    .then((res) =>{
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    })
}

getTasks();