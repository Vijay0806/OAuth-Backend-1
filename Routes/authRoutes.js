import express from 'express';
import {
     googleAuth,
     githubAuth,
     authCallback,
     redirectProfile,
     logoutUser 
    }
 from '../Controllers/authController.js';

import dotenv from 'dotenv';

dotenv.config(); 

const router = express.Router();

router.get('/google', googleAuth);
router.get('/google/callback', authCallback('google'), redirectProfile);


router.get('/github', githubAuth);
router.get('/github/callback', authCallback('github'), redirectProfile);

router.get('/logout', logoutUser);

export default router;
