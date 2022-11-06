const express = require('express');
const Router = express.Router();
const formidable = require('formidable')
const fs = require('fs');
const vid = require('./pdf_schema');
Router.route('/').post(
    async(req, res) => {

        const formData = formidable({ multiples: true });

        formData.maxFileSize = 10000000000000000000000000 * 1024 * 1024;
        // console.log(formData)   

        formData.parse(req, async(err, fields, files) => {
            console.log(files, fields)


            if (String((files.file1.mimetype)).includes("pdf")) {
                const x = Math.floor((Math.random() * 100000000) + 1)
                var op = files.file1.filepath;
                var np = __dirname + "/public/" + x.toString() + ".pdf";
                fs.copyFile(op, np, err => console.log(err))
                const data = {
                    path: np,
                    name: files.file1.originalFilename,
                    cname: fields.cname,
                    sem: fields.semester,
                    subject: fields.subject,
                    year: fields.year,
                    course: fields.course


                }
                const dd = new vid(data);

                await dd.save()



            } else {
                res.send("only pdf files allowed")
            }
        })




    }
)
module.exports = Router;