import mongoose from "mongoose";
let Schema = mongoose.Schema;

let studentprofile = new Schema({
  studentid: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
  board: {
    type: String,
    required: true,
    enum: ['cbse', 'stateboard']
    
  },
  class: {
    type: String,
    enum: ['9', '10' , '11' , '12'],
    required: true,
  },
  schoolname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  parentmobile: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

let Studentprofile = mongoose.model("Studentprofile", studentprofile);

export default Studentprofile;
