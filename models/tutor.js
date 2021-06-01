import mongoose from "mongoose";
let Schema = mongoose.Schema;

let tutor = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
  board: {
    type: String,
  },
  class: {
    type: String,
  },
  Mode: {
    type: String,
  },
  subject: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

mongoose.models = {};

let Tutor = mongoose.model("Tutor", tutor);

export default Tutor;
