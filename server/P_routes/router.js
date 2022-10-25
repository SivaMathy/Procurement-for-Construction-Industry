const express = require("express");
const router = express.Router();

const Patients = require("../P_models/PatientsSchema");

router.post("/form", async (req, res) => {
  console.log(req.body);
  const { name, age, address, mobile, gender, date } = req.body;

  if (!name || !age || !address || !mobile || !gender || !date) {
    res.status(422).json("plz fill the data");
  }

  try {
    const prepatient = await Patients.findOne({ mobile: mobile });
    console.log(prepatient);

    if (prepatient) {
      res.status(422).json("this Patient is already present");
    } else {
      const addpatient = new Patients({
        name,
        age,
        address,
        mobile,
        gender,
        date,
      });

      await addpatient.save();
      res.status(201).json(addpatient);
      console.log(addpatient);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//get all
router.get("/admin", async (req, res) => {
  try {
    const patientdata = await Patients.find();
    res.status(201).json(patientdata);
    console.log(patientdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user

router.get("/getpatient/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const patientindividual = await Patients.findById({ _id: id });
    console.log(patientindividual);
    res.status(201).json(patientindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

//update appointment

router.patch("/updatepatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedpatient = await Patients.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedpatient);
    res.status(201).json(updatedpatient);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete appointment
router.delete("/deletepatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletpatient = await Patients.findByIdAndDelete({ _id: id });
    console.log(deletpatient);
    res.status(201).json(deletpatient);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
