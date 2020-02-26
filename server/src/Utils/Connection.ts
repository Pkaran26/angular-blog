import { MongoClient } from 'mongodb';

export const Connection = async ()=>{
  const Client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
  try {
    return Client.db("my_testdb");
  } catch (error) {
    return null;
  }
}

export default Connection;
