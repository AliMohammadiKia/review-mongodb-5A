import mongoose from "mongoose";

// define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // default = false
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    trim: true,
    minLength: 11,
    maxLength: 11,
  },
});

// define model
const User = mongoose.model("User", userSchema);
export default User;
