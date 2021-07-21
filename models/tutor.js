import mongoose from "mongoose";
let Schema = mongoose.Schema;

let tutor = new Schema({
  auth0: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailverified: {
    type: Boolean,
    required: true,
  },
  profile: {
    type: mongoose.Types.ObjectId,
    ref: "Tutorprofile",
  },
  since: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

let Tutor = mongoose.model("Tutor", tutor);

export default Tutor;
