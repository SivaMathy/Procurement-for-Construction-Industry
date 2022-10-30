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
  // const fname = req.body.fname;
  // const lname = req.body.lname;
  // const phonenum = req.body.phonenum;
  // const email = req.body.email;
  // const city = req.body.city;
  // const province = req.body.province;
  // const district = req.body.district;
  // const address = req.params.address;
  const _id = req.params._id;
  // const isCheck=req.body.isCheck;
  const comments=req.body.comments;
  const auditor_status=req.body.auditor_status;
 order
    .updateMany(
      { _id: _id },
      { $set: { comments:comments,auditor_status:auditor_status} }
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
module.exports = router;
