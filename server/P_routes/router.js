const express = require("express");
const router = express.Router();

const site = require("../P_models/SitesSchema");

router.post("/form", async (req, res) => {
  console.log(req.body);
  const { name, mname, address, num, sdate, edate } = req.body;

  if (!name || !mname || !address || !num || !sdate || !edate) {
    res.status(422).json("plz fill the data");
  }

  try {
    const presite = await site.findOne({ mobile: mobile });
    console.log(presite);

    if (presite) {
      res.status(422).json("this site is already present");
    } else {
      const addsite = new site({
        name,
        mname,
        address,
        num,
        sdate,
        edate,
      });

      await addsite.save();
      res.status(201).json(addsite);
      console.log(addsite);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//get all
router.get("/admin", async (req, res) => {
  try {
    const sitedata = await site.find();
    res.status(201).json(sitedata);
    console.log(sitedata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user

router.get("/getsite/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const siteindividual = await site.findById({ _id: id });
    console.log(siteindividual);
    res.status(201).json(siteindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

//update appointment

router.patch("/updatesite/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedsite = await site.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedsite);
    res.status(201).json(updatedsite);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete appointment
router.delete("/deletesite/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletsite = await site.findByIdAndDelete({ _id: id });
    console.log(deletsite);
    res.status(201).json(deletsite);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
