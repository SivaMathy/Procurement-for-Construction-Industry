const express = require("express");

const Programs = require("../n_models/n_programs");

const router = express.Router();

router.post("/program/save", (req, res) => {
  let newProgram = new Programs(req.body);

  newProgram.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Program saved successfully",
    });
  });
});

//get program
router.get("/programs", (req, res) => {
  Programs.find().exec((err, programs) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPrograms: programs,
    });
  });
});

//get a single program
router.get("/program/:id", (req, res) => {
  let programId = req.params.id;

  Programs.findById(programId, (err, program) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      program,
    });
  });
});

//update program
router.put("/program/update/:id", (req, res) => {
  Programs.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, program) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      return res.status(200).json({
        success: "Update successfull",
      });
    }
  );
});

//delete user
router.delete("/program/delete/:id", (req, res) => {
  Programs.findByIdAndRemove(req.params.id).exec((err, deletedProgram) => {
    if (err)
      return res.status(400).json({
        message: "Deleted Unsuccessful",
        err,
      });
    return res.json({
      message: "Deleted succesfull",
      deletedProgram,
    });
  });
});

module.exports = router;
