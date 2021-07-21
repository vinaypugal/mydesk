import nc from "next-connect";
import connectDB from "@/middleware/connectDB";
import Student from "@/models/student";
import Studentprofile from "@/models/studentprofile";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import mongoose from "mongoose";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const userinfo = getSession(req, res);
  let doc = await Student.findOne({ email: userinfo.user.email }).populate({
    path: "profile",
    model: Studentprofile,
  });
  res.json(doc);
});

handler.post(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let student = await Student.findOne({ email: userinfo.user.email });
  const {
    name,
    class: cls,
    board,
    dob,
    city,
    mobile,
    parentmobile,
    school,
    state,
  } = data;
  const created = new Studentprofile({
    name,
    class: cls,
    board: board.toLowerCase(),
    dob,
    city,
    mobile,
    parentmobile,
    school,
    state,
    studentid: student._id,
  });
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await created.save({ session: sess });
    student.profile = created;
    await student.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(400).json("failed");
  }
  res.status(200).json("success");
});

handler.patch(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let student = await Student.findOne({ email: userinfo.user.email });
  let studentprofile = await Studentprofile.findOne({ studentid: student._id });
  const {
    name,
    class: cls,
    board,
    dob,
    city,
    mobile,
    parentmobile,
    school,
    state,
  } = data;
  studentprofile.name = name;
  studentprofile.class = cls;
  studentprofile.board = board.toLowerCase();
  studentprofile.dob = dob;
  studentprofile.city = city;
  studentprofile.mobile = mobile;
  studentprofile.parentmobile = parentmobile;
  studentprofile.state = state;
  studentprofile.school = school;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await studentprofile.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(400).json("failed");
  }
  res.status(200).json("success");
});

export default withApiAuthRequired(handler);
