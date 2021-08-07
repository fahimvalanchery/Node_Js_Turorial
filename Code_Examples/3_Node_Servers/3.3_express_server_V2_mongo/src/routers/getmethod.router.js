const express = require("express");
const router = express.Router();
//
const data = require("../../data");
// user controller import
const userController = require("../controllers/user.controller");

// all users
router.get("/dbusers", userController.getUsers);
// user name only
router.get("/dbusersname", userController.getUsersNameOnly);
// selected user by id
router.get("/dbusers/:id", userController.findOneUserById);
/**
 * Get method routes
 */
router.get("/home", (req, res) => {
  // response with Html
  res.send("<p>home page</p>");
});

router.get("/about", (req, res) => {
  // response with Html file
  res.sendFile("./views/about.html", { root: __dirname });
});

router.get("/aboutnew", function (req, res) {
  // response with Html file with another code structure
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

router.get("/about-us", (req, res) => {
  // redirects to another path
  res.redirect("/about");
});

router.get("/users", (req, res) => {
  // let users=data.users
  let { users } = data; //same functionality of above code
  //   check the request contain any query is there or not
  if (req.query && Object.entries(req.query).length) {
    // query is not an empty object
    let { age } = req.query;
    // check if age is in query object
    if (age) {
      let selectedUsers = [];
      for (let index = 0; index < users.length; index++) {
        //   checking age is same with query age
        if (users[index].age == age) {
          selectedUsers.push(users[index]);
        }
      }
      res.send({ users: selectedUsers });
    } else {
      res.status(400).send({ msg: "Invalid query values" });
    }
  } else {
    // there is no query, is  {}
    res.send({ users });
  }
});

router.get("/users/:id", (req, res) => {
  // let users=data.users
  let { users } = data; //same functionality of above code
  // return selected User

  // access id from req
  let userId = req.params.id;
  let selected_user = {};
  for (let index = 0; index < users.length; index++) {
    if (users[index]._id == userId) {
      selected_user = users[index];
      res.send({ selected_user });
      return; // this return will stop if the user id selected, no nee to loop till last
    }
  }
  //   if it is already returned, then this code will not execute
  console.log("this will not execute if user is selecetd");
  res.send({ selected_user });
});

module.exports = router;
