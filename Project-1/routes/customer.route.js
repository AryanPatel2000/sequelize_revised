const express = require('express');
const router = express.Router();

const controller = require('../controller/customer.controller');
const checkDuplicateCustomer = require('../middleware/customer.middleware')

router.post('/create', checkDuplicateCustomer, controller.create);
router.get('/show',  controller.getRecord);
router.get('/:customerId', controller.findById);
router.put('/update/:customerId', controller.updateCustomer);
router.delete('/delete/:customerId', controller.deleteCustomer);



module.exports = router;