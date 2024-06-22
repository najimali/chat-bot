// src/routes/faqRoutes.ts
import { Router } from 'express';
import { getFaqs, getFaqAnswer } from '../controllers/faqController';

const router = Router();

router.get('/faqs', getFaqs);
router.post('/faq-answer', getFaqAnswer);

export default router;
