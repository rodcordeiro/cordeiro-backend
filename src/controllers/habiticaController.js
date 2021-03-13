const api = require('../Services/api').habiticaApi

async function createChecklist(id){
    let items = [
        "Completar desafio",
        "Disponibilizar online",
        "Atualizar repositório",
        "Post Linkedin e Devto"
    ]
    items.forEach(async (item) =>{
        var options = {
            method: 'POST',
            url: `/tasks/${id}/checklist`,
            headers: {
            'Content-Type': 'application/json',
            'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
            'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
            'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
            },
            data: {
                text: item
            }
        };
        await api.request(options)
            .then(response=>{
                console.log(response.status)
            })
            .catch(function (error) {
                console.error(error.message);
            });
    })
}
       
var options = {
            method: 'POST',
            url: '/tasks/user',
            headers: {
                'Content-Type': 'application/json',
                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
            },
            data: {
                text: 'TESTE',
                type: 'todo',
                notes: '#### Perfil de um usuário\n\nCriar um componete de um perfil de um usuário! O modelo final está disponível na pasta \'design\'\n\n---\n[Challenge page](https://devchallenge.com.br/challenges/5f0b4acaa5fec43156149044/details)\n\n[Github](https://github.com/devchallenge-io/profile-component)',
                tags: ['8d03b473-d456-4628-8876-2ac6ff053e79'],
                priority: 2,
                attribute: 'str'
            }
        };

module.exports = {
    async createTask(req,res) {
        const id = await api.request(options)
        .then( async (response) => {
            console.log(response.data._id)
            return response.data._id
        })
        .catch(function (error) {
            console.error(error);
            return res.status(400).json(error.message)
        });
        await createChecklist(id)
        return res.status(200).send()

    }
}

