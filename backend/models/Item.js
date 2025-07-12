import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  size: String,
  condition: String,
  tags: [String],
  images: [String],
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['available', 'swapped'], default: 'available' },
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
