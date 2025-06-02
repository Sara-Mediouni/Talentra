import Image from "next/image";

// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="min-h-screen bg-yellow-50 py-20 px-4 mt-20 items-center gap-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-10">
          We’d love to hear from you. Fill out the form and we’ll get back to
          you as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
           <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Contact us-amico.svg"
            alt="Contact Us"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>
        </div>
       
      </div>
    </section>
  );
}
