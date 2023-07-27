import {hash,compare} from 'bcryptjs'
const encrypt = async(password : string) =>{
    const passwordHash = await hash(password,8);
    return passwordHash;
}
const verify = async(password:string,passwordHash:string) => {
    const passwordVerify = await compare(password,passwordHash)
    return passwordVerify
}
export {
    encrypt,
    verify
}