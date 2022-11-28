import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();
const { imageRouter } = require("./routes/imageRouter")
const { authRouter } = require("./routes/authRouter")

const app: Application = express();
const port = process.env.PORT
app.get('/',(req,res)=>{
    res.send('test')
})

app.use(cors({
    origin: ["http://localhost:5000"],
    methos: ['GET','POST'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));
app.use(cookieParser())

app.use(
    session({
        key: "userId(session)",
        secret: "joni",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            expires: 60 * 60 * 24
        }
    })
);

//router 등록
app.use("/board", imageRouter); 
app.use("/auth", authRouter);


app.listen(port, () => { console.log("Server running on PORT " + port) });