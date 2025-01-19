import user from '../model/userModel.js';

export const create = async (req, res) => {
  try {
    const { email, name, feedback } = req.body;

    // Check if user already exists
    const userExist = await user.findOne({ email });

    if (userExist) {
      return res.status(400).json({ 
        statusCode: 400, 
        message: "User already exists" 
      });
    }

    // Create new user
    const newUser = new user({ name, email, feedback });
    await newUser.save();

    res.status(201).json({ 
      statusCode: 201, 
      message: 'Thank you! Your response has been submitted successfully.', 
      user: newUser 
    });
  } catch (error) {
    res.status(500).json({ 
      statusCode: 500, 
      message: 'Internal server error', 
      error: error.message 
    });
  }
};