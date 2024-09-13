import User from "../models/User.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).send(users);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "name email");
    res.status(200).send(user);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    // if (!req.body?.name) {
    //   res.status(400).json({ message: "name field can not be empty!" });
    // }

    const user = await User.create(req.body);
    res.status(201).send({ data: user });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send({ data: user });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ data: user });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
