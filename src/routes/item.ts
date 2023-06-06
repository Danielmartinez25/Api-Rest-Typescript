import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
const router = Router()
router
.get('/',getItems)
.get('/:id', getItem)
.put('/:id',updateItem)
.post('/',postItem)
.delete('/:id',deleteItem)

export {router}