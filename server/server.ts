import express, {Application, Request, Response, NextFunction} from 'express';
import multer from 'multer';
const {v4:uuid} = require("uuid");
const mime = require("mime-types");
const mysql = require('mysql');
const cors = require('cors');

const app : Application = express();
const port : number = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: '1234',
    database: 'mosquito'
  });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
  });
  const upload = multer({
    storage,
    fileFilter:(req, file, cb:any)=>{
        if(['image/png','image/jpeg'].includes(file.mimetype)) cb(null, true);
        else cb(new Error("invalid file type~~") , true);
    },
    limits:{
        fileSize: 1024 * 1024 * 5,
    }
});

app.get('/',(req : Request,res : Response)=>{
    res.send('Server~~');
});

app.post('/auth/register',(req,res)=>{
    console.log(req.body)
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    db.query("INSERT INTO mosquito.member (ID, PASSWORD, NAME ,EMAIL) VALUE( ?,?,?,?)",
    [id, password, name ,email],
    (err:any, result:any) => {
        if(err) {
            console.log(err)
        }{
            res.send("Values Inserted");
        }
    }
    );
})

app.use("/uploads",express.static("uploads")); //이미지 파일명을 주소로 사용

app.post('/upload', upload.single("imageTest"),(req,res)=>{
    console.log(req.file);
    res.json(req.file);
})

app.listen(port,()=>{console.log("Server running on PORT "+port)});