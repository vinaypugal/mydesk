import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let student = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

let Student = mongoose.model('Student', student);

export default Student;