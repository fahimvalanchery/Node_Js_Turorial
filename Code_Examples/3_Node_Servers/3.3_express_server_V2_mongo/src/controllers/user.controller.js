// importing user service
const UserService = require("../services/user.service");

/**
 * Get all Users
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
  let result = await UserService.fetchAllUsers();
  res.send({ users: result });
};
/**
 * Return user selected fields only
 * @param {*} req 
 * @param {*} res 
 */
const getUsersNameOnly = async (req, res) => {
  let result = await UserService.fetchAllUsersNameOnly();
  res.send({ users: result });
};

/**
 * Add user 
 * @param {*} req 
 * @param {*} res 
 */
const addUser = async (req, res) => {
  try {
    let userData = req.body;
    let result = await UserService.createUser(userData);
    // console.log(userData);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * find user by params id
 * @param {*} req 
 * @param {*} res 
 */
const findOneUserById = async (req, res) => {
  try {
    let userId = req.params.id;
    let resuklt = await UserService.findUserById(userId);
    console.log(userId);
    res.send(resuklt);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Update user by params id and body data 
 * @param {*} req 
 * @param {*} res 
 */
const userUpdate = async (req, res) => {
  try {
    let userId = req.params.id;
    let userdata = req.body;
    let resuklt = await UserService.updateUser(userId, userdata);
    res.send(resuklt);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Delete user by params id 
 * @param {*} req 
 * @param {*} res 
 */
const userDelete = async (req, res) => {
  try {
    let userId = req.params.id;
    let result = await UserService.deleteUser(userId);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUsers,
  addUser,
  findOneUserById,
  getUsersNameOnly,
  userUpdate,
  userDelete,
};
