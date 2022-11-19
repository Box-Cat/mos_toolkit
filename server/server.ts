import express, {Application, Request, Response, NextFunction} from 'express';
import multer from 'multer';
const {v4:uuid} = require("uuid");
const mime = require("mime-types");

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

const app : Application = express();
const port : number = 5000;

app.get('/',(req : Request,res : Response)=>{
    res.send('Hello~~');
});

app.use("/uploads",express.static("uploads")); //이미지 파일명을 주소로 사용

app.post('/upload', upload.single("imageTest"),(req,res)=>{
    console.log(req.file);
    res.json(req.file);
})

app.listen(port,()=>{console.log("Server running on PORT "+port)});