const { json } = require('body-parser');
const express = require('express'); 
const router = express.Router();
const Contact = require('../models/contacts');

// router.get('/contacts', (req, res, next) => {
//     res.send('Retrieve contact list and call them buddies You know')

// });

//retrieving contacts
// router.post('/contact', (req, res, next) => {
//     // logic to add to  contact
//     if(post){

//     }

// });

router.get('/contacts', (rew, res, next) =>{
    Contact.find(function(err, contacts){
        res.json(contacts)
    })

});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    // logic to add to  contact

});
//add contact
router.post('/contact', (req, res, next) =>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, Contact) => {
        if (err){
            res.json({msg: "failed"});
        } else{
            res.json("contact added successfuly");
        }

    })

});

//delete contact
router.delete('/contact/:id', (req, res, next) =>{
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })

});


module.exports = router ;