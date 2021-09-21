const express = require('express');
const router = express.Router();

const userdetailsController = require('../controllers/userdetails.controller');

router.get('/', userdetailsController.getAllUserdetails);
router.get('/:id',userdetailsController.getSingleUserdetails);
router.post('/',userdetailsController.createUserdetails);
router.put('/',userdetailsController.updateUserdetails);
router.delete('/:id',userdetailsController.deleteUserdetails);



module.exports = router;
