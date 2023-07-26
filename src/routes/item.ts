import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import logMiddleware from "../middleware/log";
const router = Router()
router
.get('/',getItems)
.get('/:id',logMiddleware, getItem)
.put('/:id',updateItem)
.post('/',postItem)
.delete('/:id',deleteItem)

export {router}