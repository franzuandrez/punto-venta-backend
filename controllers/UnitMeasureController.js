const models = require('../models');
exports.create = async (req, res) => {
    try {
        const unit = {
            name: req.body.name
        };
        const unitCreate = await models.Unit_measure.create(unit);
        return res.status(201).json({
            unitCreate,
        });

    } catch (e) {
        return res.status(500).json({error: error.message})
    }
};

exports.findAll = (req, res) => {
    //unitMeasureModel().findAll().then(un)
};


// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};