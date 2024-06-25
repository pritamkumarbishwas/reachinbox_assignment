// index.js

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import emailRoutes from './routes/email.routes.js';
import { scheduleEmailChecking } from './scheduler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // scheduleEmailChecking();
});
