import mongoose from "mongoose";
let Schema = mongoose.Schema;

let student = new Schema({
  auth0: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: mongoose.Types.ObjectId,
    ref: "Studentprofile",
  },
});

mongoose.models = {};

let Student = mongoose.model("Student", student);

export default Student;
