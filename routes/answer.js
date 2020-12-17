const router = require('express').Router();
let Answer = require('../models/answer.model');
const { route } = require('./coment');

router.route('/').get((req,res) =>{
    Answer.find()
    .then(answers=>res.json(answers))
    .catch(err=>res.status(400).json('error: '+err));
});



router.route('/add').post((req,res) =>{

    const video_name = req.body.video_name;
    const video_link = req.body.video_link;
    const video_description = req.body.video_description;
    const question = req.body
    const newAnswer = new Answer({video_name, video_link,video_description, question});
    
    newAnswer.save()
    .then(()=>{res.json('Coment added!'); console.log("Dados inseridos com sucesso")})
    .catch(err=>{res.status(400).json('Error: '+err); console.log("Erro na insercao dos dados"+err)});
    
});

module.exports = router;