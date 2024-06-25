import express from 'express';
import { handleIncomingEmails } from '../controllers/email.controller.js';

const router = express.Router();

router.post('/process', handleIncomingEmails);

export default router;
