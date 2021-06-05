import mongoose from "mongoose";
let Schema = mongoose.Schema;

let tutorprofile = new Schema({
  tutorid: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Tutor",
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    enum: ['regular', 'hourly' , 'private' ]
  },
  subject: [{
    type: mongoose.Types.ObjectId,
    ref: "Subject",
  }],
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

let Tutorprofile = mongoose.model("Tutorprofile", tutorprofile);

export default Tutorprofile;
