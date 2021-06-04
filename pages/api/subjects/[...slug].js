import nc from "next-connect";
import connectDB from "../../../middleware/connectDB";
import Subject from "../../../models/subject";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const a = req.query.slug
  let doc = await Subject.find({ class: a[0], board: a[1]});
  res.json(doc)
});

export default handler;
