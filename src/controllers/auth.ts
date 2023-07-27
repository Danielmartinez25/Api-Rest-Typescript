import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ({body} : Request, res : Response) => {
    const responseUser = await registerNewUser(body);
    return responseUser   
}
const loginCtrl = async ({body}: Request, res: Response) => {
    const {email,password} = body
    const responseUser = await loginUser({email,password});
    return responseUser
}
export {loginCtrl,registerCtrl}