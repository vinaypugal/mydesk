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
  
  since: {
    type: Date,
    default: Date.now,
  },
  // board: {
  //   type: String,
  // },
  // class: {
  //   type: String,
  //   enum: ['9', '10' , '11' , '12'],
  // },
  Mode: {
    type: String,
    enum: ['regular', 'hourly' , 'private' ]
  },
  subject: [{
    type: mongoose.Types.ObjectId,
    ref: "Subject",
  }],
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

let Tutorprofile = mongoose.model("Tutorprofile", tutorprofile);

export default Tutorprofile;
