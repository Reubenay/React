import React from "react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto">
        <img
          src="https://www.graphiceagle.com/wp-content/uploads/2025/11/future-ai-prompt-engineering.jpg"
          alt="Featured"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Article Section */}
      <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <article className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            The Future of Nigeria AIpreneurship
          </h1>
          <div className="text-sm text-gray-500 mb-6">
            By{" "}
            <span className="font-semibold text-green-700">Reuben Mulero</span>{" "}
            · Nov 13, 2025 · 5 min read
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nigeria’s AIpreneurship landscape is rapidly evolving with the rise
            of technology-driven startups. Young innovators are finding creative
            solutions to long-standing social and economic challenges, from
            agriculture to fintech.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            With growing access to digital tools, supportive government
            policies, and international collaborations, the potential for
            sustainable business growth is stronger than ever. However,
            entrepreneurs must remain resilient, adaptable, and ready to learn
            in an ever-changing market.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The next generation of Nigerian entrepreneurs will be defined by
            creativity, community impact, and the ability to harness innovation
            for inclusive growth.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Related Posts
          </h2>
          <ul className="space-y-3 text-green-700">
            <li>
              <a href="#" className="hover:underline">
                5 Ways AI is Transforming Business in Africa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to Start a Small Business in Nigeria
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Green Entrepreneurship: The Future of Sustainability
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Marketing for Emerging Entrepreneurs
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
