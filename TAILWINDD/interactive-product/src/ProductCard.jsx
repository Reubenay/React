function ProductCard({ image, name, price }) {
  return (
    <div className="w-64 border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          {name}
        </h2>
        <p className="text-gray-700 font-bold mb-4">₦{price}</p>
        <button className="w-full bg-blue-900 text-white py-2 rounded-lg transition-colors duration-300 hover:bg-blue-900 active:bg-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
