const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      mesasge: "Fill all the details",
    });
  }
  const user_email = await User.findOne({ email });
  if (user_email) {
    res.status(401).json({
      message: "User AllReady Exist",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(400).json({
      mesasge: "Fill all the details",
    });

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      res.status(401).json({
        mesasge: "Invalid email or password",
      });
    }

    sendToken(user, 200, res);
  }
};

// Logout User
exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};
