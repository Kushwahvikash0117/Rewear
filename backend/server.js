import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import swapRoutes from './routes/swapRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import loadEnv from './config/dotenvConfig.js';


loadEnv();


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));


// enable file uploads with temp files
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));


app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/swaps', swapRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
