import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}
const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_GETS_BLOG')

    }
}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')

    }
}
const postItem = (req: Request, res: Response) => {
    try {
    const data = req.body;
    res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_BLOG')

    }
}
const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG')

    }
}
export { getItem, getItems, updateItem, deleteItem, postItem };