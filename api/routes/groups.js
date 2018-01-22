const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const groupMethod = require('../models/groupMethods');


//get all groups
router.get('/', (req, res, next) => {
    groupMethod.findAll()
        .then(result=> {
            res.status(200).json({ result });
            console.log(result);
        }).catch(error => {
            res.status(500).json({ error });
            console.log(error);
        });
});

//add group
router.post('/', (req, res, next) => {
    groupMethod.createGroup(req.body.name)
    .then(result => {
        res.status(200).json({ result });
        console.log(result);
    }).catch(error => {
        res.status(500).json({ error });
        console.log(error);
    });

});

//get by id
router.get('/:id', (req, res, next) => {
    groupMethod.findById(req.params.id)
        .then(result => {
            res.status(200).json({ result });
            console.log(result);
        }).catch(error => {
            res.status(500).json({ error });
            console.log(error);
        });
});

//update group
router.patch('/:id', (req, res, next) => {
    groupMethod.updateGroup(req)
        .then(result => {
            res.status(200).json({ result });
            console.log(result);
        }).catch(error => {
            res.status(500).json({ error });
            console.log(error);
        });
});

router.delete('/:id', (req, res, next) => {
    groupMethod.removeGroup(req)
        .then(result => {
            res.status(200).json({ result });
            console.log(result);
        }).catch(error => {
            res.status(500).json({ error });
            console.log(error);
        });
});


module.exports = router;