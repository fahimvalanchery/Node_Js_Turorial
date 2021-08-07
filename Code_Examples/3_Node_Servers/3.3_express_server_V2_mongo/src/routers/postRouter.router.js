const express = require("express");
const router = express.Router();
const data = require("../../data");
// importing user controller
const UserController = require("../controllers/user.controller");

// add user in to array
router.post("/adduser", (req, res) => {
  let userData = req.body;
  console.log(req.body);
  data.users.push(userData);
  res.send({ users: data.users });
});

// add user into db
router.post("/useradd", UserController.addUser);
// update user on db
// router.post('/updateUser/:id',UserController.userUpdate)
router.put("/updateUser/:id", UserController.userUpdate);
// delete user from db
router.delete("/deleteUser/:id", UserController.userDelete);

module.exports = router;
