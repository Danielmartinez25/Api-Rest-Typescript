import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ({body} : Request, res : Response) => {
    const responseUser = await registerNewUser(body);
    return responseUser   
}
const loginCtrl = async ({body}: Request, res: Response) => {
    const {email,password} = body
    const responseUser = await loginUser({email,password});
    if (responseUser === "PASSWORD_INCORRECT"){
        res.status(403);
        res.send(responseUser);
    }else{
        return responseUser
    }
}
export {loginCtrl,registerCtrl}