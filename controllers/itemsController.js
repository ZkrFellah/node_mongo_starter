const Item = require('../models/item');
// Get Element By ID
exports.getItem = function(req, res, next){
  Item.findById(req.params.id, function(err, item){
    if (err) { return res.status(400).json(err); }
    res.status(200).json(item);
  });
}
//Create Element
exports.insertItem = function(req, res, next) {
  var attr1  = req.body.attr1;
  var attr2  = req.body.attr2;
  if (!attr1) {
    return res.status(400).json({error: "attr1 is required"});
  }
    
  var item = new Item({
    attr1: attr1,
    attr2: attr2
  });
  item.save(function(err) {
    if (err) { return res.status(400).json(err); }
    res.json({item_id: item._id});
  });
}
//Get All Elements
exports.listItem = function(req, res, next){
  Item.find({}, function (err, items) {
    if (err) { return res.status(400).json(err); }
    res.status(200).json(items);
  });
}
//Delete Element by id
exports.deleteItem = function(req, res, next){
  Item.findById(req.params.id, function(err, item){
    item.remove(function(err, item) {
      if (err) { return res.status(400).json(err); }
      res.status(200).json({message : 'item deleted'});
    });
  });
}
//Update Element by id
exports.updateItem = function(req, res, next) {
 Item.findById(req.params.id, function(err, item){
    item.attr1 = req.body.attr1;
    item.attr2 = req.body.attr2;
    item.save(function(err){
      if (err) { return res.status(400).json(err); }
      res.status(200).json({message : "item updated"});
    })
  });
};
