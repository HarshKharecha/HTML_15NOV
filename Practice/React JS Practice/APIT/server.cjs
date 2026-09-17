const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allows requests from your React apps
    methods: ["GET", "POST"]
  }
});

// 1. Connect to MongoDB (Replace with your MongoDB Atlas URI if using cloud)
mongoose.connect('mongodb://localhost:27017/smarthome')
.then(() => console.log('Connected to MongoDB successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// 2. Database Schema
const DeviceSchema = new mongoose.Schema({}, { strict: false });
const DeviceState = mongoose.model('DeviceState', DeviceSchema);

// Helper function to get or initialize default data
async function getOrCreateInitialState() {
  let doc = await DeviceState.findOne({});
  if (!doc) {
    doc = new DeviceState({
      user1: {
        room: {
          "Living Room": { "s1": true, "s2": true, "s3": false, "s4": true, "s5": true },
          "Kitchen": { "s1": true, "s2": true, "s3": false, "s4": true, "s5": true },
          "Bedroom": { "s1": true, "s2": true, "s3": false, "s4": true, "s5": true },
          "Bathroom": { "s1": true, "s2": true, "s3": false, "s4": true, "s5": true },
          "Garage": { "s1": true, "s2": true, "s3": false, "s4": true, "s5": true }
        }
      }
    });
    await doc.save();
  }
  return doc;
}

// 3. API Routes for React Apps
// Get initial state
app.get('/api/state', async (req, res) => {
  try {
    const doc = await getOrCreateInitialState();
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update switch state (Called by Transmitter)
app.post('/api/update', async (req, res) => {
  const { room, switchKey, status } = req.body;
  
  try {
    const updatePath = `user1.room.${room}.${switchKey}`;
    
    // Update MongoDB dynamically
    await DeviceState.findOneAndUpdate(
      {}, 
      { $set: { [updatePath]: status } }, 
      { upsert: true, new: true }
    );

    // Fetch updated document and broadcast to all Receivers via Socket.io
    const updatedDoc = await DeviceState.findOne({});
    io.emit('stateUpdate', updatedDoc);

    res.json({ success: true, data: updatedDoc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Socket.io Connection
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});