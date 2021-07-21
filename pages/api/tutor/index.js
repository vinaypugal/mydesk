import connectDB from "@/middleware/connectDB";
import Subject from "@/models/subject";
import Tutor from "@/models/tutor";
import Tutorprofile from "@/models/tutorprofile";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import mongoose from "mongoose";
import nc from "next-connect";

const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const userinfo = getSession(req, res);
  let doc = await Tutor.findOne({ email: userinfo.user.email }).populate({
    path: "profile",
    model: Tutorprofile,
    populate: {
      path: "subjects",
      model: Subject,
    },
  });
  res.json(doc);
});

handler.post(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let tutor = await Tutor.findOne({ email: userinfo.user.email });
  const { name, dob, city, mobile, state, bio, mode } = data;
  const created = new Tutorprofile({
    name,
    dob,
    city,
    mobile,
    state,
    bio,
    mode : mode,
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
  const { name, dob, city, mobile, state, bio, mode } = data;
  
  tutorprofile.name = name;
  tutorprofile.dob = dob;
  tutorprofile.city = city;
  tutorprofile.mobile = mobile;
  tutorprofile.state = state;
  tutorprofile.bio = bio;
  tutorprofile.mode = mode;
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

handler.put(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let tutor = await Tutor.findOne({ email: userinfo.user.email });
  let tutorprofile = await Tutorprofile.findOne({ tutorid: tutor._id });
  const { class: cls, board, subject: sub } = data;
  let subject = await Subject.findOne({ name: sub, class: cls, board: board });
  const unique = tutorprofile.subjects.find(
    (s) => s.toString() === subject._id.toString()
  );
  if (!!unique) {
    res.status(500).send("Already exists");
  }
  if (!unique) {
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      tutorprofile.subjects.push(subject);
      subject.tutors.push(tutor);
      await tutorprofile.save({ session: sess });
      await subject.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      res.status(400).json("failed");
    }

    res.status(200).json("success");
  }
});
handler.delete(async (req, res) => {
  const data = req.body;
  const userinfo = getSession(req, res);
  let tutor = await Tutor.findOne({ email: userinfo.user.email });
  let tutorprofile = await Tutorprofile.findOne({ tutorid: tutor._id });
  const { subjectid } = data;
  let subject = await Subject.findById(subjectid);
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    tutorprofile.subjects.pull(subject);
    subject.tutors.pull(tutor);
    await tutorprofile.save({ session: sess });
    await subject.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(400).json("failed");
  }

  res.status(200).json("success");
});

export default withApiAuthRequired(handler);
