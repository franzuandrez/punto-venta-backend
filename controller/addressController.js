const address = {};
const User = require('../models/address');

address.getAll = async (req, res) => {
    res.send('getAll');
    // await db.findAll()
    //     .then((address) => {
    //         res.json(address);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.sendStatus(500);
    //     });
};

address.store = async (req, res) => {
    res.send('store');
};
address.find = async (req, res) => {
    res.send(req.params.id);
};

address.update = async (req, res) => {
    res.send('update');
}

address.delete = async (req, res) => {
    res.send(req.params.id);
}



module.exports = address;