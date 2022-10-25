const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');


const medicine=require('../n_models/m_Medicines');





router.post("/med",(req,res)=>{
    const Medicines = new medicine({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        id: req.body.id,
        strength:req.body.strength,
        manufacturer:req.body.manufacturer,
        description:req.body.description,
        m_price:req.body.m_price,
        r_price:req.body.r_price,
        

    });
    Medicines.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"succesfully submitted"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error occured"});
    })
})

router.get('/show',(req,res)=>{
    medicine.find()
    .then(medicine=>res.json(medicine))
    .catch(err=>res.status(404).json({ noMedicinesfound: 'No Medicines found' }))
})

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    medicine.remove({ _id: id }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("error occured");
      } else {
        res.status(200).json({ msg: "successfully deleted" });
      }
    });
  });
  router.put("/update/:id", (req, res) => {
    const name = req.body.name;
    const manufacturer = req.body.manufacturer;
    const strength = req.body.strength;
    const description = req.body.description;
    const m_price = req.body.m_price;
    const r_price = req.body.r_price;
    const id = req.params.id;
    medicine
      .updateMany(
        { _id: id },
        { $set: { name: name, manufacturer: manufacturer,strength:strength,description:description,m_price:m_price,r_price:r_price } })
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
