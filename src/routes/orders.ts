import { Router,Request, Response } from "express";
import orderController from "../controllers/orders";
import  log  from "../middleware/log";

const router = Router();

router.get('/', orderController.getOrder)
router.get('/:id', orderController.getOrders)
// router.post('/', itemsController.postItem)
// router.delete('/:id', itemsController.deleteItem)
// router.put('/:id', itemsController.updateItem)

export {router}