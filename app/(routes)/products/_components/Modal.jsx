import { addToDb } from "@/app/copmonents/others/useTools";
import { useEffect, useState } from "react";

const Modal = ({ open, onClose, item }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); 
    }
  }, [open]);

  if (!isVisible) return null;

  const addToCart =(data)=>{
    addToDb(data.id,null)
    // console.log(data)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className={`modal-box w-11/12 max-w-3xl p-8 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
          open ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            <h2 className="text-2xl font-extrabold mb-4 text-center lg:text-left text-gray-800">
              Mens Premium Blank Full Sleeve T-Shirt - Chocolate
            </h2>
            <img
              className="w-52 lg:w-72 rounded-md shadow-md"
              src="https://fabrilife.com/products/6194db57812e9-square.jpg"
              alt="Product"
            />
          </div>

          {/* Right Section */}
          <div className="w-full mt-28 lg:w-1/2">
            <p className="text-lg font-semibold text-gray-600 mb-4">Select Size</p>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium">
                M
              </button>
              <button className="px-6 py-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium">
                L
              </button>
              <button className="px-6 py-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium">
                XL
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-5 mt-20">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Close
              </button>
              <button onClick={()=> addToCart(item)} className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
