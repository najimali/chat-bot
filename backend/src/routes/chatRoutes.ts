// src/routes/faqRoutes.ts
import { Router } from 'express';
import { chat } from '../controllers/chatController'

const router = Router();
router.post('/chat', chat);
export default router;
