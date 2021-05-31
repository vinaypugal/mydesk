import nc from "next-connect";
import connectDB from "../../../middleware/connectDB";
import User from '../../../models/user';
const handler = nc();

handler.use(connectDB);

handler.get(async(req, res) => {
  const { name, email, password } = {name:"shriram" , email:"mama@mama.com" , password:"mama"};
    if (name && email && password) {
        try {
          var user = new User({
            name,
            email,
            password,
          });
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  let doc = await User.findOne()
  res.json(doc);
});

handler.post((req, res) => {
  res.json({ hello: "world" });
});
handler.put(async (req, res) => {
  res.end("async/await is also supported!");
});
handler.patch(async (req, res) => {
  throw new Error(JSON.parse("Throws me around! Error can be caught and handled."));
});

export default handler;
