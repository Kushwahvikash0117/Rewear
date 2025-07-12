import Item from '../models/Item.js';
import cloudinary from '../utils/cloudinary.js';

export const uploadItem = async (req, res) => {
  const uploader = req.user._id;
  const { title, description, category, size, condition, tags } = req.body;
  const images = [];

  if (req.files && req.files.images) {
    const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.tempFilePath);
      images.push(result.secure_url);
    }
  }

  const item = await Item.create({ title, description, category, size, condition, tags: tags.split(','), images, uploader });
  res.json(item);
};

export const getItems = async (req, res) => {
  const items = await Item.find({ status: 'available' }).populate('uploader', 'name');
  res.json(items);
};
