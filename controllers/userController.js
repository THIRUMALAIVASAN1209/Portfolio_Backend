import user from '../model/userModel.js';

export const create = async (req, res) => {
  try {
    const { email, name, feedback } = req.body;

    // Check if user already exists
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exist' });
    }

    // Create new user
    const newUser = new user({ name, email, feedback });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
