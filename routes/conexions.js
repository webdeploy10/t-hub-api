const router = require('express').Router();
let Conexion = require('../models/conexion.model');

function replaceMonths(stringd){
    stringd = stringd.toUpperCase();
    stringd = stringd.replace("JAN", "1");
    stringd = stringd.replace("FEB", "2");
    stringd = stringd.replace("MAR", "3");
    stringd = stringd.replace("APR", "4");
    stringd = stringd.replace("MAY", "5");
    stringd = stringd.replace("JUN", "6");
    stringd = stringd.replace("JUL", "7");
    stringd = stringd.replace("AUG", "8");
    stringd = stringd.replace("SEP", "9");
    stringd = stringd.replace("OCT", "10");
    stringd = stringd.replace("NOV", "11");
    stringd = stringd.replace("DEC", "12");
    return stringd;
}

router.route('/stats').get((req, res) => {
    Conexion.find()
        .then((stats)=>{
            var newStats = [];
            for(var i = 0;i< stats.length;i++)
            {
                newStats[i] = replaceMonths((((String)(stats[i].createdAt)).substr(4,11)));
            }

            res.json(newStats);
        })
        .catch(err => console.log('error: ' + err));
});


module.exports = router;