const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const delivary = require("../n_models/m_delivary");

router.get("/test", (req, res) => res.send("Pharmacy routing Test!"));

router.post("/add", (req, res) => {
  const Delivary = new delivary({
    _id: new mongoose.Types.ObjectId(),
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phonenum: req.body.phonenum,
    city: req.body.city,
    district:req.body.district,
   province: req.body.province,
   address: req.body.address,
   isCheck:"False"
  });
  Delivary.save()
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
  delivary.find().exec((err, delivary) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingDelivary: delivary,
    });
  });
});
router.get("/show", (req, res) => {
    delivary
      .find()
      .then((delivary) => res.json(delivary))
      .catch((err) =>
        res.status(404).json({ noMedicinesfound: "No delivary details" })
      );
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
  router.put("/update/:_id", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phonenum = req.body.phonenum;
    const email = req.body.email;
    const city = req.body.city;
    const province = req.body.province;
    const district = req.body.district;
    const address = req.params.address;
    const _id = req.params._id;
    const isCheck=req.body.isCheck;
    delivary
      .updateMany(
        { _id: _id },
        { $set: { fname:fname,lname:lname,phonenum:phonenum,email:email,city:city,province:province,district:district,address:address,isCheck:isCheck} }
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
//changes check_2