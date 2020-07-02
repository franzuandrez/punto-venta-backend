const express = require('express');
const addressController = require('../controllers/addressController');
const address = require('../controllers/addressController');
const router = express.Router();

router.get('/address', addressController.getAll);
router.post('/address/store', addressController.store);
router.get('/address/:id', addressController.find);
router.put('/address/update', addressController.update);
router.delete('/address/delete/:id', addressController.delete);



module.exports = router;