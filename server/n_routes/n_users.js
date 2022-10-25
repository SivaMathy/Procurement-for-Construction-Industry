process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");

const Users = require("../n_models/n_users");

const router = express.Router();

const nodemailer = require("nodemailer");

//save User
router.post("/user/save", (req, res) => {
  let newUser = new Users(req.body);
  let user = req.body.userName;
  let email = req.body.email;
  let phone = req.body.phone;
  let password = req.body.password;

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nishannisha330@gmail.com",
          pass: "vwrgqcedozekvjnc",
        },
      });

      let details = {
        from: "nishannisha330@gmail.com",
        to: email,
        subject: "Registration Successfull!!!",
        text:
          "Hi " +
          user +
          ",\n\n" +
          "=====Welcome to Hospital Zone.=====\n" +
          "You are successfully registered to ZONE hospital account.Your informations are below\n" +
          "User Name : " +
          user +
          "\n" +
          "Email Address : " +
          email +
          "\n" +
          "Mobile No : " +
          phone +
          "\n" +
          "Password : " +
          password +
          "\n\n" +
          "Thank You.\n" +
          "Management",
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log("It has an error", err);
        } else {
          console.log("Email sent successfully");
        }
      });

      return res.status(200).json({
        success: "User created successfully",
      });
    }
  });
});

//get user
router.get("/users", (req, res) => {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
});

//get a single user
router.get("/user/:id", (req, res) => {
  let userId = req.params.id;

  Users.findById(userId, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
});

//update user
router.put("/user/update/:id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
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
router.delete("/user/delete/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id).exec((err, deletedUser) => {
    if (err)
      return res.status(400).json({
        message: "Deleted Unsuccessful",
        err,
      });
    return res.json({
      message: "Deleted succesfull",
      deletedUser,
    });
  });
});

module.exports = router;
