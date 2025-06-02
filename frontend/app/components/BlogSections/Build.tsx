import Image from 'next/image'
import React from 'react'

const Build = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
    {/* Bloc de contenu */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        Build a Strong Personal Brand
      </h2>
      <div className="bg-emerald-50 p-6 rounded-2xl shadow-inner">
        <p className="text-gray-800 text-lg mb-4">
          Employers often Google your name. Make sure they find something inspiring.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Create a strong LinkedIn profile with real achievements.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Share insights or articles related to your industry.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Build a portfolio website to showcase your work.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Be consistent in tone, colors, and message across platforms.
          </li>
        </ul>
      </div>
     
    </div>

    {/* Illustration */}
    <div className="relative z-10">
      <Image
        src="/branding.svg"
        alt="Personal Branding"
        className="w-full max-w-md mx-auto"
        height={300}
        width={400}
      />
    </div>
  </div>

  {/* SVG décoratif en arrière-plan */}
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -bottom-20 -right-20 w-96 opacity-10 z-0"
  >
    <path
      fill="#fcd34d"
      d="M46.5,-44.2C59.8,-32.3,69.7,-16.1,69.6,0.3C69.5,16.6,59.5,33.3,46.2,44.7C32.9,56.1,16.5,62.2,1.5,60.4C-13.4,58.6,-26.8,48.9,-36.4,37C-46,25,-51.9,10.8,-53.7,-5C-55.5,-20.9,-53.1,-38.2,-42.5,-50C-31.9,-61.8,-15.9,-67.9,0.4,-68.4C16.6,-68.9,33.2,-63.6,46.5,-44.2Z"
      transform="translate(100 100)"
    />
  </svg>
</section>

  )
}

export default Build