import multer from 'multer';
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});
const upload = multer({ //게시판UI 만들고, PedroTech의 Multer 편을 보면서, MySql과 연결하기
    storage,
    fileFilter: (req, file, cb: any) => {
        if (['image/png', 'image/jpeg'].includes(file.mimetype)) cb(null, true);
        else cb(new Error("invalid file type~~"), true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
});

module.exports = { upload };