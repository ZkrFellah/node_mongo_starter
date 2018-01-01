const Item = mongoose.model('item', itemSchema);

function insertItem(req, res, next) {
  const { attr1 ,attr2 ,attr3 } = req.body;
  if (!attr1) {
    return res.status(400).json({error: "attr1 is required"});
  }
  const item = new Item({
    attr1: attr1,
    attr2: attr2,
    attr3: attr3
  });
  item.save(function(err) {
    if (err) { return res.status(400).json(err); }
    return res.status(200).json({item_id: item._id});
  });
}

function getItems(req, res, next){
  Item.find({}, function (err, items) {
    if (err) { return res.status(400).json(err); }
    return res.status(200).json(items);
  });
}

function deleteItem(req, res, next){
  Item.findById(req.params.itemId, function(err, item){
    item.remove(function(err, item) {
      return res.status(200).json({deleted: req.params.itemId});
    });
  });
}
function updateItem(req, res, next) {
 Item.findById(req.params.itemId, function(err, task){
  const { attr1 ,attr2 ,attr3 } = req.body;
    item.save(function(err, item, count){
      return res.status(200).json({updated: req.params.itemId});
    })
  });
};

export { insertItem, getItems, deleteItem, updateItem }