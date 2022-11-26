import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
//const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
const { imageRouter } = require("./routes/imageRouter")
const { userRouter } = require("./routes/userRouter")


const app: Application = express();
const port = process.env.PORT
app.get('/',(req,res)=>{
    res.send('test')
})

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// const db = mysql.createConnection({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     password: process.env.DB_PWD,
//     database: process.env.DB_DATABASE 
// });

//router 등록
app.use("/board", imageRouter); 
app.use("/auth", userRouter);


//회원 가입 등록
// app.post('/auth/register', (req, res) => {
//     const id = req.body.id;
//     const password = req.body.password;
//     const name = req.body.name;
//     const email = req.body.email;
//     db.query("INSERT INTO mosquito.member (ID, PASSWORD, NAME ,EMAIL) VALUE( ?,?,?,?)",
//         [id, password, name, email],
//         (err: any, result: any) => {
//             if (err) {
//                 console.log(err)
//             } {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

app.listen(port, () => { console.log("Server running on PORT " + port) });