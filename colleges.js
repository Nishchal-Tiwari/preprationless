const express = require('express');
const Router = express.Router();

const data = require('./pdf_schema')

Router.route('/:cname').get(async(req, res) => {



    const x = await data.find({ cname: req.params.cname })

    res.send(x)



})




module.exports = Router;