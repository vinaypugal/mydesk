import nc from "next-connect";
import connectDB from "../../../middleware/connectDB";
import Student from "../../../models/student";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  let doc = await Student.find();
  res.json(doc);
});

handler.post((req, res) => {
  res.json({ hello: "world" });
});
handler.put(async (req, res) => {
  res.end("async/await is also supported!");
});
handler.patch(async (req, res) => {
  throw new Error(
    JSON.parse("Throws me around! Error can be caught and handled.")
  );
});

export default handler;
