import { Router,Request, Response } from "express";
import itemsController from "../controllers/products";
import  log  from "../middleware/log";

const router = Router();

router.get('/', itemsController.getItems)
router.get('/:id', itemsController.getItem)
// router.post('/', itemsController.postItem)
// router.delete('/:id', itemsController.deleteItem)
// router.put('/:id', itemsController.updateItem)

export {router}