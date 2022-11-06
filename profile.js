const express = require('express');
const Router = express.Router();



Router.route('/:sname').get((req, res) => {
    res.send("Your profile name is " + req.params.sname)
})




module.exports = Router;