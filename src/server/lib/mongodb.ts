// lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

const uri = process.env.MONGODB_URI ?? "mongodb://root:example@localhost:27017";

interface MongooseGlobal {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseGlobal | undefined;
}

const cached: MongooseGlobal = (global.mongooseCache ??= {
  conn: null,
  promise: null,
});

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
