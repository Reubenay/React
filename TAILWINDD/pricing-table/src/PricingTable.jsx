import React from "react";

export default function PricingTable() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Choose Your Plan
      </h1>

      {/* Responsive Grid: 1 column on mobile, 3 on desktop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic</h2>
            <p className="text-3xl font-bold text-green-700 mb-4">₦5,000<span className="text-base text-gray-500">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Access to basic features</li>
              <li>Email support</li>
              <li>5 GB storage</li>
            </ul>
          </div>
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
            Choose Plan
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="bg-green-700 text-white rounded-lg shadow-lg p-8 text-center transform scale-105 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-4xl font-bold mb-4">₦15,000<span className="text-base text-gray-200">/month</span></p>
            <ul className="space-y-2 mb-6">
              <li>All Basic features</li>
              <li>Priority support</li>
              <li>50 GB storage</li>
              <li>Advanced analytics</li>
            </ul>
          </div>
          <button className="bg-white text-green-700 px-6 py-2 rounded-md hover:bg-green-300 font-semibold">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Enterprise</h2>
            <p className="text-3xl font-bold text-green-700 mb-4">₦50,000<span className="text-base text-gray-500">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li> All Pro features</li>
              <li> Dedicated manager</li>
              <li> Unlimited storage</li>
            </ul>
          </div>
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
