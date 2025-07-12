import express from 'express';
import { requestSwap, respondSwap } from '../controllers/swapController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/request/:itemId', protect, requestSwap);
router.put('/respond/:id', protect, respondSwap);

export default router;
