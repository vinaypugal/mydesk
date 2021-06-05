import nc from "next-connect";
import connectDB from "@/middleware/connectDB";
import Tutor from "@/models/tutor";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const subject = req.query.slug
  try{
  let doc = await Tutor.find().populate('profile');
  res.status(200).json(doc)
  }
  catch{
    res.status(400).json("cannot fetch")
  }
});

export default handler;
