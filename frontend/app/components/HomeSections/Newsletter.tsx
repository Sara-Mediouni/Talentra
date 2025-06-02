import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-20">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      Stay Updated With New Jobs
    </h2>
    <p className="text-gray-700 mb-8 max-w-xl mx-auto">
      Join our mailing list to receive the latest job openings, career tips, and exclusive insights—straight to your inbox.
    </p>

    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-auto px-5 py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <button
        type="submit"
        className="bg-teal-900 hover:bg-teal-950 text-white px-6 py-3 rounded-full transition"
      >
        Subscribe
      </button>
    </form>

    <p className="text-sm text-gray-500 mt-4">
      We respect your privacy. No spam ever.
    </p>
  </div>
</section>

  )
}

export default Newsletter