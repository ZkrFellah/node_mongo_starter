var ItemsController = require('../controllers/itemsController');
var router = require('express').Router();

router.route('/items')
  .get(ItemsController.listItem)
  .post(ItemsController.insertItem);

router.route('/items/:id')
  .get(ItemsController.getItem)
  .put(ItemsController.updateItem)
  .delete(ItemsController.deleteItem);

module.exports = router;
