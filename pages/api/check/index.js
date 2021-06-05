import nc from "next-connect";
import connectDB from "@/middleware/connectDB";
import Tutor from "@/models/tutor";
import Student from "@/models/student";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const handler = nc();

handler.use(connectDB);

handler.get(async (req, res) => {
  const token = getSession(req, res);
  let user;
  if (token.user["https://mydesk.app/roles"] === "tutor") {
    user = await Tutor.findOne({ email: token.user.email });
  } else {
    user = await Student.findOne({ email: token.user.email });
  }
  if (user.profile) {
    res.status(200).send("ok");
  } else if (user) {
    res.status(200).send("create");
  } else {
    res.status(404).send("denied");
  }
});

export default withApiAuthRequired(handler);
