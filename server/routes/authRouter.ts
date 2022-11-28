import express, { Application, Request, Response, NextFunction } from 'express';
import { appendFile } from 'fs';

const authRouter = express.Router();
const { db } = require('../middleware/db')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const cookie = require('cookie');


//회원 등록
authRouter.post('/register', async (req: Request, res: Response) => {
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds, (err: any, hash: any) => {
            if (err) {
                console.log(err)
            }

            db.query(" INSERT INTO mosquito.member (ID, PASSWORD, NAME ,EMAIL) VALUE( ?,?,?,?) ",
                [id, hash, name, email],
                (err: any, result: any) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Values Inserted");
                    }
                }
            );
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
});

//세션 정보, 프론트로 갖고오기
authRouter.get("/login", (req: any, res: any) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})


//로그인
authRouter.post('/login', async (req: any, res: any) => {
    const id = req.body.id;
    const password = req.body.password;

    try {
        //DB에서 유저 찾기
        db.query(" SELECT * FROM mosquito.member WHERE member.id = ? ",
            [id],
            async (err: any, result: any) => {
                if (err) {
                    console.log("에러", err)
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].PASSWORD, (error: any, response: any) => {
                        if (response) {
                            req.session.user = result;
                            console.log("login 성공", req.session.user)
                            res.send(result)
                        } else {
                            console.log("login 실패")
                            res.send({ message: "Wrong id/passwor combination" });
                        }
                    });

                } else {
                    res.send({ message: "User doesn't exist" });
                    console.log("유저없다")
                }
            }
        );
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
});


//로그아웃
authRouter.post('/logout', async (req: any, res: any) => {
    console.log("req.session.user", req.session.user)

    try{
        if (req.session.user) {
            req.session.destroy(function (err: any) {
                if (err) throw err;
                console.log('세션 삭제하고 로그아웃됨');
                res.redirect('/');
            });
        }
        else {
            console.log('로그인 상태 아님');
            res.redirect('/');
        }
    }catch(error){
        console.error(error)
        return res.status(500).json(error);
    }
}

)


module.exports = { authRouter }