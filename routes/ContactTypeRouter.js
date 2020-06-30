const unitMeasure = require("../controllers/UnitMeasureController.js");

let router = require("express").Router();


// Retrieve all Tutorials
router.get("/show", function (req, res, next) {
    res.send('de tipo de contacto show');
});


module.exports = router;