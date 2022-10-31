const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const order = require("../csse_modals/order");



router.post("/add", (req, res) => {
  const Order = new order({
    _id: new mongoose.Types.ObjectId(),
    order_id: req.body.order_id,
    company_name: req.body.company_name,
    company_id: req.body.company_id,
    supplier_name: req.body.supplier_name,
   
    item:req.body.item,
    quantity: req.body.quantity,
    description: req.body.description,
    agreed_price: req.body.agreed_price,
    delivery_address: req.body.delivery_address,
    delivery_date: req.body.delivery_date,
    site_name: req.body.site_name,
   auditor_status:"Pendding",
   supplier_status:"Pendding",
 
  });
  Order.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "succesfully submitted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured" });
    });
});
router.get("/find", (req, res) => {
  order.find().exec((err, order) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingOrder: order,
    });
  });
});
router.get("/show", (req, res) => {
  order
    .find()
    .then((order) => res.json(order))
    .catch((err) =>
      res.status(404).json({ noMedicinesfound: "No delivary details" })
    );
});
router.put("/update/:_id", (req, res) => {

  const _id = req.params._id;
  const comments=req.body.comments;
  const auditor_status=req.body.auditor_status;
  const supplier_status=req.body.supplier_status;
  const comments_supplier=req.body.comments_supplier;

 order
    .updateMany(
      { _id: _id },
      { $set: { comments:comments,auditor_status:auditor_status,comments_supplier:comments_supplier,supplier_status:supplier_status} }
    )
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "successfully updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred" });
    });
});
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  delivary.remove({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("error occured");
    } else {
      res.status(200).json({ msg: "successfully deleted" });
    }
  });
});

module.exports = router;
