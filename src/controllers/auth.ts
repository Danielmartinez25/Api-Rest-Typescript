import { Request, Response } from "express";

const registerCtrl = async ({body} : Request, res : Response) => {
    const {email,password,name} = req.body;
    
}
const loginCtrl = async (req: Request, res: Response) => {

}
export {loginCtrl,registerCtrl}