import Image from 'next/image'
import React from 'react'

const InterviewPrep = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
    {/* Texte à gauche */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Ready to Ace Your Interview?
      </h2>
      <p className="text-gray-600 mb-6">
        Interviews can be intimidating — but with the right preparation, you’ll walk in confident and ready. Here's how to get started:
      </p>

      <ul className="space-y-4 text-sm text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 font-bold">✔</span>
          Research the company, its culture, and recent projects before your interview.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 font-bold">✔</span>
          Prepare answers to common questions and structure them with the STAR method.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 font-bold">✔</span>
          Practice your body language, eye contact, and tone of voice.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 font-bold">✔</span>
          Get feedback from mock interviews with friends or mentors.
        </li>
      </ul>

      <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition">
        View Interview Resources
      </button>
    </div>

    {/* Illustration à droite */}
    <div className="relative">
      {/* Forme décorative SVG derrière */}
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 -left-10 w-72 opacity-20 z-0"
      >
        <path
          fill="#fcd34d"
          d="M56.9,-46.3C68.6,-30.8,69.2,-7.4,63.2,12.6C57.2,32.7,44.6,49.6,28.4,56.3C12.2,63.1,-7.5,59.8,-28.3,52.3C-49.1,44.8,-71,33,-76.6,15.4C-82.3,-2.2,-71.8,-25.5,-56.3,-41.9C-40.9,-58.4,-20.4,-67.8,1.1,-68.7C22.7,-69.6,45.3,-61.9,56.9,-46.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <Image
        src="/interview-cuate.svg" // Mets un fichier SVG dans /public/illustrations
        alt="Interview preparation"
        className="relative z-10 w-full max-w-md mx-auto"
        height={300}
        width={300}
      />
    </div>
  </div>
</section>

  )
}

export default InterviewPrep