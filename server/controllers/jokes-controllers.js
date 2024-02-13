const jokes = require("../jokes.json");

const getJokes = async (req, res, next) => {
  try {
    res.status(200).json(jokes);
    console.log(jokes)
  } catch (error) {
    console.log(error);
  }
};

const getJoke = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const selectedJoke = jokes.jokes.find((u) => u.id === uid);
    res.status(200).json(selectedJoke);
  } catch (error) {
    console.log(error);
  }
};

const updateJokes = async (req, res, next) => {
  try {
    // const { id, name, email, phone, address, photo, company } = req.body;
    const { uid } = req.params;
    console.log("uid", uid);
    const selectedJoke = jokes.jokes.find((u) => u.id === uid);
    res.status(200).json(selectedJoke);
  } catch (error) {
    console.log(error);
  }
};

exports.getJokes = getJokes;
exports.getJoke = getJoke;
exports.updateJokes = updateJokes;
