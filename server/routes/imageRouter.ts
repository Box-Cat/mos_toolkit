import express, { Application, Request, Response, NextFunction } from 'express';

const imageRouter = express.Router();
const { upload } = require('../middleware/imageUpload')
const { db } = require('../middleware/db')

imageRouter.post('/upload', upload.single("image"), (req :Request, res :Response) => {
    console.log(req.file);
    //res.json(req.file);

    // const id = req.body.id;
    // const password = req.body.password;
    // const name = req.body.name;
    // const email = req.body.email;

    // db.query("INSERT INTO mosquito.member (ID, PASSWORD, NAME ,EMAIL) VALUE( ?,?,?,?)",
    //     [id, password, name, email],
    //     (err: any, result: any) => {
    //         if (err) {
    //             console.log(err)
    //         } {
    //             res.send("Values Inserted");
    //         }
    //     }
    // );


})

imageRouter.get('/images',(req :Request, res:Response)=>{});

module.exports = { imageRouter }