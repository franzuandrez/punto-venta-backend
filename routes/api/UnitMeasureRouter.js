const unitMeasure = require("../../controllers/UnitMeasureController.js");

let router = require("express").Router();


// Retrieve all Tutorials
router.get("/franzua", function (req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;