import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
       <Image
          src="/404 error with a tired person-cuate.svg"
          alt="Page Not Found"
          width={400}
          height={300}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="text-yellow-500 hover:underline">
          Go back to Home
        </Link>
    </div>
  )
}

export default notfound