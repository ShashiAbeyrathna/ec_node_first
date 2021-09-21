const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicle.controller');

router.get('/', vehicleController.getAllVehicles);
router.get('/:id',vehicleController.getSingleVehicle);
router.post('/',vehicleController.createVehicle);
router.put('/',vehicleController.updateVehicle);
router.delete('/:id',vehicleController.deleteVehicle);



module.exports = router;
