"use client"
import React, { useState } from 'react';

const Add = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    oldPrice: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/addproducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        price: formData.price,
        oldPrice: formData.oldPrice,
        image: formData.image,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Product added:', data);
    } else {
      console.error('Failed to add product:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <div className="bg-green-200 min-h-screen flex items-center">
      <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label htmlFor="name" className="w-20 inline-block text-right mr-4 text-gray-500">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="price" className="w-20 inline-block text-right mr-4 text-gray-500">Price</label>
            <input
              name="price"
              id="price"
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="oldPrice" className="w-20 inline-block text-right mr-4 text-gray-500">Old Price</label>
            <input
              name="oldPrice"
              id="oldPrice"
              type="text"
              placeholder="Old price"
              value={formData.oldPrice}
              onChange={handleChange}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
          </div>
          <div className="flex items-center mb-10">
            <label htmlFor="image" className="w-20 inline-block text-right mr-4 text-gray-500">Image</label>
            <input
              name="image"
              id="image"
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
          </div>
          <div className="text-right">
            <button type="submit" className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
