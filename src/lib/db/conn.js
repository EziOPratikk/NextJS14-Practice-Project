import mongoose from 'mongoose';

const connection = {};

export function handleDBConnection() {
  if (connection.isConnected) {
    console.log('Using existing db connection');
  } else {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log('connected to mongodb atlas successfully!'))
      .catch((error) => console.log(error));
  }
}