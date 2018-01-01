import Router from 'express';
import { 
  insertItem,
  getItems, 
  deleteItem, 
  updateItem
} from '../controllers/itemsController';

const router = Router();

router.route('/items')
  .get(getItems ) 
  .post(insertItem);

router.route('/items/:itemId')
  .put(updateItem)
  .delete(deleteItem);


export default router;
