import nc from "next-connect";
import connectDB from "@/middleware/connectDB";
import Tutor from "@/models/tutor";
import Tutorprofile from "@/models/tutorprofile";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import mongoose from "mongoose";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const userinfo = getSession(req, res);
  let doc = await Tutor.findOne({ email: userinfo.user.email }).populate(
    "profile", '-_id -studentid'
  );
  res.json(doc);
});

handler.post(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  // res.json(data)
  let tutor = await Tutor.findOne({ email: userinfo.user.email });
  const { name, dob, city, mobile, state, bio } = data;
  const created = new Tutorprofile({
    name,
    dob,
    city,
    mobile,
    state,
    bio,
    tutorid: tutor._id,
  });
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await created.save({ session: sess });
    tutor.profile = created;
    await tutor.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(400).json("failed");
  }
  res.status(200).json("success");
});

handler.patch(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let tutor = await Tutor.findOne({ email: userinfo.user.email });
  let tutorprofile = await Tutorprofile.findOne({ tutorid: tutor._id });
  const { name, dob, city, mobile, state, bio } = data;

  tutorprofile.name = name;
  tutorprofile.dob = dob;
  tutorprofile.city = city;
  tutorprofile.mobile = mobile;
  tutorprofile.state = state;
  tutorprofile.bio = bio;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await tutorprofile.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(400).json("failed");
  }
  res.status(200).json("success");
});

export default withApiAuthRequired(handler);
