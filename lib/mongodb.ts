import { MongoClient } from 'mongodb';

// Ensure your MongoDB URI is correct in .env.local
const client = new MongoClient("mongodb://localhost:27017/splendours"); // MongoDB URI from environment variables

let isConnected = false; // Track connection status to avoid multiple connections

const connectToDatabase = async () => {
    if (!isConnected) {
        try {
            // Establish a connection to the MongoDB server
            await client.connect();
            isConnected = true; // Set the connection flag to true after connecting
            console.log('Successfully connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw new Error('MongoDB connection failed');
        }
    }

    const db = client.db('splendours'); // Use the database name 'splendours'
    return db;
};

export default connectToDatabase;
