module.exports = {
    index (req, res) {
        return res.json([{
            id:1,
            title:"Aurebesh Translator",
            description: "Um transcritor para Aurebesh, um sistema de escrita do universo Star Wars.",
            link:"https://rodcordeiro.github.io/Aurebesh-Translator/",
            github:"https://github.com/rodcordeiro/Aurebesh-Translator",
            img:"https://rodcordeiro.github.io/Aurebesh-Translator/Arquivos/SithEmblemTOR.png"
        },
        {
            id:2,
            title:"Daedric Translator",
            description: "Um transcritor para Daedric, o alfabeto de Elder Scroll.",
            link:"https://rodcordeiro.github.io/Daedric-Translator/",
            github:"https://github.com/rodcordeiro/Daedric-Translator",
            img:"https://rodcordeiro.github.io/Daedric-Translator/Arquivos/skyrim-icon-41570.png"
        },
        {
            id:3,
            title:"Be the hero!",
            description: "Projeto voltado para ongs que poderão cadastrar casos para quem tiver interesse em ajudar.",
            link:"http://cordeiro-bethehero-frontend.herokuapp.com/",
            github:"https://github.com/rodcordeiro/BeTheHero",
            img:"https://rodcordeiro.github.io/shares/img/heroes.png"
        },
        {
            id:4,
            title:"Rock & Burger",
            description: "Site desenvolvido para a hamburgueria e cervejaria Rock & Burguer como projeto de conclusão do curso técnico em comunicação Visual",
            link:"https://rodcordeiro.github.io/Projects/Rock&Burguer/index.html",
            github:"https://github.com/rodcordeiro/Projects/Rock&Burguer/",
            img:"https://rodcordeiro.github.io/Projects/Rock&Burguer/images/logo_oficial-u970.png"
        }])
    }
}