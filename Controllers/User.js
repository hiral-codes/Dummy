import User from "../Models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { firstName, password } = req.body;

    const user = new User({
      firstName,
      password,
    });
    const SavedUser = await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

// export const createUser = async (req, res) => {
//   const { firstName, lastName, mobileNo, password } = req.body;
//   try {
//     const user = new User({
//       firstName,
//       lastName,
//       mobileNo,
//       password,
//     });
//     const savedUser = await user.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(400).json({ message: "Failed To Crteate User", error });
//   }
// };

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = User.findById(id);
    const deletedUser = await user.deleteOne();
    res.status(201).json(deletedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const user = User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
