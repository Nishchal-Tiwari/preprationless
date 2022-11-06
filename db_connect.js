const mongo = require('mongoose');
module.exports = function connect(dbname) {
    console.log('call done')
    mongo.connect("mongodb://localhost:27017/" + dbname).then(console.log("Sucessfully ! connected to database")).catch(err => console.log(err))
}