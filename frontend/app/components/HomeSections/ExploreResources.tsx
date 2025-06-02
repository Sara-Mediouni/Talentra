import Image from 'next/image'
import React from 'react'

const ExploreResources = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Boost Your Career with Expert Tips
      </h2>
      <p className="text-gray-600 mb-6">
        Access guides, articles, and tools to help you grow your skills and land your dream job faster.
      </p>
      <button className="form-button">
        Explore Resources
      </button>
    </div>
    
    <div className="w-full relative flex justify-center items-center lg:w-1/2">
      <div className="absolute -top-12 -left-12 w-[500px] h-[500px] z-0 opacity-50 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#fde68a"
        d="M56.9,-46.3C68.6,-30.8,69.2,-7.4,63.2,12.6C57.2,32.7,44.6,49.6,28.4,56.3C12.2,63.1,-7.5,59.8,-28.3,52.3C-49.1,44.8,-71,33,-76.6,15.4C-82.3,-2.2,-71.8,-25.5,-56.3,-41.9C-40.9,-58.4,-20.4,-67.8,1.1,-68.7C22.7,-69.6,45.3,-61.9,56.9,-46.3Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
      <Image
        src="/folders.svg"
        alt="Career tips"
        className="w-full max-w-md z-10 mx-auto"
        height={500}
        width={500}
      />
    </div>
  </div>
</section>

  )
}

export default ExploreResources