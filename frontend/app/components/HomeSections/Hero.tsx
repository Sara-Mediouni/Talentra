'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
  return (
<section className="hero">
  <div className="max-w-7xl flex justify-center items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
        Modernizing the<span className="text-teal-900">_</span>
        <br />
        Job Search Experience
      </h1>

      {/* Search input */}
      <div className="flex relative flex-wrap gap-4 items-center bg-white shadow-md border rounded-full
           border-gray-300 focus:outline-none ">
        <input
          type="text"
          placeholder="e.g. Search Your Needs"
          className="px-5 py-3 w-full sm:w-auto rounded-l-full"
        />
       
        <select
          className="px-4 py-3 appearance-none outline-none
           text-black font-bold border-none  focus:ring-0 bg-transparent"
        >
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Marketing</option>
        </select>
        <button className="button">
          <FaSearch />
        </button>
      </div>

      {/* Tags */}
      <div className="flex gap-3 flex-wrap text-sm text-gray-600 font-medium pt-2">
        <span className="hover:underline cursor-pointer">Popular Jobs</span>
        <span className="hover:underline cursor-pointer">Designer</span>
        <span className="hover:underline cursor-pointer">Web Developer</span>
        <span className="hover:underline cursor-pointer">Software Engineer</span>
      </div>
    </motion.div>
  </div>

  {/* Illustration + SVG background */}
  <div className="relative flex justify-center items-center mt-10">
    {/* SVG derrière l’image */}
    <svg
      className="absolute -z-10 w-72 h-72 md:w-96 md:h-96"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#f97316"  /* orange clair */
        fillOpacity="0.2"
        d="M43.6,-74.9C56.2,-66.7,62.3,-52.3,66.7,-39.4C71,-26.5,73.8,-15,70.3,-6.1C66.8,2.7,56.9,8.4,50.2,16.7C43.6,25,40.1,36,33.6,42.5C27.1,49,17.6,51,8.9,52.3C0.2,53.7,-7.1,54.3,-14.6,51.9C-22,49.5,-29.7,44.1,-34.8,36.3C-39.9,28.6,-42.3,18.5,-44.2,9.5C-46.1,0.6,-47.5,-7,-47.5,-14.4C-47.6,-21.8,-46.3,-29,-41.5,-35.6C-36.8,-42.2,-28.7,-48.2,-19.5,-55.2C-10.3,-62.1,-0.2,-69.9,10.3,-73.7C20.7,-77.6,41.4,-79.1,43.6,-74.9Z"
        transform="translate(100 100)"
      />
    </svg>

    <Image
      src="/Job offers-bro.svg"
      alt="Hero Image"
      width={600}
      height={400}
    />
  </div>
<div className="flex flex-wrap justify-center items-center gap-10 text-gray-500 max-w-7xl mx-auto px-6 py-12">
      <span className="text-sm font-semibold text-gray-700 mr-4">Trusted by</span>
      {['Google', 'Amazon', 'Microsoft', 'Netflix', 'Airbnb'].map(name => (
        <span key={name} className="text-lg font-semibold cursor-default">
          {name}
        </span>
      ))}
    </div>
</section>




  )
}
