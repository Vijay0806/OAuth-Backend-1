import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import passport from  './Utils/passportConfig.js';
import connectDB from './Database/db.js';
import authRoutes from './Routes/authRoutes.js';
import userRoutes from './Routes/userRoutes.js';

// Initialize dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/', userRoutes);

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/profile'); // Redirect to the profile if logged in
  } else {
    res.send(`<h1 style="color: blue; font-weight: bold; text-align:center;">Welcome to OAuth-App</h1>`);
   }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at Port:${PORT}`);
});
