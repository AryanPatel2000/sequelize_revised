const Customer = require('../model/customer.model');
const db = require('../config/db.config');


exports.create = (req, res) => {
            
    try{
        
        Customer.email = req.body.email;
        Customer.firstName = req.body.firstName;
        Customer.lastName = req.body.lastName;
        Customer.city = req.body.city;
                
        Customer.create(Customer).then(result => {    
           
            res.status(200).json({
                message: "Upload Successfully a Customer with id = " + result.id,
                Customer: result,
            });
        
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getRecord = (req, res) => {

    Customer.findAll()
    .then( (customer) => {
        res.status(200).send({error:false, res:customer, message:'Records found'});
    })
    .catch( (err) => {
        res.status(500).send({error:true, message:err});
    })

 }

exports.findById = (req, res) => {

    Customer.findByPk(req.params.customerId) 
        .then( data => {
            res.status(200).send({error:false, res:data, message:'Records found'});
           
        })
        .catch( (err) => {
            res.status(500).send({error:true, message:err});
        })
    
}

exports.updateCustomer = (req, res) => {
    const id = req.params.customerId;
    Customer.update({ email: req.body.email, firstName: req.body.firstName, lastName:  req.body.lastName, city: req.body.city }, 
        { where: {id: req.params.customerId} }
        
    ).then( () => {
        res.status(200).send({ message: 'User Updated successfully with id:' + id });
    })
}

exports.deleteCustomer = (req, res) => {
    const id = req.params.customerId;
    Customer.destroy({
        where: {id:id}
    }).then( () => {
        res.status(200).send({ message: 'User deleted successfully with id: ' + id });
    })
}