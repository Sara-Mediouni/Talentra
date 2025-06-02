"use client";
import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

export default function FindCandidatesPage() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen mt-20 py-12 px-4 sm:px-6 lg:px-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Find the Best Candidates</h1>
        <p className="text-gray-600 text-lg">Search through thousands of talented professionals</p>
      </div>

      {/* Search bar */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col lg:flex-row items-center gap-4">
        <div className="flex w-full lg:w-1/3 items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Candidate skills, keywords..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex w-full lg:w-1/3 items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <FaMapMarkerAlt />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
          Search
        </button>
        <button
          className="flex items-center gap-2 text-gray-700 hover:text-teal-900"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Filters */}
      {filtersOpen && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Expertise</label>
            <select className="w-full border-gray-300 rounded-md">
              <option>All</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
            <select className="w-full border-gray-300 rounded-md">
              <option>All</option>
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Availability</label>
            <select className="w-full border-gray-300 rounded-md">
              <option>All</option>
              <option>Immediate</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6+ Months</option>
            </select>
          </div>
        </div>
      )}

      {/* Candidate listings */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Jane Doe</h2>
              <span className="text-sm text-teal-900 font-medium">Senior Frontend</span>
            </div>
            <p className="text-gray-500 mt-2">Paris, France</p>
            <p className="text-gray-600 mt-2 text-sm">
              Expert in React, TypeScript, and UI/UX design. Passionate about building beautiful and performant web apps.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Available immediately</span>
              <button className="text-teal-900 font-semibold hover:underline">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
