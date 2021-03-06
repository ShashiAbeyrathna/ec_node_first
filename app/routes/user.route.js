const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id',userController.getSingleUser);
router.post('/',userController.createUser);
router.put('/',userController.updateUser);
router.delete('/:id',userController.deleteUser);



module.exports = router;
