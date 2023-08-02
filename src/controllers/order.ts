import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getOrder = (req: Request, res: Response) => {
    try {
        res.send({
            data : "ESTO SOLO LO VEN LAS PERSONAS CON SESSION JWT"
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ORDER')
    }
}
export { getOrder };