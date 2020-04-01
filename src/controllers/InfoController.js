module.exports ={
    index(req,res){
        return res.json({
            Name: 'Rodrigo Cordeiro',
            email:'rodrigomendoncca@gmail.com',
            phone:'11 9 69187148',
            whatsapp: '+5511969187148',
            telegram: 'rodcodeiro'
        });
    },
}