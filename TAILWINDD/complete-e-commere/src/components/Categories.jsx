import React from "react";

export default function Categories() {
  const categories = [
    { name: "Dell", img: "https://tse2.mm.bing.net/th/id/OIP.FrZxDxIfql2uurcxwEQvOAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "HP", img: "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/01/hp-spectre-x360-2024-2.jpg" },
    { name: "Macbook", img: "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large_2x.jpg" },
    { name: "Lenovo", img: "https://tse3.mm.bing.net/th/id/OIP.4FmRc35cIcBANwNmRkjyxAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Shop by Category</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <p className="text-center py-3 font-semibold text-green-700">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
