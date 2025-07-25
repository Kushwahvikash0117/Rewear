import React, { useState } from 'react';

function ProductDesign() {
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('#000000');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Design submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create New Design
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Design Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Design Name
            </label>
            <input
              type="text"
              placeholder="e.g. Summer Tee"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Describe your design..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fabric Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fabric Type
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Fabric</option>
              <option value="Cotton">Cotton</option>
              <option value="Linen">Linen</option>
              <option value="Denim">Denim</option>
              <option value="Silk">Silk</option>
            </select>
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 p-1 border border-gray-300 rounded-full"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Sketch/Design
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-700"
            />
            {image && (
              <img
                src={image}
                alt="Design Preview"
                className="mt-4 w-full h-auto rounded-md shadow-sm"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold"
            >
              Submit Design
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDesign;
