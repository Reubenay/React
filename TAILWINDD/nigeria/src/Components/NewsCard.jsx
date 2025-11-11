import React from 'react';

function NewsCard() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden group">
      
      <img 
        className="w-full h-56 object-cover" 
        src="https://tse4.mm.bing.net/th/id/OIP.aEAEG4TmNLDd2U7-wKucRAEsDI?rs=1&pid=ImgDetMain&o=7&rm=3" 
        alt="Lagos, Nigeria"
      />
      
      <div className="p-6">
        
        <span className="inline-block bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide mb-2">
          Politics
        </span>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700">
           Full list of 201 bills passed since 2015
        </h2>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          The Nigerian Senate on Wednesday passed the much-awaited Petroleum Industry Governance Bill (PIGB), with approval of five per cent levy on fuel sold across the country.

This was sequel to unanimous adoption of the report on the Bill presented by Chairman, Senate Committee on Petroleum (Upstream), Sen. Tayo Alasoadura, to the lawmakers during plenary.
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div>
            <span className="font-medium text-gray-800">Reuben Mulero</span>
            <span className="mx-1">•</span>
            <span>Nov 11, 2025</span>
          </div>
          <span className="text-xs font-medium">
            10 min read
          </span>
        </div>
        
        <a href="https://dailypost.ng/2018/03/29/nigerian-senate-full-list-197-bills-passed-since-2015/" className="font-bold text-green-600 hover:text-green-800 hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;