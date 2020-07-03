const unitMeasure = require("../../controllers/UnitMeasureController.js");

let router = require("express").Router();


// Retrieve all UnitMeasure
//router.get("/show", unitMeasure.findAll());
router.post("/create", function(req, res){
    unitMeasure.create(req,res);
});

router.post("/show", function(req, res) {
    unitMeasure.findAll(req,res)
});


module.exports = router;