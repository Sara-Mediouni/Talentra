import Image from "next/image";

import React from 'react'

const TopCompanies = () => {
  return (
    <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      Top Companies Hiring
    </h2>
    <p className="text-gray-600 mb-10 max-w-xl mx-auto">
      Leading companies are actively hiring. Join them and find your dream job!
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
      {["Google", "Amazon", "Apple", "Airbnb", "Netflix", "Honda"].map((company, idx) => (
        <div key={idx} className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <Image
            src={`/logos/${company.toLowerCase()}.svg`}
            alt={company}
            className="h-12 mx-auto"
            height={200}
            width={200}
          />
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default TopCompanies
