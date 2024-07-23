const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const authMiddleware = require('./middleware/auth');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Route handling
app.use('/api', userRoutes);
app.use('/api/projects', authMiddleware, projectRoutes);

// MongoDB connection
// const connectionString = 'mongodb+srv://himanshusingh01:Himanshu%4024@cluster0.9rbyj7a.mongodb.net/yourdatabase?retryWrites=true&w=majority';
const connectionString = 'mongodb+srv://harshgoel:Harsh%4001@cluster0.uibexfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
