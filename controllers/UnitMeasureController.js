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

exports.findAll = async (req, res) => {
    try {
        const unitAll = await models.Unit_measure.findAll();
        return res.status(201).json({
            unitAll,
        });
    } catch (e) {
        return res.status(500).json({error: error.message})
    }
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