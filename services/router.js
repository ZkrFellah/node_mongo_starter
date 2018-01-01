var ItemsController = require('../controllers/itemsController');
var router = require('express').Router();

router.route('/items')
  .post(ItemsController.insertItem)
  .get(ItemsController.listItem);

router.route('/items/:id')
  .delete(ItemsController.deleteItem)
  .put(ItemsController.updateItem);

module.exports = router;
