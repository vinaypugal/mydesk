import mongoose from "mongoose";
let Schema = mongoose.Schema;

let tutor = new Schema({
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
    ref: "Tutorprofile",
  },
});

mongoose.models = {};

let Tutor = mongoose.model("Tutor", tutor);

export default Tutor;
