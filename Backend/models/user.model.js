import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    address: {
      type: String,
      require: true,
    },

    phone: {
      type: String,
      require: true,
    },

    role: {
      type: String,
      default: "user",
    },

    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);
export default UserActivation;
