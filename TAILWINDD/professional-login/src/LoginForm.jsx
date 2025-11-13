import React, { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Login successful! Welcome back.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm rounded-xl shadow-md p-6 space-y-5"
      >
   
        <h2 className="text-2xl font-bold text-center text-green-700">
          Welcome Back 
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-green-700 focus:ring-green-600 border-gray-300 rounded"
            />
            <span className="text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-green-700 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 transition ${
            loading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          ) : (
            "Login"
          )}
        </button>

            {message && (
          <p className="text-center text-green-700 font-medium mt-2">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
