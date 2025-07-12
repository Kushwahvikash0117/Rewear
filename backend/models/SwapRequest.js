import mongoose from 'mongoose';

const swapSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('SwapRequest', swapSchema);
