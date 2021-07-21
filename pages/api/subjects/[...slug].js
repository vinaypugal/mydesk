import nc from "next-connect";
import connectDB from "@/middleware/connectDB";
import Subject from "@/models/subject";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const [cls , board] = req.query.slug
  try{
  let doc = await Subject.find({ class:cls , board});
  res.status(200).json(doc)
  }
  catch{
    res.status(400).json("cannot fetch")
  }
});

export default handler;
