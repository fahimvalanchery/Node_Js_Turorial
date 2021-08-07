/**
 * Importing User model
 */
const UserModel = require("../models/user.model");

/**
 * Fetch all users in db with sorting
 * @returns
 */
const fetchAllUsers = async () => {
  // let users = await UserModel.find()
//   let users = await UserModel.find().sort({ name: -1 });
  let users = await UserModel.find().sort({ _id: -1 });
  return users;
};

/**
 * Fetch user based on selected fields
 * @returns
 */
const fetchAllUsersNameOnly = async () => {
  let users = await UserModel.find().select("name");
  //   let users = await UserModel.find().select("-age");
  return users;
};

/**
 * Create a new user with userdata
 * @param {*} userData
 * @returns
 */
const createUser = async (userData) => {
  try {
    let user = new UserModel(userData);
    // console.log(user);
    let savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

/**
 * find user/s by some query
 * @param {*} userId
 * @returns
 */
const findUserById = async (userId) => {
  // let reslt=await UserModel.findById(userId)
  // let reslt=await UserModel.findOne({_id:userId})
  // let reslt=await UserModel.findOne({age:userId})
  let reslt = await UserModel.find({ _id: userId });
  return reslt;
};

/**
 * update User by user user id and update data
 * @param {*} userId
 * @param {*} updateData
 * @returns upated user new data
 */
const updateUser = async (userId, updateData) => {
  try {
    // condition
    // update val
    let reslt = await UserModel.findOneAndUpdate({ _id: userId }, updateData, {
      new: true,
    });
    return reslt;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete User By User Id
 * @param {*} userId
 * @returns  deleted user
 */
const deleteUser = async (userId) => {
  try {
    let result = await UserModel.findOneAndDelete({ _id: userId });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAllUsers,
  createUser,
  findUserById,
  fetchAllUsersNameOnly,
  updateUser,
  deleteUser,
};
