import nc from "next-connect";
import connectDB from "../../../middleware/connectDB";
import Subject from "../../../models/subject";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const [cls , board] = req.query.slug
  let doc = await Subject.find({ class:cls , board});
  res.json(doc)
});

export default handler;
