import React from "react";

export default function ProductGrid() {
  const products = [
    { name: "Macbook Air M4", price: "₦1,500,000", img: "https://tse3.mm.bing.net/th/id/OIP.0jyyjA2hU573dFvqD1FpoAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "HP Elitebook", price: "₦500,000", img: "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/01/hp-spectre-x360-2024-2.jpg" },
    { name: "Lenovo", price: "₦360,000", img: "https://tse3.mm.bing.net/th/id/OIP.4FmRc35cIcBANwNmRkjyxAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "MSI", price: "₦2,500,000", img: "https://m.media-amazon.com/images/I/81-3FfpcwML._AC_.jpg" },
    { name: "Dell latitude 7400", price: "₦500,000", img: "https://tse1.mm.bing.net/th/id/OIP.kMMoXVkyfn79Zih65EK6hwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Azus", price: "₦400,000", img: "https://tse3.mm.bing.net/th/id/OIP.rkFWkxN0U_SpX_XmA-PmkwHaGK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Available Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h4 className="font-semibold text-gray-800 hover:text-blue-700 transition">
                {p.name}
              </h4>
              <p className="text-green-700 font-bold">{p.price}</p>
              <button className="mt-3 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
