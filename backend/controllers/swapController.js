import SwapRequest from '../models/SwapRequest.js';
import Item from '../models/Item.js';
import User from '../models/User.js';

export const requestSwap = async (req, res) => {
  const swap = await SwapRequest.create({ requester: req.user._id, item: req.params.itemId });
  res.json(swap);
};

export const respondSwap = async (req, res) => {
  const { status } = req.body;
  const swap = await SwapRequest.findById(req.params.id).populate('item');
  if (!swap || swap.item.uploader.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  swap.status = status;
  await swap.save();

  if (status === 'accepted') {
    const item = await Item.findById(swap.item._id);
    item.status = 'swapped';
    await item.save();

    const user = await User.findById(swap.requester);
    user.points += 10;
    await user.save();
  }

  res.json(swap);
};
