"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItem = exports.deleteItem = exports.getItems = exports.insertItem = undefined;

var _item = require("../models/item");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insertItem(req, res, next) {
  var _req$body = req.body,
      attr1 = _req$body.attr1,
      attr2 = _req$body.attr2,
      attr3 = _req$body.attr3;

  if (!attr1) {
    return res.status(400).json({ error: "attr1 is required" });
  }
  var item = new _item2.default({
    attr1: attr1,
    attr2: attr2,
    attr3: attr3
  });
  item.save(function (err) {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json({ item_id: item._id });
  });
}

function getItems(req, res, next) {
  _item2.default.find({}, function (err, items) {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(items);
  });
}

function deleteItem(req, res, next) {
  _item2.default.findById(req.params.itemId, function (err, item) {
    item.remove(function (err, item) {
      return res.status(200).json({ deleted: req.params.itemId });
    });
  });
}
function updateItem(req, res, next) {
  _item2.default.findById(req.params.itemId, function (err, task) {
    var _req$body2 = req.body,
        attr1 = _req$body2.attr1,
        attr2 = _req$body2.attr2,
        attr3 = _req$body2.attr3;

    item.save(function (err, item, count) {
      return res.status(200).json({ updated: req.params.itemId });
    });
  });
};

exports.insertItem = insertItem;
exports.getItems = getItems;
exports.deleteItem = deleteItem;
exports.updateItem = updateItem;