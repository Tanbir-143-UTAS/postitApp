import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  profilePic: {
    type: String,
<<<<<<< HEAD
    default: "user.png",
=======
 
>>>>>>> 2d21ab8340bced415398d798a17fed51d6ae919b
  },
});

const UserModel = mongoose.model("userinfos", UserSchema);
export default UserModel;
