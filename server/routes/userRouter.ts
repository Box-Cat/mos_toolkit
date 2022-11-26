import express, { Application, Request, Response, NextFunction } from 'express';
//const { Router } = require('express');
const userRouter = express.Router();
const { db } = require('../middleware/db')

//회원 등록
userRouter.post('/register', (req :Request, res :Response) => {
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    db.query("INSERT INTO mosquito.member (ID, PASSWORD, NAME ,EMAIL) VALUE( ?,?,?,?)",
        [id, password, name, email],
        (err: any, result: any) => {
            if (err) {
                console.log(err)
            } {
                res.send("Values Inserted");
            }
        }
    );
});

module.exports = { userRouter }