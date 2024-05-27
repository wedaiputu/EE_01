import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://ppttugas:KrdGXOS1VuFObth5@cluster0.gd0n6wb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

async function connectToDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Successfully connected to MongoDB');
    database = client.db('EE_01');
    return database;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Connect to the database immediately
await connectToDatabase();

export default database;
