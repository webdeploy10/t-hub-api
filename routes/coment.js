const router = require('express').Router();
let Coment = require('../models/coment.model');

router.route('/').get((req,res) =>{
    Coment.find()
    .then(coments=>res.json(coments))
    .catch(err=>res.status(400).json('error: '+err));
});


router.route('/add').post((req,res) =>{

    const comenter_name = req.body.comenter_name;
    const comenter_email = req.body.comenter_email;
    const coment = req.body.coment;
    const newComent = new Coment({comenter_name, comenter_email, coment});
    
    newComent.save()
    .then(()=>{res.json('Coment added!'); console.log("Dados inseridos com sucesso")})
    .catch(err=>{res.status(400).json('Error: '+err); console.log("Erro na insercao dos dados"+err)});
    
});

// Im doing this so that he can make the POST request
router.route('/add').options((req,res) =>{
    res.sendStatus(200)
})

module.exports = router;