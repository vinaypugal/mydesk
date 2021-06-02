import mongoose from "mongoose";
let Schema = mongoose.Schema;

let subject = new Schema({
  name: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
    enum: ['cbse', 'stateboard'],
  },
  class: {
    type: String,
    required: true,
    enum: ['9', '10' , '11' , '12'],
  },
  tutors:[ {
    type: mongoose.Types.ObjectId,
    ref: "Tutor",
  }]
});

mongoose.models = {};

let Subject = mongoose.model("Subject", subject);

export default Subject;
