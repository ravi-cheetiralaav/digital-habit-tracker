import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    message: 'Digital Habit Tracker API is running!', 
    timestamp: new Date().toISOString() 
  });
});

// API routes will be added here

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});