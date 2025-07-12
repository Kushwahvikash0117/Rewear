import express from 'express';
import { uploadItem, getItems } from '../controllers/itemController.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.post('/upload', protect, upload.array('images', 3), uploadItem);
router.get('/', getItems);

export default router;
