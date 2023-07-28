import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface";
import userModel from "../models/user"
import { encrypt, verify } from "../utils/bcryptjs.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async({email,password,name}:User) =>{
    const checkIs = await userModel.findOne({email});
    if(checkIs){
        return "ALREADY_USER"
    }
    const passwordHash = await encrypt(password);
    const registerNewUser = await userModel.create({email,password : passwordHash,name});
    
    return registerNewUser;
}
const loginUser = async({email,password}:Auth) =>{
    const checkIs = await userModel.findOne({ email });
    if (!checkIs) {
        return "NOT_FOUND_USER"
    }
    const passwordHash = checkIs.password; 
    const passwordIsCorrect = await verify(password,passwordHash);
    if(!passwordIsCorrect) return "PASSWORD_INCORRECT";
    const token = generateToken(checkIs.email);
    return token;

}
export {registerNewUser,loginUser}