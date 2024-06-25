import express from 'express';
import { googleAuth, googleAuthCallback } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);

export default router;
