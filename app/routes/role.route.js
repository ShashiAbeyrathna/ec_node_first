const express = require('express');
const router = express.Router();

const roleController = require('../controllers/role.controller');

router.get('/', roleController.getAllRoles);
router.get('/:id',roleController.getSingleRole);
router.post('/',roleController.createRole);
router.put('/',roleController.updateRole);
router.delete('/:id',roleController.deleteRole);



module.exports = router;
