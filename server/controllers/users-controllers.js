const users = require("../users.json");

const getUsers = async (req, res, next) => {
  try {
    res.status(200).json(users);
    console.log(users)
  } catch (error) {
    console.log(error);
  }
};

const getJoke = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const selectedJoke = users.users.find((u) => u.id === uid);
    res.status(200).json(selectedJoke);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    // const { id, name, email, phone, address, photo, company } = req.body;
    const { uid } = req.params;
    console.log("uid", uid);
    const selectedJoke = users.users.find((u) => u.id === uid);
    res.status(200).json(selectedJoke);
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = getUsers;
exports.getJoke = getJoke;
exports.updateUser = updateUser;
