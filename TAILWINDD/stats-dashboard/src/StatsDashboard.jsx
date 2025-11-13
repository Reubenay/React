import React from "react";
import { TrendingUp, ShoppingCart, Users, DollarSign } from "lucide-react"; // optional icons

export default function StatsDashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "₦2.5M",
      change: "+12%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-300 text-green-700",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8%",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "bg-blue-300 text-blue-700",
    },
    {
      title: "Customers",
      value: "567",
      change: "+23%",
      icon: <Users className="w-6 h-6" />,
      color: "bg-yellow-300 text-yellow-700",
    },
    {
      title: "Revenue",
      value: "₦4.2M",
      change: "+15%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-purple-300 text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Dashboard Stats
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-6 rounded-lg shadow-md transition hover:shadow-xl hover:-translate-y-1 ${stat.color}`}
          >
            {/* Icon */}
            <div className="p-3 rounded-full bg-white mr-4">
              {stat.icon}
            </div>

            {/* Data */}
            <div>
              <p className="text-gray-800 font-semibold">{stat.title}</p>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-sm font-medium">
                <span className="text-green-700">{stat.change} ↑</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
