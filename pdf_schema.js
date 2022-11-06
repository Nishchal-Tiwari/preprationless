const mongo = require('mongoose')
module.exports = mongo.model("videos", new mongo.Schema({
    path: String,
    views: Number,
    uploaded_by: { type: String },
    name: { type: String },
    category: { type: String },
    if_college: { type: String },
    cname: String,
    sem: String,
    subject: String,
    year: Number,
    course: String,


    upload_date: { type: Date, default: Date.now },


}))