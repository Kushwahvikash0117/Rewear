import express from 'express';
import { uploadItem, getItems } from '../controllers/itemController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/upload', protect, uploadItem);
router.get('/', getItems);

export default router;
