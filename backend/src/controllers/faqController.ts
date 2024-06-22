// src/controllers/faqController.ts
import { Request, Response } from 'express';
import dataStore from '../dataStore';

export const getFaqs = async (req: Request, res: Response) => {
  try {
    const faqs = dataStore.faqs
    res.json({ faqs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
};

export const getFaqAnswer = async (req: Request, res: Response) => {
  const { faqId } = req.body;

  try {
    const faqAnswer = dataStore.faqAnswers.find(answer => answer.id === faqId)
    const answer = faqAnswer ? faqAnswer.answer : 'Sorry, I do not have an answer for that question.';
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQ answer' });
  }
};
