import mongoose from "mongoose";
import nc from "next-connect";

async function database(req, res, next) {
  const client = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (!client.connections[0].readyState) await client.connect();
  req.db = client;
  if(client.connections[0].readyState) console.log("Connected to database")
  return next();
}

const middleware = nc();
middleware.use(database);
export default middleware;
